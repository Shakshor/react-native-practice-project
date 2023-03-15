import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

export default function GoalInput(props) {
  // destructure props
  const { onAddGoal } = props;

  // textInput filed state
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // event handler function
  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    // console.log(`inside add Goal ${enteredGoalText}`);
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
