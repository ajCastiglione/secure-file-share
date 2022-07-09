# Secure File Share

This is a simple application to securely share files with your friends.

## How to use

1. Access the homepage (localhost:5000) to upload a file.
2. (Optional) Add a password to the file.
3. Share the file with your friends by clicking the share button.
4. Download the file by clicking the download button while you're on the unique URL from the previous step.

## How to run the application locally

Some prerequisites:

-   Node.js v14+
-   TailwindCSS

Steps to run the application locally:

1. Install dependencies:
    ```bash
    npm install
    ```
2. Create an `.env` file with the following contents:

    ```bash
    DATABASE_URL=someMongoDbConnectionStringHere
    NODE_ENV=development
    PORT=5000
    ```

3. Run the application:
    ```bash
    npm run dev
    ```
4. Open the application in your browser:
    ```bash
    http://localhost:5000
    ```

If all goes well, you'll see concurrently running the server and spinning up the tailwind watch process.

For the creation of the database, I'd recommend using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). You can create a free account and get a free MongoDB Atlas instance. It saves the hassle of setting up a local MongoDB instance.

## What it is built with

The application is built with the following technologies:

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [EJS](https://ejs.co/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Mongoose](https://mongoosejs.com/)
