import React, { useState } from "react";
import { Button, Table, Row, Col, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { add, deletes, completed } from "../store/todoState";
import Icon from "./Icon";
import EditModal from "./EditModal";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Todo() {
  // Retrieve the heading state from the store
  const stateTodoHeading = useSelector((state) => state.todo.heading);

  // Retrieve the list of tasks from the store
  const tasks = useSelector((state) => state.todo.list);

  // Retrieve the total number of tasks from the store
  const total = useSelector((state) => state.todo.total);

  // Retrieve the number of to-do tasks from the store
  const todo = useSelector((state) => state.todo.todo);

  // Retrieve the number of completed tasks from the store
  const complete = useSelector((state) => state.todo.complete);

  // State to handle new task input
  const [task, setTask] = useState("");

  // State to handle the current task being edited
  const [currentTask, setCurrentTask] = useState(null);

  // State to handle the index of the current task being edited
  const [currentIndex, setCurrentIndex] = useState(null);

  // State to manage the visibility of the edit modal
  const [showEditModal, setShowEditModal] = useState(false);

  const dispatch = useDispatch(); // Hook to dispatch actions to the store

  const handleAddTask = () => {
    if (task.trim() !== "") {
      // Ensure the task input is not empty
      dispatch(add(task)); // Dispatch the add action with the new task content
      setTask(""); // Reset the task input
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Check if the Enter key is pressed
      handleAddTask(); // Add the task
    }
  };

  const handleEditTask = (task, index) => {
    setCurrentTask(task); // Set the task being edited
    setCurrentIndex(index); // Set the index of the task being edited
    setShowEditModal(true); // Show the edit modal
  };

  return (
    <div>
      <header className="fixed-header">
        <Container>
          <Row className="black-background">
            <h1>
              {stateTodoHeading} <Icon />{" "}
            </h1>
          </Row>
          <Row>
            <Col className="align-left centre">
              <h4>Todo Stats</h4>
              <p className="align-left">
                To-do: {todo}
                <br />
                Complete: {complete} <br />
                Total: {total}
              </p>
            </Col>
            <Col className="align-items-centre justify-content-center">
              <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyUp={handleKeyPress}
                placeholder="Enter a task"
              />{" "}
              {/* Button to add a new task */}
              <Button variant="success" onClick={handleAddTask}>
                Add To-do
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
      <Table className="content" striped bordered hover>
        <thead>
          <tr>
            <th>Task</th>
            <th className="actions-column">Status</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr
              key={index}
              className={task.completed ? "completed-task" : ""}
              style={{ color: task.completed ? "grey" : "inherit" }}
            >
              <td>{task.content}</td>
              <td className="status-column">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => dispatch(completed(index))} // Toggle the task's completion status
                    style={{ marginRight: "8px" }}
                  />
                  {/* Display the task status */}
                  {task.completed ? "Completed" : "Pending"}{" "}
                </div>
              </td>
              <td className="button-group">
                <Button
                  variant="success"
                  onClick={handleAddTask}
                  disabled={task.completed} // Disable the button if the task is completed
                >
                  Add
                </Button>
                <Button
                  variant="warning"
                  onClick={() => handleEditTask(task, index)} // Open the edit modal with the current task
                  disabled={task.completed} // Disable the button if the task is completed
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deletes(index))} // Delete the task
                  disabled={task.completed} // Disable the button if the task is completed
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showEditModal && (
        <EditModal
          task={currentTask} // Pass the current task
          index={currentIndex} // Pass the current task index
          show={showEditModal} // Pass the modal visibility state
          handleClose={() => setShowEditModal(false)} // Close the edit modal
        />
      )}
    </div>
  );
}
