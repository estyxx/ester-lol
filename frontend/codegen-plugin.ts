import {
  GraphQLSchema,
  OperationDefinitionNode,
  DefinitionNode,
  getNamedType,
  ASTNode,
  visit,
  DocumentNode,
} from 'graphql';
import {
  PluginFunction,
  PluginValidateFn,
  Types,
} from '@graphql-codegen/plugin-helpers';

// Type guard to check if a definition node is an OperationDefinitionNode
function isOperationDefinitionNode(
  node: DefinitionNode,
): node is OperationDefinitionNode {
  return node.kind === 'OperationDefinition';
}
const customTypesHandled = new Set<string>([
  'About',
  'Home',
  'Resume',
  'Navigation',
]);

// This function will create a visitor to manipulate the AST
const useVisitor = (schema: GraphQLSchema, documents: Types.DocumentFile[]) => {
  return {
    OperationDefinition: {
      enter(
        node: OperationDefinitionNode,
        key: string | number | undefined,
        parent: ASTNode | undefined,
        path: string[],
        ancestors: ASTNode[],
      ) {
        const operationName = node.name?.value || 'UnnamedOperation';

        console.log('Visiting OperationDefinition: ', operationName);
      },
      leave(node: OperationDefinitionNode) {
        // After visiting all fields, we might decide to remove or modify the operation
        // You can return null to remove the node from the document

        const operationName = node.name?.value || 'UnnamedOperation';
        console.log('Leaving OperationDefinition: ', operationName);
        // if (customTypesHandled.has(operationName)) {
        //   // Returning null removes the node from the AST
        //   return null; // This effectively removes the duplicate
        // }
        // return undefined; // Important to return undefined, not null, if not removing
      },
    },
  };
};

export const plugin: PluginFunction = (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: any,
) => {
  const types = schema.getTypeMap();
  let content: string[] = [];
  // console.log(types);

  documents.forEach((doc) => {
    if (doc && doc.document) {
      const result = visit(
        doc.document, // @ts-ignore
        useVisitor(schema, documents),
      ) as DocumentNode; // Ensure casting to correct type
      result.definitions.forEach((def) => {
        console.log(def.kind);
        if (isOperationDefinitionNode(def)) {
          const operationName = def.name?.value || 'UnnamedOperation';
          const operationType = def.operation;
          const fullOperationName =
            operationName + (operationType === 'query' ? 'Query' : 'Mutation');

          console.log(
            def.kind,
            operationName,
            operationType,
            fullOperationName,
          );

          def.selectionSet.selections.forEach((selection) => {
            console.log(selection.kind);
            if (selection.kind === 'Field') {
              const fieldName = selection.name.value;
              const field = schema.getQueryType()?.getFields()[fieldName];
              const fieldType = field?.type;
              const realTypeName = getNamedType(fieldType)?.name;

              console.log(fieldName, realTypeName);

              if (realTypeName) {
                console.log(fieldName, 'isObjectType!');
                content.push(
                  `export type ${fullOperationName} = { __typename?: '${
                    operationType.charAt(0).toUpperCase() +
                    operationType.slice(1)
                  }'; ${fieldName}: ${realTypeName}; }`,
                );
              } else {
                console.log(fieldName, 'is not Object type :(');
              }
            }
          });
        }
      });
    }
  });

  return {
    content: content.join('\n'),
  };
};

export const validate: PluginValidateFn<any> = (
  schema: GraphQLSchema,
  documents: Types.DocumentFile[],
  config: any,
  outputFile: string,
) => {
  // Validate the configuration for your plugin here
  console.log('Validation successful.');
};
