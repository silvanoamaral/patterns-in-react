import React, { useState, useEffect } from "react"

import "./App.css"

import NewMessageForm from "./components/NewMessageForm"
import MessageList from "./components/MessageList"

const App = () => {
  const [messages, setMessages] = useState([])
  const [pedidos, setPedidos] = useState([])
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages])
  }

  useEffect(() => {
    const getPedidos = async () => {
      const result = await fetch("/api/pedido")
      const data = await result.json()
      setPedidos(data)
    }
    getPedidos()
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
    </div>
  )
}

export default App
