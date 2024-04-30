import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type AboutMePage = {
  __typename?: 'AboutMePage';
  activities: Array<PageActivity>;
  educations: Array<PageEducation>;
  experiences: Array<PageExperience>;
  id: Scalars['ID']['output'];
  introduction: Scalars['String']['output'];
  openSourceContributions: Array<PageOpenSourceContribution>;
  profilePhoto: Image;
  searchDescription: Scalars['String']['output'];
  seoTitle: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  technologies: Array<Technology>;
  title: Scalars['String']['output'];
};

export type Activity = {
  __typename?: 'Activity';
  dateRange: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  longDescription?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Block = CtaBlock;

export type CtaBlock = {
  __typename?: 'CTABlock';
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Education = {
  __typename?: 'Education';
  dateRange: Scalars['String']['output'];
  degree: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  institutionName: Scalars['String']['output'];
};

export type Experience = {
  __typename?: 'Experience';
  companyName: Scalars['String']['output'];
  companyWebsite: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  jobTitle: Scalars['String']['output'];
  longDescription?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  timeline: Scalars['String']['output'];
};

export type HomePage = {
  __typename?: 'HomePage';
  cta: Block;
  id: Scalars['ID']['output'];
  image: Image;
  introduction: Scalars['String']['output'];
  searchDescription: Scalars['String']['output'];
  seoTitle: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tagline?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Image = {
  __typename?: 'Image';
  altText: Scalars['String']['output'];
  aspectRatio: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  file: Scalars['String']['output'];
  fileHash: Scalars['String']['output'];
  fileSize?: Maybe<Scalars['Int']['output']>;
  focalPointHeight?: Maybe<Scalars['Int']['output']>;
  focalPointWidth?: Maybe<Scalars['Int']['output']>;
  focalPointX?: Maybe<Scalars['Int']['output']>;
  focalPointY?: Maybe<Scalars['Int']['output']>;
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  rendition: ImageRendition;
  sizes: Scalars['String']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ImageRenditionArgs = {
  specs: Scalars['String']['input'];
};

export type ImageRendition = {
  __typename?: 'ImageRendition';
  alt: Scalars['String']['output'];
  backgroundPositionStyle: Scalars['String']['output'];
  file: Scalars['String']['output'];
  filterSpec: Scalars['String']['output'];
  focalPoint?: Maybe<Scalars['String']['output']>;
  focalPointKey: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image: Image;
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type NavigationSettings = {
  __typename?: 'NavigationSettings';
  primaryNavigation: Array<Pages>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID']['output'];
  searchDescription: Scalars['String']['output'];
  seoTitle: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PageActivity = {
  __typename?: 'PageActivity';
  activity: Activity;
};

export type PageEducation = {
  __typename?: 'PageEducation';
  education: Education;
};

export type PageExperience = {
  __typename?: 'PageExperience';
  experience: Experience;
};

export type PageOpenSourceContribution = {
  __typename?: 'PageOpenSourceContribution';
  openSource: Experience;
};

export type Pages = AboutMePage | HomePage | Page | ResumePage;

export type Query = {
  __typename?: 'Query';
  about: AboutMePage;
  home: HomePage;
  navigationSettings?: Maybe<NavigationSettings>;
  page: Pages;
  pages: Array<Pages>;
  resume: ResumePage;
  socialMediaSettings?: Maybe<SocialMediaSettings>;
};

export type QueryPageArgs = {
  slug: Scalars['String']['input'];
};

export type ResumePage = {
  __typename?: 'ResumePage';
  activities: Array<PageActivity>;
  educations: Array<PageEducation>;
  experiences: Array<PageExperience>;
  id: Scalars['ID']['output'];
  introduction: Scalars['String']['output'];
  openSourceContributions: Array<PageOpenSourceContribution>;
  profilePhoto: Image;
  searchDescription: Scalars['String']['output'];
  seoTitle: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  subtitle: Scalars['String']['output'];
  technologies: Array<Technology>;
  title: Scalars['String']['output'];
};

export type SocialAccount = {
  __typename?: 'SocialAccount';
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type SocialMediaSettings = {
  __typename?: 'SocialMediaSettings';
  email: Scalars['String']['output'];
  socials: Array<SocialAccount>;
  website: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Technology = {
  __typename?: 'Technology';
  technology: Scalars['String']['output'];
};

export type AboutQueryVariables = Exact<{ [key: string]: never }>;

export type HomeQueryVariables = Exact<{ [key: string]: never }>;

export type ResumeQueryVariables = Exact<{ [key: string]: never }>;

export type NavigationQueryVariables = Exact<{ [key: string]: never }>;

export type ActivityFieldsFragment = {
  __typename?: 'Activity';
  id: string;
  dateRange: string;
  link: string;
  shortDescription?: string | null;
  longDescription?: string | null;
  title: string;
};

export type EducationFieldsFragment = {
  __typename?: 'Education';
  id: string;
  dateRange: string;
  degree: string;
  institutionName: string;
};

export type HomePageFieldsFragment = {
  __typename?: 'HomePage';
  id: string;
  title: string;
  slug: string;
  tagline?: string | null;
  introduction: string;
  cta: { __typename?: 'CTABlock'; text: string; url: string };
  image: { __typename?: 'Image'; height: number; width: number; url: string };
};

export type ImageFragment = {
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

export const ActivityFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ActivityFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Activity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateRange' } },
          { kind: 'Field', name: { kind: 'Name', value: 'link' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ActivityFieldsFragment, unknown>;
export const EducationFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EducationFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Education' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateRange' } },
          { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
          { kind: 'Field', name: { kind: 'Name', value: 'institutionName' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EducationFieldsFragment, unknown>;
export const HomePageFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HomePageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HomePage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'introduction' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomePageFieldsFragment, unknown>;
export const ImageFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ImageFragment, unknown>;
export const AboutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'About' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'about' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'introduction' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'searchDescription' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'seoTitle' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'technologies' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'technology' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePhoto' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'Image' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                              name: { kind: 'Name', value: 'jobTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'timeline' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longDescription' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                              name: { kind: 'Name', value: 'jobTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'timeline' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'longDescription' },
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
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ActivityFields' },
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
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ActivityFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Activity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateRange' } },
          { kind: 'Field', name: { kind: 'Name', value: 'link' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AboutQuery, AboutQueryVariables>;
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
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'HomePageFields' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'HomePageFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'HomePage' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
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
                      { kind: 'Field', name: { kind: 'Name', value: 'text' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'url' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'introduction' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<HomeQuery, HomeQueryVariables>;
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
                { kind: 'Field', name: { kind: 'Name', value: 'subtitle' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'profilePhoto' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'Image' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                              name: { kind: 'Name', value: 'jobTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'timeline' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shortDescription' },
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
                              name: { kind: 'Name', value: 'id' },
                            },
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
                              name: { kind: 'Name', value: 'jobTitle' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'timeline' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'shortDescription' },
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
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'EducationFields' },
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
                              kind: 'FragmentSpread',
                              name: { kind: 'Name', value: 'ActivityFields' },
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
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'Image' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Image' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'altText' } },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file' } },
                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                { kind: 'Field', name: { kind: 'Name', value: 'height' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EducationFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Education' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateRange' } },
          { kind: 'Field', name: { kind: 'Name', value: 'degree' } },
          { kind: 'Field', name: { kind: 'Name', value: 'institutionName' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ActivityFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Activity' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'dateRange' } },
          { kind: 'Field', name: { kind: 'Name', value: 'link' } },
          { kind: 'Field', name: { kind: 'Name', value: 'shortDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'longDescription' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ResumeQuery, ResumeQueryVariables>;
export const NavigationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Navigation' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'navigationSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'primaryNavigation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'Page' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'ResumePage' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'HomePage' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'InlineFragment',
                        typeCondition: {
                          kind: 'NamedType',
                          name: { kind: 'Name', value: 'AboutMePage' },
                        },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'title' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
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
} as unknown as DocumentNode<NavigationQuery, NavigationQueryVariables>;
export type AboutQuery = { __typename?: 'Query'; about: AboutMePage };
export type HomeQuery = { __typename?: 'Query'; home: HomePage };
export type ResumeQuery = { __typename?: 'Query'; resume: ResumePage };
export type NavigationQuery = {
  __typename?: 'Query';
  navigationSettings: NavigationSettings;
};
