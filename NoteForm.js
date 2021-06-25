import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet, ImageBackground } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from './util';
import { addNote } from "./NoteService";

class NoteForm extends Component {
  state = {
    title: "",
    date: Date.now(),
    description: "",
    showDatePicker: false
  };
  image = { uri: "https://wallpapercave.com/wp/wp7002713.jpg" };

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  };

  handleChangeDescription = (value) => {
    this.setState({ description: value });
  };
  handleDatePicked = (note, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({date: currentDate});
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View>
                 <ImageBackground source={this.image} style={styles.image}>
        <TextInput
          style={styles.textInput}
          placeholder="Заглавие на бележката"
          value={this.state.title}
          onChangeText={this.handleChangeTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Опиши бележката тук"
          value={this.state.description}
          onChangeText={this.handleChangeDescription}
        />
        <Button title="Добави" onPress={
            () => {
              addNote({
                title: this.state.title,
               
                description: this.state.description
              })
              .then(() => this.props.navigation.navigate('ThankYou'));
            }
        } />
        </ImageBackground>
      </View>
    );
  }
}
export default NoteForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#9EBFF5",
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center"
  }
});