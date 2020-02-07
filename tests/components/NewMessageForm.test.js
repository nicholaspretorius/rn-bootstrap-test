import React from "react";
import { render, fireEvent } from "react-native-testing-library";
import NewMessageForm from "../../components/NewMessageForm";

describe("NewMessageForm", () => {
  describe("tapping send", () => {
    const messageText = "Hello world!";

    let getByTestId;
    let sendHandler;

    beforeEach(() => {
      sendHandler = jest.fn();

      ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));

      fireEvent.changeText(getByTestId("messageText"), messageText);
      fireEvent.press(getByTestId("sendButton"));
    });

    it("clears the message field", () => {
      expect(getByTestId("messageText").props.value).toEqual("");
    });

    it("calls the sendHandler", () => {
      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
