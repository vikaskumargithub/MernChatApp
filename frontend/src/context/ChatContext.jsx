import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
useNavigate

let ChatContext=createContext()


let ChatProvider=({children})=>{
    let [user,setUser]=useState(null)
    let navigate=useNavigate()
    useEffect(()=>{
        let user=JSON.parse(localStorage.getItem("user"))
        console.log("user in context api",user);
        if(!user){
            navigate("/",{replace:true})
        }
        setUser(user)
    },[ navigate])

    return <ChatContext.Provider value={{user,setUser}}>
        {children}
    </ChatContext.Provider>
}

export let ChatState=()=>{
    return useContext(ChatContext)
}


export default ChatProvider;




