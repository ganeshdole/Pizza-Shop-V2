# Pizza Shop V2

Welcome to Pizza Shop V2! This project is a full-stack web application for a pizza restaurant, featuring a frontend built with React and a backend built with Node.js and Express.

## Table of Contents

- [Pizza Shop V2](#pizza-shop-v2)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Components](#components)
    - [Frontend](#frontend)
      - [Home](#home)
      - [About](#about)
      - [Contact](#contact)
      - [Register](#register)
      - [Login](#login)
      - [Error404](#error404)
    - [Backend](#backend)
  - [Styling](#styling)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- **Home Page**: Welcome message with navigation to order and menu pages.
- **About Page**: Information about the company, mission statement, team introductions, and history.
- **Contact Page**: Contact form with fields for name, email, subject, and message.
- **Register Page**: User registration form with fields for name, email, password, and confirm password.
- **Login Page**: User login form with fields for email and password.
- **Error Handling**: Custom 404 error page for handling invalid routes.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Icons library for React.

### Backend

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: ODM library for MongoDB and Node.js.

<!-- ## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ganeshdole/Pizza-Shop-V2.git
   cd Pizza-Shop-V2
   ```

2. Install the dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### Running the Project

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and go to `http://localhost:3000`. -->

## Images

![alt text](Project%20Images%20/HomePage.png)

## Project Structure

```bash
Pizza-Shop-V2/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── config.js
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Error404.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       └── tailwind.css
│   ├── public/
│   │   ├── index.html
│   ├── package.json
├── .gitignore
├── README.md
└── tailwind.config.js
```

````

## Components

### Frontend

#### Home

The Home component features a welcome message, order and menu buttons, and highlights about fresh ingredients, easy ordering, and fast delivery.

#### About

The About component provides information about the company, mission statement, team introductions, and history.

#### Contact

The Contact component includes a contact form with fields for name, email, subject, and message, along with introductory information about the company.

#### Register

The Register component features a user registration form with fields for name, email, password, and confirm password.

#### Login

The Login component includes a user login form with fields for email and password.

#### Error404

The Error404 component displays a custom 404 error page with a message and a link to navigate back to the homepage.

### Backend

- **Controllers**: Handle the business logic for the routes.
- **Models**: Define the data schema for MongoDB using Mongoose.
- **Routes**: Define the API endpoints and link them to controllers.

## Styling

The project uses Tailwind CSS for styling. You can customize the styles in the `frontend/src/styles/tailwind.css` and `tailwind.config.js` files.

## API Endpoints

Here are some of the key API endpoints:

- **User Registration**: `POST /api/register`
- **User Login**: `POST /api/login`
<!-- - **Get User Info**: `GET /api/user/:id`
- **Update User Info**: `PUT /api/user/:id`
- **Delete User**: `DELETE /api/user/:id` -->

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

### Notes:
Feel free to customize and expand this Prject based on the specifics and additional details.
```
````
