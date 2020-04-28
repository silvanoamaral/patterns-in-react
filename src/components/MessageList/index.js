import React from "react"

const MessageList = ({ data }) => (
  <ul>
    {data.map((message) => (
      <li key={`${message}${Math.random()}`}>{message}</li>
    ))}
  </ul>
)

export default MessageList
