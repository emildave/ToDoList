/**
 * My To Do List App
 * 
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm'; 

function App() {
  // Define a state variable for tasks
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView>
      {/* Pass tasks as props to the ToDoList component */}
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Add your styles here if needed
});

export default App;
