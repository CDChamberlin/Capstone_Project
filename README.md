# Mini Project 3: E-commerce Website Design 

This application is a student project developed as part of my coursework at the Institute of Data Software Engineering. It aims to mimic an online store, allowing users to create accounts, manage carts, and interact with products. For this project, the focus is creating and linking to a Database through an API and CRUD operations. The user can create an account, read their current info, update their info, and delete the account. They can also view their cart. 

For the database structure I used MySQL since I am more familiar with it. The Frontend uses NextJS [^1] and Material UI [^2] components. The Backend uses Express/NodeJS 

## Future Plans

In the future, I plan to enhance the project by adding the following features:

- Databases for products and carts 

- Remove items from the cart 

- Change quantity of items in the cart 

  - Currently each item is displayed in the cart. If there are 4 items, it displays 4 items, even if they are all the same product    

- Calculate and display the total of the cart without taxes 

- User Authentication 

- Admin Access: 

  - Allows for product quantities to be updated 

  - Change price of products 

  - Create sitewide Sales 

-  UI Changes 

  - Sidebar instead of top Navigation 

  - Better display of items in the cart 

## Installation

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```

### 2. Install Dependencies

Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

```bash
npm install
```

This command will install all the necessary dependencies listed in the package.json file.

### 3. Set Up MySQL Database

Make sure you have MySQL installed on your machine.

Create a new MySQL database for the project.

### 4. Set Up Environment Variables

Create a .env file in the root directory of your project (the parent directory containing both frontend and backend) and add the following variables:

```dotenv

DB_NAME=your_database_name
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=your_database_port
PORT=your_backend_port
CLIENT_PORT=your_frontend_port
```

Replace your_database_name, your_database_username, your_database_password, your_database_host, your_database_port, your_backend_port, and your_frontend_port with your actual database and port configurations.

### 5. Set Up Sequelize and Database Schema

Navigate to the models subdirectory of your backend directory (where your Sequelize models are located) and define your database schema.

### 6. Run Sequelize Migrations

Use Sequelize CLI to run migrations and create tables based on your defined models. Ensure that Sequelize is properly configured to connect to your MySQL database using the environment variables.

```bash
sequelize db:migrate
```

This command will execute the migrations and create tables in your MySQL database based on your Sequelize models.

### 7. Run the Development Server

Navigate to the directory of your backend server (where your Node.js files are located) and start the backend server.

```bash
cd backend_directory
npm run dev
```

Navigate to the directory of your frontend server (where your Next.js files are located) and start the frontend server.

```bash
cd frontend_directory
npm run dev
```

### 8. Access the Application

Open your web browser and navigate to http://localhost:your_frontend_port to access the application.


## Credits

I would like to credit the following resources and libraries that have been instrumental in developing this project:

[Readme Guide](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)

[^1]: [NextJS](https://nextjs.org)

[^2]: [Material UI](https://mui.com/)
