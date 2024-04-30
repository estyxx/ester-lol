import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URI,
  documents: ['**/*.graphql'],
  generates: {
    'types.generated.ts': {
      plugins: [
        'typescript', // Generates TypeScript definitions based on your GraphQL schema
        'typescript-operations', // Generates TypeScript types for your GraphQL operations and fragments
        'typed-document-node', // Generates fully-typed DocumentNode objects
        './dist/codegen-plugin.js',
      ],
    },
  },
};

export default config;
