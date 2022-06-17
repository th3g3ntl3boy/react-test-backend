'use strict';

// const {ApolloServer} = require('apollo-server');
// const typeDefs = require('./schema');

// const server = new ApolloServer({typeDefs});

// server.listen().then(()=>{
//   console.log("server is running")
// })

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
