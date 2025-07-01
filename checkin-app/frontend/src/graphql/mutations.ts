
import { gql } from "@apollo/client";

export const JOIN_EVENT = gql`
  mutation JoinEvent($eventId: ID!) {
    joinEvent(eventId: $eventId) {
      id
      attendees {
        id
        name
      }
    }
  }
`;
