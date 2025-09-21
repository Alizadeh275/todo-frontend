import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

// export interface Todo {
//   id: number;
//   todo: string;
//   completed: boolean;
//   userId: number;
// }

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

// واکشی todos
export const getTodos = async (limit = 10, skip = 0) => {
  const res = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);
  return res.data; // { todos: Todo[], total, skip, limit }
};

// حذف todo
export const deleteTodo = async (id: number) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};

// تغییر وضعیت completed
export const toggleComplete = async (id: number, completed: boolean) => {
  const res = await axios.put(`${API_URL}/${id}`, { completed });
  return res.data;
};

// افزودن todo جدید (شبیه‌سازی)
export const addTodo = async (todo: { todo: string; userId: number }) => {
  const res = await axios.post(`${API_URL}/add`, todo);
  return res.data;
};
