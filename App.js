import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  // useState hook
  // goals state
  const [courseGoals, setCourseGoals] = useState([]);

  // event handler function
  const addGoalHandler = (enteredGoalText) => {
    // process-1
    // setCourseGoals([...courseGoals, enteredText]);

    // process-2 (if the new state depends on previous state)
    // best practice way
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      {/* ---------- show all course goals --------- */}
      <GoalInput onAddGoal={addGoalHandler} />

      {/*------- list-processing-1 -----------*/}
      {/* <View style={styles.goalContainer}> 
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText} key={goal}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View> */}

      {/*------- list-processing-2 -----------*/}
      <View style={styles.goalContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
            // console.log(itemData);
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  goalContainer: {
    flex: 5,
  },
});
