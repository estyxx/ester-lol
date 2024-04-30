# Frontend

This document covers the frontend architecture of our React application using Next.js, Tailwind CSS, GraphQL, and a custom GraphQL Codegen plugin. It provides setup instructions and environment configuration details necessary for development and production environments.

## Project Setup

### Prerequisites

- Node.js (version 12 or later recommended)
- pnpm

### Installing Dependencies

To install the necessary dependencies, run the following command in the frontend directory:

```bash
pnpm install
```

### Environment Configuration

We use an `.env.local` file to manage environment variables for local development. Here's a typical configuration:

```plaintext
NEXT_PUBLIC_GRAPHQL_ENDPOINT_URI=http://localhost:8000/graphql/
IMAGE_PROTOCOL=http
IMAGE_HOSTNAME=localhost
IMAGE_PORT=8000
```

To ensure that environment variables are correctly set up for running codegen, update the `package.json` to include these variables directly from `.env.local` during the execution:

```json
"scripts": {
  "codegen": "dotenv -e .env.local graphql-codegen --config codegen.ts"
}
```

This setup uses the `dotenv-cli` package, which you should install if not already included:

```bash
pnpm add -D dotenv-cli
```

## Running the Application

To start the application in development mode, run:

```bash
pnpm run dev
```

This command starts the Next.js server with hot-reloading enabled.

## GraphQL Codegen and Custom Plugin

### Custom GraphQL Codegen Plugin

The custom plugin for GraphQL Codegen allows us to ensure that our TypeScript types are consistent with our GraphQL schema, particularly managing partial and full entity types effectively.

### Compiling the Plugin

Before using the custom plugin, it needs to be compiled from TypeScript to JavaScript. Adjust the `tsconfig.plugin.json` and run:

```bash
npx tsc -p tsconfig.plugin.json
```

This compiles the plugin and outputs the JavaScript to the `dist` directory.

### Using the Plugin

After compiling, the plugin is configured in the `codegen.ts` file and utilized when you run:

```bash
pnpm run codegen
```

This generates the necessary TypeScript types across the frontend application, ensuring type safety and consistency with the backend GraphQL schema.

## Architecture Overview

- **React**: Used for building the user interface with functional components and hooks.
- **Next.js**: Facilitates server-side rendering and static site generation.
- **Tailwind CSS**: Provides utility-first CSS framework for rapid UI development.
- **GraphQL**: Manages data management and operations between the frontend and the backend.
- **GraphQL Codegen**: Automatically generates TypeScript types based on GraphQL queries and mutations.

## Directory Structure

Briefly describe the organization of important directories and files in your frontend project:

- `/components`: React components.
- `/pages`: Next.js pages.
- `/styles`: CSS and Tailwind configuration.
- `/graphql`: Contains GraphQL queries, mutations, and subscriptions.
- `/public`: Static assets like images and fonts.
- `/lib`: Reusable libraries and utilities, including the GraphQL client setup.
