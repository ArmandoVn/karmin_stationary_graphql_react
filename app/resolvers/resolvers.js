import mongoose from 'mongoose';
import Clientes from '../db';
import { rejects } from 'assert';

// resolvers bring the result of querys, matations, etc. 
export const resolvers = {
    Query: {
        getCliente : ({id}) => {
            return new Clientes(id, clientesDB[id]);
        }
    },
    Mutation: {
        crearCliente : (root, {input}) => {
            const nuevoCliente = new Clientes({
                nombre : input.nombre,
                apellido : input.apellido,
                empresa : input.empresa,
                emails : input.emails,
                edad : input.edad,
                tipo : input.tipo,
                pedidos : input.pedidos
            });

            nuevoCliente.id = nuevoCliente._id;

            return new Promise((resolve, object) => {
                nuevoCliente.save((e) => {
                    e ? rejects(e) : resolve(nuevoCliente);
                })
            });
        }
    }
}

export default resolvers;