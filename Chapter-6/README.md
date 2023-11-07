# CREATE REACT APP

Welcome to binar project! This repository contains implementation of Simple Design Pattern using Service Repository Pattern. Below are the instructions on how to set up and use this project.

<!-- ![Cars ERD](cars_ERD/cars_ERD.png) -->

## Installation

1. **Clone the Repository**

   To get started, you'll need to clone this repository to your computer. Use the following command in your terminal or command prompt:

   ```bash
   git clone https://github.com/Dilla16/binar.github.io.git
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Configuration

1. **Check `config.json`**

   Open the `config.json` file in the project directory. Ensure that the configuration settings, such as database connection details, API keys, or other environment-specific variables, are correctly set.

## Change Directory to the Required Project

1. **Navigate to the Project Directory**

   Change your current working directory to the project directory to access the project's files and execute commands related to it. Use the following command:

   ```bash
   cd binar.github.io/Chapter-5
   ```

## Database Setup

1. **Create Database If Not Exist**

   ```bash
   npx sequelize-cli db:create
   ```

2. **Migrate Database Table**

   If your project uses a migration tool, run the migration to create or update database tables. Use the following command, or check your project's specific documentation for migration instructions:

   ```bash
   npm run migrate
   ```

3. **Seed the Database**

   To populate the database with initial data (if required), run the database seeding command. This will insert predefined data into your tables:

   ```bash
   npm run seed
   ```

---

## API Endpoints

You can see API DOcumentation by this command

`http://localhost:8000/api-docs/`

## SUper Admin

```Email: superadmin@gmail.com
Password: superadmin
```

Please ensure that your API server is running on port 8000 for API.
or adjust the base URL accordingly if it's running on a different port for User Interface.

---

```

```
