import { useState, useEffect } from "react";
import axiosInstance from "../api/todoAxios";
import axios from "axios";

const AxiosUse = () => {
  const [todoTitle, setTodoTitle] = useState([]);

  // function todoApi() {
  //   const url = "https://jsonplaceholder.typicode.com/todos/";

  //   axios
  //     .get(url)
  //     .then((res) => setTodoTitle(res.data))
  //     .catch((error) => {
  //       console.log("데이터를 불러오지 못했습니다");
  //     });
  // }
  function todoApi() {
    axiosInstance
      .get()
      .then((res) => setTodoTitle(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    todoApi();
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

export default AxiosUse;
