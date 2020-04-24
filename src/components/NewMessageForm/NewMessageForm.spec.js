import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"

import NewMessageForm from "./"

describe("<NewMessageForm />", () => {
  let getByTestId
  let sendHandler

  afterEach(cleanup)

  describe("clicking the send button", () => {
    sendHandler = jest.fn()
    beforeEach(() => {
      ;({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />))

      fireEvent.change(getByTestId("messageText"), {
        target: {
          value: "New message",
        },
      })

      fireEvent.click(getByTestId("sendButton"))
    })

    it("clears the text field", () => {
      expect(getByTestId("messageText").value).toEqual("")
    })
    it("calls the send handler", () => {
      expect(sendHandler).toHaveBeenCalledWith("New message")
    })
  })
})
