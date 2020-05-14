import React, { useState, useEffect } from "react"

import "./App.scss"

import NewMessageForm from "./components/NewMessageForm"
import MessageList from "./components/MessageList"
import Entrega from "./pages/Entrega"

const App = () => {
  const [messages, setMessages] = useState([])
  const [entrega, setEntrega] = useState(false)

  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages])
  }

  useEffect(() => {
    const getEntrega = async () => {
      const result = await fetch("/api/entrega")
      const data = await result.json()
      console.log(data)
      setEntrega(data)
    }
    getEntrega()
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
      {entrega && <Entrega data={entrega} />}
    </div>
  )
}

export default App
