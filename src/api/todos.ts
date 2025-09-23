import axios from "axios";

const API_URL = "https://dummyjson.com/todos";

const api = axios.create({
  baseURL: API_URL,
  timeout: 6000, // 3 seconds
});

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

// واکشی todos
export const getTodos = async (limit = 10, skip = 0) => {
  const res = await api.get(`${API_URL}?limit=${limit}&skip=${skip}`);
  return res.data; // { todos: Todo[], total, skip, limit }
};

// حذف todo
export const deleteTodo = async (id: number) => {
  const res = await api.delete(`${API_URL}/${id}`);
  return res.data;
};

// تغییر وضعیت completed
export const toggleComplete = async (id: number, completed: boolean) => {
  const res = await api.put(`${API_URL}/${id}`, { completed });
  return res.data;
};

// افزودن todo جدید (شبیه‌سازی)
export const addTodo = async (todo: { todo: string, userId: number, completed: boolean }) => {
  const res = await api.post(`${API_URL}/add`, todo);
  return res.data;
};
