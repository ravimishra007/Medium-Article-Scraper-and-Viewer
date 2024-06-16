import { useState } from 'react';
import { Box, Button, Input, FormControl } from '@chakra-ui/react';

const SearchForm = ({ onSearch }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic.trim()) {
      onSearch(topic);
    }else{
      setTopic("")
    }
    
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={6} >
      <FormControl display={"flex"} gap={"100px"}>
        <Input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic"
          width={"500px"}
          mb={4}
        />
        <Button type="submit" colorScheme="blue">
          Search
        </Button>
      </FormControl>
    </Box>
  );
};

export { SearchForm };
