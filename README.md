# AquaCache Console 💧

A React-based Smart Water Network Monitoring Dashboard that helps monitor a city's water infrastructure, manage sensor data, track storage locations, and optimize data synchronization using Data Structure and Algorithm concepts.

## 📌 Project Overview

AquaCache Console is designed to provide a centralized dashboard for monitoring smart water-network operations. The system tracks where water data is stored, processes sensor readings, manages cache storage, and optimizes server communication.

This project demonstrates the practical implementation of Data Structures and Algorithms in a real-world smart-city application using React.

---

## 🚀 Features

### 1. Data Location Map

Displays where sensor data is stored across multiple servers.

### 2. Pipe Data Undo

Maintains a history of pipe-network updates and supports rollback operations.

### 3. Sensor Reading Queue

Processes incoming sensor readings in the exact order they arrive.

### 4. Server Status Checker

Quickly verifies whether a server is active in the network.

### 5. Compression Sorter

Ranks storage sections according to compression efficiency.

### 6. Replication Rules Hub

Manages data replication policies between storage nodes.

### 7. Quickest Data Sync Route

Finds the fastest path for synchronizing data between servers.

### 8. Old Data Remover

Removes least recently used data when cache storage becomes full.

---

## 🛠 Technologies Used

* React
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* React Icons
* Framer Motion

---

## 📚 Data Structures & Algorithms Used

| Feature                  | DSA Used           |
| ------------------------ | ------------------ |
| Data Location Map        | Map / BST          |
| Pipe Data Undo           | Stack              |
| Sensor Reading Queue     | Queue              |
| Server Status Checker    | Hash Table         |
| Compression Sorter       | Priority Queue     |
| Replication Rules Hub    | Graph              |
| Quickest Data Sync Route | Dijkstra Algorithm |
| Old Data Remover         | LRU Cache          |

---

## ⚡ Complexity Analysis

| Operation           | Complexity       |
| ------------------- | ---------------- |
| Data Search         | O(log n)         |
| Data Insert         | O(log n)         |
| Undo Change         | O(1)             |
| Add Reading         | O(1)             |
| Process Reading     | O(1)             |
| Server Lookup       | O(1)             |
| Compression Ranking | O(log n)         |
| Graph Traversal     | O(V + E)         |
| Shortest Route      | O((V + E) log V) |
| Cache Access        | O(1)             |

---

## 📂 Project Structure

```text
AquaCache/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│
├── public/
├── package.json
├── vite.config.js
└── README.md
```

---

## ▶️ Installation

### Clone Repository

```bash
git clone https://github.com/2025sarveshy-eng/AquaCache-Console.git
```

### Navigate to Project Folder

```bash
cd AquaCache-Console
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## 🎯 Learning Outcomes

* Practical implementation of Data Structures.
* React component-based architecture.
* Dashboard UI design and state management.
* Smart-city data monitoring concepts.
* Efficient data processing and synchronization.

---

## 🔮 Future Enhancements

* Real-time IoT integration
* Database connectivity
* Cloud deployment
* User authentication
* Advanced analytics dashboard
* Real-time alerts and notifications
---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
