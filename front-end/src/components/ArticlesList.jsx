import { Box, Heading, Link, Text, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Error404 from "./Error404";

const MotionBox = motion(Box);

const ArticleList = ({ articles }) => {
  return (
    <>
      <Box p="10px">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <MotionBox
              bg="hsl(93,43%,92%)"
              key={index}
              mb={6}
              p={5}
              boxShadow="md"
              borderWidth="1px"
              borderRadius="md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Heading size="md" color={"grey"}>
                <Text>Author Name : {article.authorName}</Text>
                <Text>
                  Date :{" "}
                  {article.article_date
                    ? new Date(article.article_date).toLocaleDateString()
                    : "No date available"}
                </Text>
                <Text>Title: {article.title}</Text>
              </Heading>
              <Heading size="md" mb={2}>
                {/* Article :   */}
                <Link
                  textDecoration="underline"
                  color={"blue"}
                  href={article.url}
                  isExternal
                >
                  {article.url}
                </Link>
              </Heading>
            </MotionBox>
          ))
        ) : (
          <Center>
            <Error404 />
          </Center>
        )}
      </Box>
    </>
  );
};

export { ArticleList };
