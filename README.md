# Getting Started with the FullStack Solution Application

This project uses React.js + Redux Toolkit for the client (frontend) and Express.js for the server (backend).
The relational database used was MySQL, with sequelize used in the backend to make the connection.

# Set up introduction
In the project directory, please run: `cd solution`.\
From here you should see two new directories: `transactions-server` and `transactions-client`. You will need to have both the client and the server running from your terminal to have the functionality on display. 

The server application should be run first, and then the client application.

## Server application
Inside the `transactions-server` directory, create an `.env` file. Be sure to add environments variables based on the `.env.example` file. As an example, you can use the following values:

```
DB_HOST=mysqldb
DB_USER=root
DB_PASSWORD=testpassword
DB_NAME=transactions_database
DB_PORT=3306

MYSQL_DATABASE=transactions_database
MYSQL_ROOT_PASSWORD=testpassword
```

## Client application
Inside the `transactions-client` directory, create an `.env` file and add an environment variable with the name `REACT_APP_API_URL`. This value should point to `http://localhost:4000/`.

This URL will point to our API once it's running.

# Available Scripts

## Server application
From the `solution` directory, enter the `transactions-client` directory.

Inside `transactions-server` you can run:

### `npm run docker:start:dev`

This runs the server app in the development mode inside a docker container.
Optionally, you can open [http://localhost:4000](http://localhost:4000)

### `npm run test`

This runs all the unit tests currently available in the client application.

## Client application
From the `solution` directory, enter the `transactions-client` directory.

Inside `transactions-client` you can run:

### `npm run docker:start:dev`

This runs the client app in the development mode inside a docker container.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

This runs all the unit tests currently available in the client application.
