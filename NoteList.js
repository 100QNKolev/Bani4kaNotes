import React, { Component } from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";
import { FlatList } from "react-native";
import NoteCard from "./NoteCard";
import moment from "moment";
import { getNotes } from "./NoteService";

class NoteList extends Component {
  state = {
    notes: [],
  };
  image = { uri: "https://wallpapercave.com/wp/wp7002713.jpg" };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      getNotes().then(notes => this.setState({notes}));
    });
    
    setInterval(() => {
      this.setState({
        notes: this.state.notes.map(item => ({
          ...item,
          updateTime: Date.now()
        }))
      });
    }, 1000); 
  }

  render() {
    return (
      <View style={styles.listView}>
         <ImageBackground source={this.image} style={styles.image}>
        <FlatList
          data={this.state.notes}
          renderItem={({ item }) => <NoteCard noteItem={item} />}
        ></FlatList>
        <Button
          onPress={() => this.props.navigation.navigate("NoteForm")}
          title="Добави бележка"
        />
    </ImageBackground>
      </View>
    );
  }
}

export default NoteList;

const styles = StyleSheet.create({
  listView: {
    paddingBottom: 40,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center"
  }
});