import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

import * as Types from '../../types.generated';

export type ResumeQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ResumeQuery = {
  __typename?: 'Query';
  resume: {
    __typename?: 'ResumePage';
    id: string;
    introduction: string;
    title: string;
    subtitle: string;
    profilePhoto: {
      __typename?: 'Image';
      altText: string;
      id: string;
      rendition: {
        __typename?: 'ImageRendition';
        id: string;
        file: string;
        url: string;
        width: number;
        height: number;
      };
    };
    openSourceContributions: Array<{
      __typename?: 'PageOpenSourceContribution';
      openSource: {
        __typename?: 'Experience';
        companyName: string;
        companyWebsite: string;
        id: string;
        jobTitle: string;
        shortDescription: string;
        timeline: string;
      };
    }>;
    experiences: Array<{
      __typename?: 'PageExperience';
      experience: {
        __typename?: 'Experience';
        companyName: string;
        companyWebsite: string;
        id: string;
        jobTitle: string;
        longDescription: string;
        shortDescription: string;
        timeline: string;
      };
    }>;
    educations: Array<{
      __typename?: 'PageEducation';
      education: {
        __typename?: 'Education';
        dateRange: string;
        degree: string;
        id: string;
        institutionName: string;
      };
    }>;
    activities: Array<{
      __typename?: 'PageActivity';
      activity: {
        __typename?: 'Activity';
        dateRange: string;
        id: string;
        link: string;
        shortDescription: string;
        title: string;
      };
    }>;
  };
};

export const ResumeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Resume' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'resume' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'introduction' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePhoto' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'altText' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'rendition' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'specs' },
                            value: {
                              kind: 'StringValue',
                              value: 'fill-400x400',
                              block: false,
                            },
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'file' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'url' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'width' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'height' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openSourceContributions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'openSource' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'companyName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'companyWebsite' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'jobTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shortDescription' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'timeline' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'experiences' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'experience' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'companyName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'companyWebsite' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'jobTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longDescription' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shortDescription' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'timeline' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'educations' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'education' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'dateRange' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'degree' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'institutionName' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'activities' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'activity' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'dateRange' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'link' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shortDescription' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResumeQuery, ResumeQueryVariables>;
