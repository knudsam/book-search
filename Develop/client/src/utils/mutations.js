import { gql } from '@apollo/client';

// mutation to login a user
export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            user{
                _id
                username
                email
                bookCount
                savedBooks {
                    bookID
                    authors
                    description
                    title
                    image
                    link
                }
            }
        }
    }
`;

// mutation to add a user
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            user{
                _id
                username
                email
                bookCount
                savedBooks {
                    bookID
                    authors
                    description
                    title
                    image
                    link
                }
            }
        }
    }
`;

// mutation to save a book
export const SAVE_BOOK = gql`
    mutation saveBook($bookData: BookInput!) {
        saveBook(bookData: $bookData!) {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookID
                    authors
                    description
                    title
                    image
                    link
            }
        }
    }
`;

// mutation to delete a book
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookID: $bookId!) {
                _id
                username
                email
                bookCount
                savedBooks {
                    bookID
                    authors
                    description
                    title
                    image
                    link
            }
        }
    }
`;