import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  // useState hook
  // modal state
  const [modalIsVisible, setModalIsVisible] = useState(false);
  // goals state
  const [courseGoals, setCourseGoals] = useState([]);

  // event handler function
  // modal opener function
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  // modal cancel function
  const endGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    // process-1
    // setCourseGoals([...courseGoals, enteredText]);
    // process-2 (if the new state depends on previous state)
    // best practice way
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    /* ------- close the modal --------- */

    // setModalIsVisible(false) ----- or ---------
    endGoalHandler();
  };

  // delete button event handler
  const deleteGoalHandler = (id) => {
    // delete the course goals items directly
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      {/* -------- button for modal -------- */}

      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      {/* ---------- show all course goals --------- */}
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endGoalHandler}
      />

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
            return (
              <GoalItem
                text={itemData?.item?.text}
                id={itemData?.item?.id}
                onDeleteGoal={deleteGoalHandler}
              />
            );
            // console.log(itemData.item.text);
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
