import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  UUID: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Job = {
  __typename?: 'Job';
  Id: Scalars['Int']['output'];
  completed: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  file: Scalars['String']['output'];
  onGoing: Scalars['Boolean']['output'];
};

export type LoginUser = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob: Job;
  deleteJob: Scalars['String']['output'];
  login: Scalars['String']['output'];
  signup: User;
  updateJob: Job;
};


export type MutationCreateJobArgs = {
  input: NewJob;
};


export type MutationDeleteJobArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  input: LoginUser;
};


export type MutationSignupArgs = {
  input: NewUser;
};


export type MutationUpdateJobArgs = {
  id: Scalars['Int']['input'];
  input: NewJob;
};

export type NewJob = {
  completed: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['String']['input'];
  onGoing: Scalars['Boolean']['input'];
  userId: Scalars['Int']['input'];
};

export type NewUser = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  job: Job;
  jobs: Array<Job>;
  user: User;
  users: Array<User>;
};


export type QueryJobArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  Id: Scalars['Int']['output'];
  email: Scalars['String']['output'];
  jobs: Array<Job>;
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type SignupMutationVariables = Exact<{
  input: NewUser;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', Id: number, username: string, email: string, password: string } };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', Id: number, username: string, email: string }> };


export const SignupDocument = gql`
    mutation signup($input: NewUser!) {
  signup(input: $input) {
    Id
    username
    email
    password
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    Id
    username
    email
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;