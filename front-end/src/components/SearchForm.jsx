import { useState } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const SearchForm = ({ onSearch }) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) {
      onSearch(topic);
    } else {
      setTopic("");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={10}
    >
      <FormControl>
        <InputGroup h="55px">
          <Input
            borderRadius={"20px"}
            h="100%"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Search a topic."
            fontSize={"20px"}
            pr="4.5rem"
            boxShadow="md"
            sx={{
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
              },
            }}
          />
          <InputRightElement width="6.5rem" height="99%">
            <Button
              sx={{
                "&:hover": {
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                },
              }}
              type="submit"
              colorScheme="blue"
              h="100%"
              size="lg"
              borderRadius={"20px"}
            >
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export { SearchForm };