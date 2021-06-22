import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "./util";
import { editNote, getNoteById } from "./NoteService";

class NoteEditForm extends Component {
  state = {
    id: "",
    title: "",
    date: Date.now(),
    description: "",
    showDatePicker: false,
  };

  componentDidMount() {
    const noteId = this.props.route.params["id"];
    getNoteById(noteId)
    .then(item => {
        this.setState({
            id: item._id,
            title: item.title,
            date: item.date,
            description: item.description
        })
    })
  }

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
    this.setState({ date: currentDate });
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Заглавие"
          value={this.state.title}
          onChangeText={this.handleChangeTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Описание"
          value={this.state.description}
          onChangeText={this.handleChangeDescription}
        />
        <Button
          title="Редактирай"
          onPress={() => {
            editNote({
              id: this.state.id,
              title: this.state.title,
              date: formatDate(this.state.date),
              description: this.state.description,
            }).then(() => this.props.navigation.goBack());
          }}
        />
      </View>
    );
  }
}
export default NoteEditForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
