"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Connection",
    embedded: false
  },
  {
    name: "Deck",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserInfo",
    embedded: false
  },
  {
    name: "UserSettings",
    embedded: false
  },
  {
    name: "Vote",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["DATABASE_SERVER"]}`
});
exports.prisma = new exports.Prisma();
