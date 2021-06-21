import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import NoteCard from "./NoteCard";
import moment from "moment";
import { getNotes } from "./NoteService";

class NoteList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      getNotes().then(events => this.setState({events}));
    });
    
    setInterval(() => {
      this.setState({
        events: this.state.events.map(item => ({
          ...item,
          updateTime: Date.now()
        }))
      });
    }, 1000); 
  }

  render() {
    return (
      <View style={styles.listView}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <NoteCard eventItem={item} />}
        ></FlatList>
        <Button
          onPress={() => this.props.navigation.navigate("NoteForm")}
          title="Add note"
        />
      </View>
    );
  }
}

export default EventList;

const styles = StyleSheet.create({
  listView: {
    paddingBottom: 40,
  },
});