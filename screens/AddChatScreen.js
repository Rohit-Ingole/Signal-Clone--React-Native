import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Input, Button } from "react-native-elements";
import { db } from "../firebase";
import firebase from "firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const [icon, setIcon] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
        chatImage: icon,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Input
        placeholder="Enter a name for the chat"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
      />
      <Input
        placeholder="Chat Group Icon (optional)"
        value={icon}
        onChangeText={(text) => setIcon(text)}
        leftIcon={<Icon type="entypo" name="image" size={24} color="black" />}
      />
      <Button title="Create chat" onPress={createChat} disabled={!input} />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
