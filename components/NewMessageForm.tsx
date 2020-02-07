import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

class NewMessageForm extends Component {
  state = {
    inputText: ""
  };

  handleTextChange = text => {
    console.log("Text: ", text);
    this.setState({ inputText: text });
  };

  handlePress = () => {
    this.setState({ inputText: "" });
  };

  render() {
    const { inputText } = this.state;
    return (
      <View>
        <Text>Message: </Text>
        <TextInput value={inputText} testID="messageText" onChangeText={this.handleTextChange} />
        <Button testID="sendButton" title="Send" onPress={this.handlePress} />
      </View>
    );
  }
}

export default NewMessageForm;
