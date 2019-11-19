import gql from "graphql-tag";

export const ADD_PATIENT = gql`
  mutation addPatient(
    $name: String!
    $password: String!
    $email: String!
    $doctor: ID
    $type: String!
  ) {
    addUser(
      name: $name
      password: $password
      email: $email
      doctor: $doctor
      type: $type
    ) {
      id
      name
      email
    }
  }
`;

export const ADD_DIET = gql`
  mutation addDiet($user: ID!, $name: String!) {
    addDiet(user: $user, name: $name) {
      id
      name
      createdAt
      meals {
        id
        name
        foods
        schedule
      }
    }
  }
`;

export const EDIT_DIET = gql`
  mutation editDiet($diet: ID!, $name: String!) {
    editDiet(diet: $diet, name: $name) {
      id
      name
      createdAt
    }
  }
`;

export const REMOVE_DIET = gql`
  mutation removeDiet($diet: ID!) {
    removeDiet(diet: $diet) {
      id
      name
    }
  }
`;

export const GET_USER = gql`
  query userQuery($userID: ID!) {
    user(id: $userID) {
      id
      name
      email
      type
      measures {
          height
          weight
          waist
          createdAt
          id
        }
      diets {
        id
        name
        createdAt
        meals {
          id
          name
          foods
          schedule
        }
      }
    }
  }
`;

export const ADD_MEAL = gql`
  mutation addMeal(
    $diet: ID!
    $foods: [String]!
    $schedule: String!
    $name: String!
  ) {
    addMeal(diet: $diet, foods: $foods, schedule: $schedule, name: $name) {
      id
          name
          foods
          schedule
    }
  }
`;

export const REMOVE_MEAL = gql`
  mutation removeMeal($id: ID!) {
    removeMeal(id: $id) {
      id
    }
  }
`;

export const ADD_MEASURE = gql`
  mutation addMeasure($user: ID!, $height: Int!, $weight: Int!, $waist: Int!) {
    addMeasure(user: $user, height: $height, weight: $weight, waist: $waist) {
      id
    }
  }
`;

export const REMOVE_MEASURE = gql`
  mutation removeMeasure($id: ID!) {
    removeMeasure(id: $id) {
      id
    }
  }
`;

export const REMOVE_USER = gql`
  mutation removeUser($id: ID!) {
    removeUser (id: $id) {
      id
    }
  }
`;

export const GET_PATIENTS = gql`
query User($doctor: ID) {
  users(doctor: $doctor) {
    id
    name
    email
  }
}
`;
