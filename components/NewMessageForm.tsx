import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";

class NewMessageForm extends Component {
  state = {};

  handlePress = () => {
    console.log("Press");
  };

  render() {
    return (
      <View>
        <Text>Message: </Text>
        <TextInput testID="messageText" />
        <Button testID="sendButton" title="Send" onPress={this.handlePress} />
      </View>
    );
  }
}

export default NewMessageForm;
