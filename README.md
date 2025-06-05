

## 📋 Simple Task Manager App

A minimal **React Native** task manager app that allows users to **add**, **view**, **delete**, and **mark tasks as completed**. Data is stored **locally** using **AsyncStorage**, and the app includes basic **form validation**.

---

### 🛠 Features

* ✅ Add a task with validation
* 📜 Display task list (Incomplete & Completed sections)
* 🗑 Delete a task with confirmation
* ✅ Mark task as completed/incomplete
* 💾 Save tasks locally using `@react-native-async-storage/async-storage`
* 🎨 Clean UI with simple styling

---

### 🧱 Tech Stack

* **React Native**
* **AsyncStorage** for local data storage
* **React Navigation** for screen transitions
* **JavaScript** (ES6+)
* **Vector Icons** for back buttons and UI elements

---

### 🚀 Screens

* **Welcome Screen** – Landing screen with navigation to task list
* **Task List Screen** – Shows all tasks (incomplete & completed), and supports toggling and deleting
* **Add Task Screen** – Allows users to enter and validate new tasks

---

### 📦 Installation

1. Clone the repo

   ```bash
   git clone https://github.com/MierafA12/simpletaskmanager.git
   ```

2. Navigate to the project folder

   ```bash
   cd simpletaskmanager
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Run the app

   ```bash
   npx expo start -c
   
   ```

---

### 📁 Folder Structure (Simplified)

```
simpletaskmanager/
├── assets/
├── components/
│   └── footer.jsx
├── Screens/
│   ├── AddTaskScreen.jsx
│   ├── TaskListScreen.jsx
│   └── WelcomeScreen.jsx
├── App.js
├── package.json
└── ...
```

---

### 📌 Notes

* Make sure to install and link `@react-native-async-storage/async-storage`.
* This is a local-only app (no backend or database).
* Ideal for learning state management, AsyncStorage, and component-based structure in React Native.

---

