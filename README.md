# CRUD of People

This repository contains a Node.js and MongoDB application that implements basic CRUD operations for a person. You can Create a new person, Get a person, Update a person and Delete a person. It utilizes the Express.js framework for handling routes and controllers and MongoDB for data storage.

You can view the project at <https://crud-of-people.onrender.com/>, view the UML diagram at uml.png and the Postman docs at docs.json

## Prerequisites

Befor running the application, make sure you [Node.js (v12 or higher)](https://nodejs.org/en) and [Git](https://git-scm.com/downloads) installed and you can also look at the [UML Diagram](https://www.plantuml.com/plantuml/png/VP312i8m44Jl-Ogbz_e17gJO2bwAKl0aFQmcb4hSBTaK1V7VRMeEGSNRCZEF6ROGZywFLwkSENkapXh8QgQEgtK63mLmt1idJ52ojLEaPshLKwNnpNrmHcHnaKWqF7eZRJXB9ky2wMJ6D7eyeKnK5Q_8bCsXWjrW78QAT_X7DUIQRvIllW5OmeUauf04IkO4OFPXYwHjJvrAxVzDOJpKIFqmsbbLXI4zlV45).

## Installation

1. Clone this repository using Git\
   `git clone https://github.com/Uju-Chinedum/CRUD-of-People.git`

2. Navigate to the project directory\
   `cd CRUD-of-People`

3. Install the required dependencies\
   `npm install`

4. Create a MongoDB database locally or via a cloud-based service. Make a note of the URL for the connection.

5. Create a `.env` file in the project root and add the following environment variables with your own values:\
   `MONGO_URI=<your-mongodb-connection-url>`

## Running the Application

Once you have completed the installation, run the application by using `npm start`. This will start the Node.js server, and you should see the message "Server started on port `port`" in the console. The application will be available at <http://localhost:5000>.

## Routes

The application implements the following routes:

### People Routes

- **POST /api**: Creates a new person
- **GET /api/:user_id**: Gets a specific person by ID
- **PATCH /api/:user_id**: Updates a specific person by ID
- **DELETE /api/:user_id**: Delete a person by ID

## Usage

After the application is running, you can use an API testing tool like Postman to interact with the routes.

1. Create a new person by making a POST request to /api with the required person details in the request body.

2. Get a specific person by making a GET request to /api/:user_id, where :user_id is the ID of the person you want to get.

3. Update a person by making a PATCH request to /api/:user_id, where :user_id is the ID of the person you want to update.

4. Delete a specific person by making a DELETE request to /api/:user_id, where :user_id is the ID of the person you want to delete.

To create a new person, the following fields are needed in the request body. Asterisks are required fields:

    name       *

## License

This project is licensed under the **[MIT License](https://mit-license.org/)**

## Resources

- [Node.js](nodejs.org) - Official website for Node.js
- [NPM](npmjs.com) - Official website for NPM
- [Express.js](expressjs.com) - Official website for Express.js
- [MongoDB](mongodb.com) - Official website for MongoDB
- [Mongoose.js](mongoosejs.com) - Official website for Mongoose
