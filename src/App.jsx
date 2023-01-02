import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todoTitle, setTodoTitle] = useState([]);
  const todosData = async (name) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todo = await response.json();
    setTodoTitle(todo);
  };

  useEffect(() => {
    todosData();
  }, []);

  return (
    <div className="App">
      <ul>
        {todoTitle.map((item) => {
          return (
            <li>
              <h2>{item.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
