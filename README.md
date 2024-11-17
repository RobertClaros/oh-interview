# OH-Interview

## Description
  This project application that includes:
  
  1. **Frontend (React, Vite, Chakra UI)**: A simple blog with post listings and detailed views.
  2. **Backend (Node.js, Express, TypeScript)**: A basic CRUD for user management.
  3. **SQL Exercise**: Queries for analyzing employee and department data.
  
  ---

## Prerequisites
  Make sure you have the following software installed:
  
  - **Node.js** (version v20.11.1)
  - **npm** (Node.js package manager)
  - **pnpm** (to manage monorepos)
  - **TurboRepo** (for handling monorepos)
  - **Git** (to clone the repository)
  
  ---

## Project Setup

### Clone the Repository
  ```bash
  git clone https://github.com/RobertClaros/oh-interview.git
  cd oh-interview
  ```

## Instructions to Start the Project

## Install Dependencies
  We'll use **npm** to manage dependencies in the monorepo.
  
  ```bash
  cd blog-app/
  npm install
  ```
## Environment Variables

  Make sure you have the following .env files configured:
  apps/api/.env
  ```bash
  PORT=4000
  NODE_ENV=development
  ```
* Running the Application
    ** 1. Start the Backend
  ```bash
  npm turbo run dev --filter=api
  ```
This will start the backend server at http://localhost:4000.
  ** 2. Start the Frontend
  ```bash
  npm turbo run dev --filter=web
  ```
This will start the frontend app at http://localhost:5173.

 ---

## Backend (User API)

### **Endpoints**

- **GET** `/users` - Get all users
- **GET** `/users/:id` - Get a user by ID
- **POST** `/users` - Create a new user
- **PUT** `/users/:id` - Update a user by ID
- **DELETE** `/users/:id` - Delete a user by ID

## Testing the Backend Endpoints with Postman

1. Download the Postman collection file: **`BloggUsers.postman_collection.json`**.
2. Open Postman and go to **File > Import**.
3. Select the downloaded `BloggUsers.postman_collection.json` file.
4. Once imported, you will see the collection in your Postman workspace.
5. Use the endpoints provided to test the API.


---

## SQL

### Schema (MySQL v5.7)

    CREATE TABLE departments (
      department_id SERIAL PRIMARY KEY,
      department_name VARCHAR(50)
    );
    
    CREATE TABLE employees (
      employee_id SERIAL PRIMARY KEY,
      first_name VARCHAR(50),
      last_name VARCHAR(50),
      salary NUMERIC,
      department_id INT REFERENCES departments(department_id)
    );

---

### Query #1

    INSERT INTO departments (department_name) 
    VALUES ('Sales'), ('Engineering'), ('HR'), ('Marketing');

There are no results to be displayed.

---
### Query #2

    
    
    INSERT INTO employees (first_name, last_name, salary, department_id) 
    VALUES
    ('Robert', 'Claros', 85000, 1),          
    ('Mauricio', 'Mendez', 95000, 2),        
    ('Alejandra', 'Guzman', 70000, 1),       
    ('Will', 'Smith', 120000, 3),            
    ('Ronaldo', 'Nazario', 65000, 4),        
    ('Lionel', 'Messi', 115000, 2),          
    ('Cristiano', 'Ronaldo', 110000, 1),     
    ('Zinedine', 'Zidane', 98000, 2),        
    ('Serena', 'Williams', 73000, 4),        
    ('Usain', 'Bolt', 88000, 3);

There are no results to be displayed.

---
### Query #3

                 
    
    SELECT MAX(salary) AS highest_salary
    FROM employees
    JOIN departments ON employees.department_id = departments.department_id
    WHERE departments.department_name = 'Sales';

| highest_salary |
| -------------- |
| 110000         |

---
### Query #4

    
    
    SELECT departments.department_name, AVG(salary) AS average_salary
    FROM employees
    JOIN departments ON employees.department_id = departments.department_id
    GROUP BY departments.department_name;

| department_name | average_salary |
| --------------- | -------------- |
| Engineering     | 102666.6667    |
| HR              | 104000.0000    |
| Marketing       | 69000.0000     |
| Sales           | 88333.3333     |

---
### Query #5

    
    
    SELECT departments.department_name, COUNT(*) AS total_employees
    FROM employees
    JOIN departments ON employees.department_id = departments.department_id
    GROUP BY departments.department_name;

| department_name | total_employees |
| --------------- | --------------- |
| Engineering     | 3               |
| HR              | 2               |
| Marketing       | 2               |
| Sales           | 3               |

---
### Query #6

    
    
    SELECT first_name, last_name, salary
    FROM employees
    ORDER BY salary DESC
    LIMIT 5;

| first_name | last_name | salary |
| ---------- | --------- | ------ |
| Will       | Smith     | 120000 |
| Lionel     | Messi     | 115000 |
| Cristiano  | Ronaldo   | 110000 |
| Zinedine   | Zidane    | 98000  |
| Mauricio   | Mendez    | 95000  |

---

### [View on DB Fiddle](https://www.db-fiddle.com/)
---

### License
This project is open for educational and evaluation purposes.

### Author
Robert Claros
