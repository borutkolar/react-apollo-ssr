import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const GET_FROMAGE = gql`
  query Fromage($id: String!) {
    fromage(id: $id) {
      id
      name
    }
  }
`;

const Fromage = ({
  match: {
    params: { id }
  }
}) => (
  <Query query={GET_FROMAGE} variables={{ id }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return (
        <div className="App">
          <h2>{data.fromage.name}</h2>
        </div>
      );
    }}
  </Query>
);

export default Fromage;