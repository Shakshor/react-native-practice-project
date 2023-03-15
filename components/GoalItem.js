import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  // destructure

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },

  pressedItem: {
    opacity: 0.5,
    color: "white",
  },

  goalText: {
    padding: 8,
    color: "white",
  },
});
