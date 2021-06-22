import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { formatDate, getCountdownParts } from "./util";
import { deleteNote } from "./NoteService.js";
import * as RootNavigation from "./RootNavigation";

export default function NoteCard({ noteItem }) {
  const countdown = getCountdownParts(noteItem.date);

  return (
    <View style={styles.noteCard}>
      <View style={styles.noteCardHeader}>
        <Text style={styles.title}>{noteItem.title}</Text>
      </View>
      <Text style={styles.description}>{noteItem.description}</Text>
      <View style={styles.mt10}>
        <Button
          onPress={() =>
            RootNavigation.navigate("NoteEditForm", {
              id: noteItem._id,
            })
          }
          title="Редактирай"
        />
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() => {
            deleteNote(noteItem._id);
            RootNavigation.navigate("NoteIsDeleted", {});
          }}
          title="Изтрий"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#9EBFF5",
    width: "100%",
  },
  noteCardHeader: {
    flex: 1,
    backgroundColor: "#9EBFF5",
    flexDirection: "row",
  },
  title: {
    fontSize: 35,
    color: "#00000",
    textAlign: "left",
    flexBasis: "80%",
  },
  description: {
    fontSize: 25,
    marginTop: 16,
    color: "#00000",
  },
  mt10: {
    marginTop: 10,
  },
});
