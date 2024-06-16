import { Box, Heading, Link, Text, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);


const ArticleList = ({ articles }) => {
  return (
    <Box>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <MotionBox
            key={index}
            mb={6}
            p={5}
            boxShadow="md"
            borderWidth="1px"
            borderRadius="md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Heading size="md" mb={2}>
              <Link href={article.url} isExternal>
                {article.title}
              </Link>
            </Heading>
            <Text>
              by {article.authorName} on{' '}
              {article.article_date ? new Date(article.article_date).toLocaleDateString() : 'No date available'}
            </Text>
          </MotionBox>
        ))
      ) : (
        <Center>
          <Text>No data available</Text>
        </Center>
      )}
    </Box>
  );
};

export { ArticleList };
