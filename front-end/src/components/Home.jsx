import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Spinner,
  Text,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

import { ArticleList } from "./ArticlesList";
import { SearchForm } from "./SearchForm";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "http://localhost:4500/mediumScrapper/articles"
        );
        setArticles(response.data);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const handleSearch = async (topic) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:4500/mediumScrapper/scrape",
        { topic }
      );
      console.log("scrap", response.data);
      setArticles(response.data.articles);
    } catch (error) {
      setError("Failed to fetch articles");
    }
    setLoading(false);
  };

  return (
    <Box p={10} mt="30px">
      <Heading mb={6} textAlign={"center"}>
        Medium Article Scraper and Viewer
      </Heading>
      <SearchForm onSearch={handleSearch} />
      {loading && (
        <VStack spacing={4}>


          
          <Spinner />
          <Text>Please wait...</Text>
        </VStack>
      )}
      {error && (
        <Alert status="error" mb={4}>
          <AlertIcon />
          <AlertTitle mr={2}>Error!</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setError("")}
          />
        </Alert>
      )}
      {/* articles listing here. */}
      <ArticleList articles={articles} />
    </Box>
  );
};

export { Home };
