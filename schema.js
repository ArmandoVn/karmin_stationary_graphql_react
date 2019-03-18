import {buildSchema} from 'graphql';

// Remember: When i make a change in the GraphQL schema i have to verify the resolvers 
// and the input if i have one.
const schema = buildSchema(`
    type Query {
        getCliente(id: ID): Cliente
    }

    type Mutation {
        crearCliente(input: ClienteInput): Cliente
    }

    type Cliente {
        id: ID,
        nombre: String,
        apellido: String,
        empresa: String,
        email: String
    }

    type Email {
        email: String
    }

    input ClienteInput {
        id: ID,
        nombre: String!,
        apellido: String!,
        empresa: String!,
        email: String!
    }
`);

export default schema;