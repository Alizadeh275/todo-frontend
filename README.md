# 📝 Todo Frontend

A modern, responsive **Todo application frontend** built with **React**, **TypeScript**, **TailwindCSS**, and **Vite**.  
This project focuses on a clean UI/UX, dark mode support, drag-and-drop functionality, and smooth interactions for managing tasks efficiently.

---

## 🌟 Features

- **Task Management**
  - Add, edit, delete, and mark tasks as completed
  - View detailed task information in a modal
- **Drag & Drop**
  - Sort tasks using **@dnd-kit/core** and **@dnd-kit/sortable**
- **Dark Mode Support**
  - Toggle between light and dark themes
- **Responsive UI**
  - Fully responsive for mobile and desktop
- **UI Components**
  - Built with **Material UI**, **Radix UI Dialog**, and **Lucide React icons**
- **Notifications**
  - Toast notifications for actions using **react-toastify**
- **Loading States**
  - Skeleton loaders and spinners for better user experience
- **Clock Component**
  - Analog clock with theme-adaptive colors using **react-clock**

---

## 🧩 Packages Used

### Core Packages
- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Development server and build tool
- **TailwindCSS**: Utility-first styling
- **@dnd-kit/core** & **@dnd-kit/sortable**: Drag-and-drop support
- **@mui/material**: Material UI components
- **@radix-ui/react-dialog**: Accessible dialog components
- **react-clock**: Analog clock display
- **lucide-react**: SVG icons
- **react-toastify**: Toast notifications
- **axios**: HTTP client for API requests

### Development Tools
- **TypeScript**: Strong typing
- **ESLint**: Code linting
- **PostCSS** & **Autoprefixer**: CSS processing
- **@vitejs/plugin-react**: React plugin for Vite

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/Alizadeh275/todo-frontend.git
cd todo-frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to see the app.

---

## 🛠 Scripts

| Command          | Description                        |
|-----------------|------------------------------------|
| `npm run dev`    | Start development server            |
| `npm run build`  | Build project for production        |
| `npm run preview`| Preview production build           |
| `npm run lint`   | Run ESLint for code quality         |

---

## 🎨 Styling

- TailwindCSS v4 with dark mode enabled (`darkMode: 'class'`)
- Custom font: **IRANSans**
- Fully responsive design using Tailwind's utility classes
- Dark/light theme support for all components

---

## 🔗 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is **private** (no public license).  

---

## 📌 Notes

- Make sure your backend API is running if connecting to a server.
- Supports modern browsers with full ES6+ compatibility.