import React, { useState, useEffect } from "react"

import "./App.css"

import NewMessageForm from "./components/NewMessageForm"
import MessageList from "./components/MessageList"
import Pedidos from "./components/Pedidos"

const App = () => {
  const [messages, setMessages] = useState([])
  const [pedidos, setPedidos] = useState([])
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages])
  }

  useEffect(() => {
    const getPedidos = async () => {
      const result = await fetch("/api/pedidos")
      const data = await result.json()
      console.log(data)
      setPedidos(data)
    }
    getPedidos()
    /*
    fazer esse projeto 
     https://github.com/chaordic/frontend-challenger
    */
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
      {pedidos && <Pedidos data={pedidos} />}
    </div>
  )
}

export default App
