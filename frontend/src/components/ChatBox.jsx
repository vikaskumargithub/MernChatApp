
import { Chatusers } from './Chatusers'
import { Chat } from './Chat'
import Chatnav from './Chatnav'
import { ChatState } from '../context/ChatContext.jsx'
import Sidebar from './Sidebar.jsx'

export const ChatBox = () => {
  let {user}=ChatState()
  console.log("user",user);
  return (
    <div>
        {user && <Chatnav user={user}/>}
        <Chatusers/>
        <Chat/>
        <Sidebar/>
    </div>
  )
}
