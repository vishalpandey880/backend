# Express Basics Assignment

A small Express.js app that demonstrates core routing concepts, request logging, route parameters, and query parameters.

## Features

- Basic Express server setup
- Request logging middleware
- Static route handlers
- Route parameters
- Query parameters

## Prerequisites

- Node.js
- npm

## Installation

From the `express-basics-assignment` folder, install dependencies:

```bash
npm install
```

## Run the App

Start the server with:

```bash
npm start
```

The server runs on:

```bash
http://localhost:8000
```

## Available Routes

### `GET /home`

Returns:

```text
Welcome to Home Page
```

### `GET /about`

Returns:

```text
This is About Page
```

### `GET /contact`

Returns:

```text
This is Contact Page
```

### `GET /user/:name`

Example:

```text
/user/John
```

Returns:

```text
Hello John
```

### `GET /product/:id/:category`

Example:

```text
/product/101/electronics
```

Returns:

```text
Product ID: 101, Category: electronics
```

### `GET /search?name=...&role=...`

Example:

```text
/search?name=John&role=Developer
```

Returns:

```text
Name: John, Role: Developer
```

## Middleware

The app includes a simple logging middleware that prints each request method and URL to the console.

Example output:

```text
GET /home
```

## Project Structure

```text
express-basics-assignment/
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Notes

- The app uses `express@^5.2.1`
- There are no automated tests configured yet
