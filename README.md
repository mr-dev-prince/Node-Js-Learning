# Node.js Learning Project

## Overview
This repository contains my learning journey with **Node.js**, covering everything from the basics of JavaScript on the server to building fully functional APIs and connecting with databases. The purpose is to document concepts, code examples, and small projects created while mastering Node.js.

## Why Node.js?
Node.js allows JavaScript to run outside the browser using the V8 engine. It's event-driven, non-blocking, and perfect for building scalable network applications.

## Topics Covered
- **Introduction to Node.js**
  - What Node.js is and how it works.
  - Understanding the event loop.
- **Core Modules**
  - `fs` (File System)
  - `http`
  - `path`
  - `os`
  - `events`
- **NPM (Node Package Manager)**
  - Installing packages locally and globally.
  - Creating `package.json`.
- **Building a Web Server**
  - Using the built-in `http` module.
  - Serving HTML, JSON, and static files.
- **Express.js Basics**
  - Routing and middleware.
  - Handling GET, POST, PUT, DELETE requests.
- **Working with Databases**
  - Introduction to relational (PostgreSQL/MySQL) and NoSQL (MongoDB) databases.
  - Using `pg` for PostgreSQL and `mongoose` for MongoDB.
- **Authentication & Security**
  - JSON Web Tokens (JWT).
  - bcrypt for password hashing.
- **Error Handling**
  - Try-catch blocks and centralized error middleware.
- **Environment Variables**
  - Using `dotenv` to manage secrets.
- **Async Programming**
  - Callbacks, Promises, and Async/Await.
- **REST API Development**
  - Designing routes and controllers.
  - CRUD operations.
- **Testing**
  - Using Jest or Mocha for unit and integration testing.

## Project Structure Example
```
├── basics           # Introductory examples of Node.js concepts
├── modules          # Practice with core modules
├── express-app      # Small Express.js projects
├── database         # Database connection examples
├── auth             # Authentication examples
├── package.json
└── README.md
```

## How to Use This Repository
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate into the desired folder:
   ```bash
   cd basics
   ```
3. Run the file:
   ```bash
   node filename.js
   ```

## Prerequisites
- Install **Node.js** (v18 or higher recommended).
- Basic knowledge of JavaScript.

## Goals of Learning
- Understand how Node.js handles asynchronous operations.
- Learn to create APIs from scratch.
- Integrate Node.js with different databases.
- Gain confidence in deploying backend applications.

## Resources Used
- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Express.js Docs](https://expressjs.com/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

## License
This repository is for personal learning purposes and is licensed under the MIT License.
