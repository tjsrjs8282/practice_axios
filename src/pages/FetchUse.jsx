import { useState, useEffect } from "react";

const FetchUse = () => {
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
    <div>
      <ul>
        {todoTitle.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.title}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchUse;
