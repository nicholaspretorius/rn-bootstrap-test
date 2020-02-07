import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

class NewMessageForm extends Component {
  state = {};
  render() {
    return (
      <View>
        <Text>Message: </Text>
        <TextInput testID="messageText" />
        <Button testID="sendButton" title="Send" />
      </View>
    );
  }
}

export default NewMessageForm;
