import { Box, Text, Avatar, Input, InputGroup, InputLeftElement, IconButton, Flex } from "@chakra-ui/react";
import { PhoneIcon, AttachmentIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export const Chat = () => {
  return (
    <Box bg="gray.100" minH="100vh" display="flex" alignItems="center" justifyContent="center">
      <Box bg="white" w="400px" borderRadius="lg" overflow="hidden" boxShadow="lg">
        <Box bg="teal.500" p={4} display="flex" alignItems="center">
          <Avatar name="name" size="sm" mr={2} />
          <Text color="white" fontWeight="bold">Vikas kumar</Text>
        </Box>
        
        <Box p={4} bg="gray.50" flex={1} overflowY="auto" height="400px">
          {/* Placeholder for messages */}
          <Text textAlign="center" color="gray.500">No messages yet</Text>
        </Box>
        
        <Box p={4} bg="white" borderTop="1px solid #ddd">
          <Flex>
            <InputGroup>
              <InputLeftElement pointerEvents='none' children={<PhoneIcon color='gray.300' />} />
              <Input type='tel' placeholder='Message....'/>
            </InputGroup>
            <IconButton
              icon={<AttachmentIcon />}
              colorScheme="teal"
              variant="outline"
              ml={2}
            />
            <IconButton
              icon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="solid"
              ml={2}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
