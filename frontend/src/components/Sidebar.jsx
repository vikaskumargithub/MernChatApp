import { Avatar, Box, Text, VStack } from "@chakra-ui/react";
const dummyUsers = [
    { name: "Oshigaki Kisame", avatar: "https://bit.ly/broken-link" },
    { name: "Sasuke Uchiha", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    { name: "Naruto Uzumaki", avatar: "https://bit.ly/broken-link" },
    
  ];
const Sidebar = () => {
  return (
    <div>
      <Box w="250px" p={4} bg="gray.200" borderRight="1px solid #ddd">
        <VStack spacing={4} align="stretch">
          {dummyUsers.map((user, index) => (
            <Box key={index} display="flex" alignItems="center">
              <Avatar name={user.name} src={user.avatar} mr={3} />
              <Text>{user.name}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
    </div>
  );
};

export default Sidebar;
