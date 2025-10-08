import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from "react-native";

const chats = [
  { id: 1, name: "Alice", lastMessage: "Hey, how are you?", time: "10:20 AM", avatar: require("./assets/USER.jpg") },
  { id: 2, name: "Bob", lastMessage: "See you tomorrow!", time: "09:45 AM", avatar: require("./assets/USER.jpg") },
  { id: 3, name: "Charlie", lastMessage: "Got it, thanks!", time: "Yesterday", avatar: require("./assets/USER.jpg") },
  { id: 4, name: "David", lastMessage: "Where are you?", time: "Yesterday", avatar: require("./assets/USER.jpg") },
];

const Home = ({ navigation }) => {
  const { container, header, headerText, setting, chatItem, chatAvatar, chatInfo, chatName, chatMessage, chatTime } = styles;

  return (
    <View style={container}>
      {/* Header */}
      <View style={header}>
        <Text style={headerText}>ChatX</Text>
        <Image source={require("./assets/setting.png")} style={setting} />
      </View>

      {/* Chat List */}
      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        {chats.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            style={chatItem}
            onPress={() => navigation.navigate("Chat", { userName: chat.name })}
          >
            <Image source={chat.avatar} style={chatAvatar} />
            <View style={chatInfo}>
              <Text style={chatName}>{chat.name}</Text>
              <Text style={chatMessage} numberOfLines={1}>{chat.lastMessage}</Text>
            </View>
            <Text style={chatTime}>{chat.time}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8ecf4",
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 40,
  },
  setting: {
    width: 30,
    height: 30,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 10,
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  chatAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#263238",
  },
  chatMessage: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
  },
  chatTime: {
    fontSize: 12,
    color: "#999",
  },
});

export default Home;
