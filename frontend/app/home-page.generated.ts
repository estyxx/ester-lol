import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import * as Types from '../types.generated';

export type HomeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type HomeQuery = {
  __typename?: 'Query';
  home: {
    __typename?: 'HomePage';
    tagline?: string | null;
    introduction: string;
    searchDescription: string;
    seoTitle: string;
    slug: string;
    title: string;
    cta: { __typename?: 'CTABlock'; text: string; url: string };
    image: { __typename?: 'Image'; height: number; width: number; url: string };
  };
};

export const HomeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Home' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'home' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'tagline' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cta' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'CTABlock' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'text' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'image' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'height' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'introduction' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'searchDescription' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'seoTitle' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomeQuery, HomeQueryVariables>;
