const typeDefs = `
    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [Order]
    }

    type Theme {
        _id: ID
        name: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        image: String
        quantity: Int
        price: Float
        theme: Theme
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        themes: [Theme]
        products(theme: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
