# Cog: A Tiny HTTP Framework for Node.js 🌐

![Cog Logo](https://img.shields.io/badge/Cog-HTTP%20Framework-blue?style=flat-square&logo=npm)

Welcome to **Cog**, a lightweight HTTP framework built on Node.js's native `http` module. Cog simplifies the process of creating APIs and web servers, allowing developers to focus on building applications without getting bogged down by unnecessary complexity. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **Lightweight**: Cog is designed to be minimal and efficient, making it easy to integrate into your projects.
- **TypeScript Support**: Write your APIs in TypeScript for better type safety and developer experience.
- **Flexible Routing**: Define routes with ease and handle different HTTP methods.
- **Middleware Support**: Extend functionality with middleware to process requests and responses.
- **Error Handling**: Built-in error handling to manage exceptions gracefully.

## Installation

To get started with Cog, you need to have Node.js installed. If you haven't installed it yet, you can download it from [Node.js Official Site](https://nodejs.org).

Once Node.js is set up, you can install Cog via npm:

```bash
npm install cog-http
```

## Getting Started

To create a simple server using Cog, follow these steps:

1. **Create a new file** named `server.ts`.

2. **Add the following code** to set up a basic server:

   ```typescript
   import { Cog } from 'cog-http';

   const app = new Cog();

   app.get('/', (req, res) => {
       res.send('Hello, World!');
   });

   app.listen(3000, () => {
       console.log('Server is running on http://localhost:3000');
   });
   ```

3. **Run your server** using the following command:

   ```bash
   npx ts-node server.ts
   ```

Now, you can visit `http://localhost:3000` in your browser to see the message "Hello, World!".

## API Reference

Cog provides several methods to help you build your application:

- **`app.get(path: string, handler: Function)`**: Defines a route for GET requests.
- **`app.post(path: string, handler: Function)`**: Defines a route for POST requests.
- **`app.put(path: string, handler: Function)`**: Defines a route for PUT requests.
- **`app.delete(path: string, handler: Function)`**: Defines a route for DELETE requests.
- **`app.listen(port: number, callback: Function)`**: Starts the server on the specified port.

### Middleware

You can add middleware functions to handle requests before they reach your route handlers. Here's an example:

```typescript
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
```

## Examples

### Basic Example

Here’s a more complete example of a Cog application:

```typescript
import { Cog } from 'cog-http';

const app = new Cog();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/api/users', (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

### Error Handling Example

To handle errors, you can use a custom error handler:

```typescript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

## Contributing

We welcome contributions to Cog! If you would like to help, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Submit a pull request.

## License

Cog is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

For the latest releases, please visit [Cog Releases](https://github.com/chandan1145/Cog/releases). Download the latest version and execute it to get started.

## Conclusion

Cog provides a simple and effective way to build HTTP servers and APIs using Node.js. Its lightweight nature and TypeScript support make it a great choice for developers looking to create fast and efficient applications. 

Explore the documentation, try out the examples, and see how Cog can fit into your next project!