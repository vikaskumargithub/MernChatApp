import { Avatar, Box, Button, Text,  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,useDisclosure, 
  Input} from "@chakra-ui/react"
import { BellIcon, SearchIcon } from '@chakra-ui/icons'
import { useRef } from "react"


const Chatnav = ({user}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <Box display="flex" justifyContent="space-between" padding={"1em"} alignItems={"center"}>
      <Button leftIcon={<SearchIcon/> } ref={btnRef} onClick={onOpen}>Search</Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search users</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Text>Chat app</Text>
      <Box display={"flex"} gap={"1em"} justifyContent={"space-between"} alignItems={"center"}>
        <BellIcon w={8} h={5}/>
        {/* <Avatar name={user.data.name} src={user.data.photo} size={"sm"}/> */}
        <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
      </Box>
    </Box>
  )
}

export default Chatnav