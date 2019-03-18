import {buildSchema} from 'graphql';

// Remember: When i make a change in the GraphQL schema i have to verify the resolvers 
// and the input if i have one.
const schema = buildSchema(`
    type Query {
        """ Bring a client for his id, receives an id and returns a Client if it exist """
        getCliente(id: ID): Cliente
    }

    """ Mutations for create new "clientes" """
    type Mutation {
        # resolver name( input with data ): return values.
        crearCliente(input: ClienteInput): Cliente
    }

    type Cliente {
        id: ID,
        nombre: String,
        apellido: String,
        empresa: String,
        email: String
        tipo: TipoCliente!
        pedidos: [Pedido]
    }

    type Pedido {
        producto: String
        precio: Int
    }

    enum TipoCliente{
        BASICO
        PREMIUM
    }

    type Email {
        email: String
    }

    input PedidoInput{
        producto: String
        precio: Int
    }

    input ClienteInput {
        id: ID,
        nombre: String!,
        apellido: String!,
        empresa: String!,
        email: String!
        tipo: TipoCliente!
        pedidos: [PedidoInput]
    }
`);

export default schema;