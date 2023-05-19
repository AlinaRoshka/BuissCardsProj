# My Server-Side App

This is the server-side application for my project. It provides a backend API for creating and managing cards, as well as handling user registration and login functionality.

## Installation

1. Clone the repository: `git clone https://github.com/AlinaRoshka/BuissCardsProj.git`
2. Install dependencies: `npm install`

## Usage

1. Run the server: `npm start`
2. Access the app at: `http://localhost:8000`

### Environment Variables

To run the application, you need to set up the following environment variables:

- `NODE_ENV`: The environment mode (e.g., development, production)
- `PORT`: The port number on which the server will run
- `DB`: The database connection string
- `secretKey`: The secret key for your application

### Setting Up Environment Variables

1. Make a copy of the `.env.example` file and rename it to `.env`.
2. Open the `.env` file and provide the actual values for the environment variables.
3. Save the `.env` file.

**Note:** Make sure to keep your `.env` file private and never commit it to any version control system.

## Features

- Bcrypt: Password hashing and authentication
- JWT (JSON Web Tokens): Securely managing user sessions
- Express: Fast and minimalist web framework for Node.js
- Mongoose: Elegant MongoDB object modeling for Node.js
- Joi: Request validation for user input
- CRUD Operations: Create, Read, Update, and Delete cards
- User Registration and Login: Authentication and authorization

## Models

### User Model

The user model represents the user entity in the database. It contains the following fields:

- `username`: The username of the user
- `email`: The email address of the user
- `password`: The hashed password of the user
and more ..

### Card Model

The card model represents the card entity in the database. It contains the following fields:

- `title`: The title of the card
- `description`: The description of the card
- `userId`: The ID of the user who owns the card
and more ...

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).