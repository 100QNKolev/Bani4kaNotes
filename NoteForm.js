import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
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

  handleChangeTitle = (value) => {
    this.setState({ title: value });
  };

  handleChangeDescription = (value) => {
    this.setState({ description: value });
  };

  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false });  
  };

  handleDatePicked = (note, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({date: currentDate});
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Note title"
          value={this.state.title}
          onChangeText={this.handleChangeTitle}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Note date"
          value={formatDate(this.state.date)}
          editable={!this.state.showDatePicker}
          onFocus={this.handleDatePress}
        />
        {
          this.state.showDatePicker &&
          <DateTimePicker
            value={this.state.date}
            mode="datetime"
            is24Hour={true}
            onChange={this.handleDatePicked}
          />
        }
        <TextInput
          style={styles.textInput}
          placeholder="Note..."
          value={this.state.description}
          onChangeText={this.handleChangeDescription}
        />
        <Button title="Add" onPress={
            () => {
              addNote({
                title: this.state.title,
                date: formatDate(this.state.date),
                description: this.state.description
              })
              .then(() => this.props.navigation.navigate('ThankYou'));
            }
        } />
      </View>
    );
  }
}
export default NoteForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});