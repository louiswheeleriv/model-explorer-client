/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Faction = {
  __typename?: 'Faction';
  id: Scalars['ID']['output'];
  models: Array<Model>;
  name: Scalars['String']['output'];
};

export type Model = {
  __typename?: 'Model';
  faction: Faction;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  userModels: Array<UserModel>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  factions: Array<Faction>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  userImageAssociations: Array<UserImageAssociation>;
  userImages: Array<UserImage>;
  userModels: Array<UserModel>;
  username: Scalars['String']['output'];
};

export type UserImage = {
  __typename?: 'UserImage';
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  user: User;
  userImageAssociations: Array<UserImageAssociation>;
};

export type UserImageAssociation = {
  __typename?: 'UserImageAssociation';
  id: Scalars['ID']['output'];
  user: User;
  userImage: UserImage;
  userModel: UserModel;
};

export type UserModel = {
  __typename?: 'UserModel';
  id: Scalars['ID']['output'];
  model: Model;
  name?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  status: UserModelStatus;
  user: User;
  userImageAssociations: Array<UserImageAssociation>;
};

export enum UserModelStatus {
  Assembled = 'ASSEMBLED',
  Finished = 'FINISHED',
  InProgress = 'IN_PROGRESS',
  Unassembled = 'UNASSEMBLED'
}
