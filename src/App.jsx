import Header from "./Component/Header";
import Note from "./Component/Note";
import Footer from "./Component/Footer";
import Form from "./Component/Form";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }
  function handleDelete() {
    setTasks([]);
  }

  return (
    <>
      <Header />
      <Form onSubmit={addTask} />
      <div className="notes-grid">
        {tasks.map((task, index) => (
          <Note note={task} key={index} onDelete={handleDelete} />
        ))}
      </div>

      <Footer />
    </>
  );
}
export default App;
