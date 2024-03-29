# Equitel Backend API

This repository contains the backend API for the Equitel application. The API is built using Node.js and Express.js. The API is responsible for handling all the requests from the frontend application and communicating with the database to retrieve and store data.

## Technologies Used
The following technologies were used to build the backend API:

- Node.js
- Express.js
- Docker
- PostgreSQL
- Nodemom
- Sequelize
- cors
- dotenv
- pg-hstore
- bcrypt

## Initial Configuration

To get started with this repository, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
```

2. Install the required dependencies using npm:

```bash
npm install
```

3. To start a container using Docker Compose:

   - Make sure you have Docker installed on your machine
   - Open a terminal or command prompt and navigate to the directory where your Docker Compose file is located. The Docker Compose file is typically named `docker-compose.yml`
   - Run the following command to start the container:

      ```bash
      docker-compose up -d
      ```
    - The `-d` flag is used to start the container in detached mode. This means that the container will run in the background and you can continue to use your terminal or command prompt.

4. Create a `.env` file in the root directory of the project and add the following environment variables:

    ```env
    DB_HOST=localhost
    DB_USER=postgres
    DB_PASSWORD=your_password
    DB_HOST='localhost'
    DB_NAME=equitel-db
    DB_PORT=5432
    ```

    Replace `your_password` with the password you set for the `postgres` user when you installed PostgreSQL.

    This information is used by the API to connect to the database.

    Remember to create the data base with the name `equitel-db` in your local machine.

    Configure TOKEN_SECRET in the .env file

    ```env
    TOKEN_SECRET=your_secret
    ```
    Replace `your_secret` with the secret you want to use to sign the JWT tokens.
    

5. Run the following command to start the development server:

```bash
npm run dev
```

The development server will start and you can now make requests to the API.

## Routes

Have a look at the `routes` folder to see the available routes.

List of routes:
- audit.router.js
- login.router.js
- products.router.js
- provider.router.js
- users.router.js
- rol.router.js

## Models

Have a look at the `models` folder to see the available models.

List of models:
- audit.model.js
- products.model.js
- provider.model.js
- users.model.js
- rol.model.js


## Controllers

Have a look at the `controllers` folder to see the available controllers.

List of controllers:
- audit.controller.js
- login.controller.js
- products.controller.js
- provider.controller.js
- users.controller.js
- rol.controller.js

## Services

Have a look at the `services` folder to see the available services.

List of services:
- audit.service.js
- products.service.js
- provider.service.js
- users.service.js
- rol.service.js