import { gql } from 'apollo-boost';

export const typeDefs = gql`
    extends type Mutation{
        ToggleCartHidden: Boolean!
    }

`
const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`
export const resolvers = {
    Mutation : {
        toggleCartHidden : (_root, _args, { cache }) => {
            const {cartHidden}=cache.readQuery({
                quer : GET_CART_HIDDEN,
                
            });

            cache.writeQuery({
                query : GET_CART_HIDDEN,
                data : {cartHidden : !cartHidden}
            });

            return !cartHidden;
        },

    }
}