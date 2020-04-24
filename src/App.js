import React, { useState } from "react"

import "./App.css"

import NewMessageForm from "./components/NewMessageForm"
import MessageList from "./components/MessageList"

const App = () => {
  const [messages, setMessages] = useState([])
  const handleSend = (newMessage) => {
    setMessages([newMessage, ...messages])
  }

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
