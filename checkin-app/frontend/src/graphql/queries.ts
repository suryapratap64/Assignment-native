
import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query {
    events {
      id
      name
      location
      startTime
      attendees {
        id
        name
      }
    }
  }
`;

export const GET_ME = gql`
  query {
    me {
      id
      name
    }
  }
`;
