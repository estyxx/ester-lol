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
  longDescription: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
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
  longDescription: Scalars['String']['output'];
  shortDescription: Scalars['String']['output'];
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
