module.exports = {
        typeDefs: /* GraphQL */ `type AggregateConnection {
  count: Int!
}

type AggregateDeck {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserInfo {
  count: Int!
}

type AggregateUserSettings {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Connection {
  id: ID!
  allowance: Int!
  friend: User!
  about: String!
  verified: Boolean
  accepted: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ConnectionConnection {
  pageInfo: PageInfo!
  edges: [ConnectionEdge]!
  aggregate: AggregateConnection!
}

input ConnectionCreateInput {
  allowance: Int
  friend: UserCreateOneWithoutConnectionsInput!
  about: String
  verified: Boolean
  accepted: Boolean
}

input ConnectionCreateManyWithoutFriendInput {
  create: [ConnectionCreateWithoutFriendInput!]
  connect: [ConnectionWhereUniqueInput!]
}

input ConnectionCreateWithoutFriendInput {
  allowance: Int
  about: String
  verified: Boolean
  accepted: Boolean
}

type ConnectionEdge {
  node: Connection!
  cursor: String!
}

enum ConnectionOrderByInput {
  id_ASC
  id_DESC
  allowance_ASC
  allowance_DESC
  about_ASC
  about_DESC
  verified_ASC
  verified_DESC
  accepted_ASC
  accepted_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ConnectionPreviousValues {
  id: ID!
  allowance: Int!
  about: String!
  verified: Boolean
  accepted: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

input ConnectionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  allowance: Int
  allowance_not: Int
  allowance_in: [Int!]
  allowance_not_in: [Int!]
  allowance_lt: Int
  allowance_lte: Int
  allowance_gt: Int
  allowance_gte: Int
  about: String
  about_not: String
  about_in: [String!]
  about_not_in: [String!]
  about_lt: String
  about_lte: String
  about_gt: String
  about_gte: String
  about_contains: String
  about_not_contains: String
  about_starts_with: String
  about_not_starts_with: String
  about_ends_with: String
  about_not_ends_with: String
  verified: Boolean
  verified_not: Boolean
  accepted: Boolean
  accepted_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ConnectionScalarWhereInput!]
  OR: [ConnectionScalarWhereInput!]
  NOT: [ConnectionScalarWhereInput!]
}

type ConnectionSubscriptionPayload {
  mutation: MutationType!
  node: Connection
  updatedFields: [String!]
  previousValues: ConnectionPreviousValues
}

input ConnectionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ConnectionWhereInput
  AND: [ConnectionSubscriptionWhereInput!]
  OR: [ConnectionSubscriptionWhereInput!]
  NOT: [ConnectionSubscriptionWhereInput!]
}

input ConnectionUpdateInput {
  allowance: Int
  friend: UserUpdateOneRequiredWithoutConnectionsInput
  about: String
  verified: Boolean
  accepted: Boolean
}

input ConnectionUpdateManyDataInput {
  allowance: Int
  about: String
  verified: Boolean
  accepted: Boolean
}

input ConnectionUpdateManyMutationInput {
  allowance: Int
  about: String
  verified: Boolean
  accepted: Boolean
}

input ConnectionUpdateManyWithoutFriendInput {
  create: [ConnectionCreateWithoutFriendInput!]
  delete: [ConnectionWhereUniqueInput!]
  connect: [ConnectionWhereUniqueInput!]
  set: [ConnectionWhereUniqueInput!]
  disconnect: [ConnectionWhereUniqueInput!]
  update: [ConnectionUpdateWithWhereUniqueWithoutFriendInput!]
  upsert: [ConnectionUpsertWithWhereUniqueWithoutFriendInput!]
  deleteMany: [ConnectionScalarWhereInput!]
  updateMany: [ConnectionUpdateManyWithWhereNestedInput!]
}

input ConnectionUpdateManyWithWhereNestedInput {
  where: ConnectionScalarWhereInput!
  data: ConnectionUpdateManyDataInput!
}

input ConnectionUpdateWithoutFriendDataInput {
  allowance: Int
  about: String
  verified: Boolean
  accepted: Boolean
}

input ConnectionUpdateWithWhereUniqueWithoutFriendInput {
  where: ConnectionWhereUniqueInput!
  data: ConnectionUpdateWithoutFriendDataInput!
}

input ConnectionUpsertWithWhereUniqueWithoutFriendInput {
  where: ConnectionWhereUniqueInput!
  update: ConnectionUpdateWithoutFriendDataInput!
  create: ConnectionCreateWithoutFriendInput!
}

input ConnectionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  allowance: Int
  allowance_not: Int
  allowance_in: [Int!]
  allowance_not_in: [Int!]
  allowance_lt: Int
  allowance_lte: Int
  allowance_gt: Int
  allowance_gte: Int
  friend: UserWhereInput
  about: String
  about_not: String
  about_in: [String!]
  about_not_in: [String!]
  about_lt: String
  about_lte: String
  about_gt: String
  about_gte: String
  about_contains: String
  about_not_contains: String
  about_starts_with: String
  about_not_starts_with: String
  about_ends_with: String
  about_not_ends_with: String
  verified: Boolean
  verified_not: Boolean
  accepted: Boolean
  accepted_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ConnectionWhereInput!]
  OR: [ConnectionWhereInput!]
  NOT: [ConnectionWhereInput!]
}

input ConnectionWhereUniqueInput {
  id: ID
}

scalar DateTime

type Deck {
  id: ID!
  author: User!
  deckList: String!
  deckDetails: String!
  deckName: String!
  score: Int!
  raw: String
}

type DeckConnection {
  pageInfo: PageInfo!
  edges: [DeckEdge]!
  aggregate: AggregateDeck!
}

input DeckCreateInput {
  author: UserCreateOneWithoutDecksInput!
  deckList: String!
  deckDetails: String!
  deckName: String
  score: Int
  raw: String
}

input DeckCreateManyWithoutAuthorInput {
  create: [DeckCreateWithoutAuthorInput!]
  connect: [DeckWhereUniqueInput!]
}

input DeckCreateOneInput {
  create: DeckCreateInput
  connect: DeckWhereUniqueInput
}

input DeckCreateWithoutAuthorInput {
  deckList: String!
  deckDetails: String!
  deckName: String
  score: Int
  raw: String
}

type DeckEdge {
  node: Deck!
  cursor: String!
}

enum DeckOrderByInput {
  id_ASC
  id_DESC
  deckList_ASC
  deckList_DESC
  deckDetails_ASC
  deckDetails_DESC
  deckName_ASC
  deckName_DESC
  score_ASC
  score_DESC
  raw_ASC
  raw_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DeckPreviousValues {
  id: ID!
  deckList: String!
  deckDetails: String!
  deckName: String!
  score: Int!
  raw: String
}

input DeckScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  deckList: String
  deckList_not: String
  deckList_in: [String!]
  deckList_not_in: [String!]
  deckList_lt: String
  deckList_lte: String
  deckList_gt: String
  deckList_gte: String
  deckList_contains: String
  deckList_not_contains: String
  deckList_starts_with: String
  deckList_not_starts_with: String
  deckList_ends_with: String
  deckList_not_ends_with: String
  deckDetails: String
  deckDetails_not: String
  deckDetails_in: [String!]
  deckDetails_not_in: [String!]
  deckDetails_lt: String
  deckDetails_lte: String
  deckDetails_gt: String
  deckDetails_gte: String
  deckDetails_contains: String
  deckDetails_not_contains: String
  deckDetails_starts_with: String
  deckDetails_not_starts_with: String
  deckDetails_ends_with: String
  deckDetails_not_ends_with: String
  deckName: String
  deckName_not: String
  deckName_in: [String!]
  deckName_not_in: [String!]
  deckName_lt: String
  deckName_lte: String
  deckName_gt: String
  deckName_gte: String
  deckName_contains: String
  deckName_not_contains: String
  deckName_starts_with: String
  deckName_not_starts_with: String
  deckName_ends_with: String
  deckName_not_ends_with: String
  score: Int
  score_not: Int
  score_in: [Int!]
  score_not_in: [Int!]
  score_lt: Int
  score_lte: Int
  score_gt: Int
  score_gte: Int
  raw: String
  raw_not: String
  raw_in: [String!]
  raw_not_in: [String!]
  raw_lt: String
  raw_lte: String
  raw_gt: String
  raw_gte: String
  raw_contains: String
  raw_not_contains: String
  raw_starts_with: String
  raw_not_starts_with: String
  raw_ends_with: String
  raw_not_ends_with: String
  AND: [DeckScalarWhereInput!]
  OR: [DeckScalarWhereInput!]
  NOT: [DeckScalarWhereInput!]
}

type DeckSubscriptionPayload {
  mutation: MutationType!
  node: Deck
  updatedFields: [String!]
  previousValues: DeckPreviousValues
}

input DeckSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DeckWhereInput
  AND: [DeckSubscriptionWhereInput!]
  OR: [DeckSubscriptionWhereInput!]
  NOT: [DeckSubscriptionWhereInput!]
}

input DeckUpdateDataInput {
  author: UserUpdateOneRequiredWithoutDecksInput
  deckList: String
  deckDetails: String
  deckName: String
  score: Int
  raw: String
}

input DeckUpdateInput {
  author: UserUpdateOneRequiredWithoutDecksInput
  deckList: String
  deckDetails: String
  deckName: String
  score: Int
  raw: String
}

input DeckUpdateManyDataInput {
  deckList: String
  deckDetails: String
  deckName: String
  score: Int
  raw: String
}

input DeckUpdateManyMutationInput {
  deckList: String
  deckDetails: String
  deckName: String
  score: Int
  raw: String
}

input DeckUpdateManyWithoutAuthorInput {
  create: [DeckCreateWithoutAuthorInput!]
  delete: [DeckWhereUniqueInput!]
  connect: [DeckWhereUniqueInput!]
  set: [DeckWhereUniqueInput!]
  disconnect: [DeckWhereUniqueInput!]
  update: [DeckUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [DeckUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [DeckScalarWhereInput!]
  updateMany: [DeckUpdateManyWithWhereNestedInput!]
}

input DeckUpdateManyWithWhereNestedInput {
  where: DeckScalarWhereInput!
  data: DeckUpdateManyDataInput!
}

input DeckUpdateOneRequiredInput {
  create: DeckCreateInput
  update: DeckUpdateDataInput
  upsert: DeckUpsertNestedInput
  connect: DeckWhereUniqueInput
}

input DeckUpdateWithoutAuthorDataInput {
  deckList: String
  deckDetails: String
  deckName: String
  score: Int
  raw: String
}

input DeckUpdateWithWhereUniqueWithoutAuthorInput {
  where: DeckWhereUniqueInput!
  data: DeckUpdateWithoutAuthorDataInput!
}

input DeckUpsertNestedInput {
  update: DeckUpdateDataInput!
  create: DeckCreateInput!
}

input DeckUpsertWithWhereUniqueWithoutAuthorInput {
  where: DeckWhereUniqueInput!
  update: DeckUpdateWithoutAuthorDataInput!
  create: DeckCreateWithoutAuthorInput!
}

input DeckWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  deckList: String
  deckList_not: String
  deckList_in: [String!]
  deckList_not_in: [String!]
  deckList_lt: String
  deckList_lte: String
  deckList_gt: String
  deckList_gte: String
  deckList_contains: String
  deckList_not_contains: String
  deckList_starts_with: String
  deckList_not_starts_with: String
  deckList_ends_with: String
  deckList_not_ends_with: String
  deckDetails: String
  deckDetails_not: String
  deckDetails_in: [String!]
  deckDetails_not_in: [String!]
  deckDetails_lt: String
  deckDetails_lte: String
  deckDetails_gt: String
  deckDetails_gte: String
  deckDetails_contains: String
  deckDetails_not_contains: String
  deckDetails_starts_with: String
  deckDetails_not_starts_with: String
  deckDetails_ends_with: String
  deckDetails_not_ends_with: String
  deckName: String
  deckName_not: String
  deckName_in: [String!]
  deckName_not_in: [String!]
  deckName_lt: String
  deckName_lte: String
  deckName_gt: String
  deckName_gte: String
  deckName_contains: String
  deckName_not_contains: String
  deckName_starts_with: String
  deckName_not_starts_with: String
  deckName_ends_with: String
  deckName_not_ends_with: String
  score: Int
  score_not: Int
  score_in: [Int!]
  score_not_in: [Int!]
  score_lt: Int
  score_lte: Int
  score_gt: Int
  score_gte: Int
  raw: String
  raw_not: String
  raw_in: [String!]
  raw_not_in: [String!]
  raw_lt: String
  raw_lte: String
  raw_gt: String
  raw_gte: String
  raw_contains: String
  raw_not_contains: String
  raw_starts_with: String
  raw_not_starts_with: String
  raw_ends_with: String
  raw_not_ends_with: String
  AND: [DeckWhereInput!]
  OR: [DeckWhereInput!]
  NOT: [DeckWhereInput!]
}

input DeckWhereUniqueInput {
  id: ID
}

scalar Long

type Message {
  id: ID!
  author: User!
  recipient: User!
  type: String!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  author: UserCreateOneWithoutOutboxInput!
  recipient: UserCreateOneWithoutInboxInput!
  type: String
  text: String!
}

input MessageCreateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutRecipientInput {
  create: [MessageCreateWithoutRecipientInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutAuthorInput {
  recipient: UserCreateOneWithoutInboxInput!
  type: String
  text: String!
}

input MessageCreateWithoutRecipientInput {
  author: UserCreateOneWithoutOutboxInput!
  type: String
  text: String!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MessagePreviousValues {
  id: ID!
  type: String!
  text: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  author: UserUpdateOneRequiredWithoutOutboxInput
  recipient: UserUpdateOneRequiredWithoutInboxInput
  type: String
  text: String
}

input MessageUpdateManyDataInput {
  type: String
  text: String
}

input MessageUpdateManyMutationInput {
  type: String
  text: String
}

input MessageUpdateManyWithoutAuthorInput {
  create: [MessageCreateWithoutAuthorInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutRecipientInput {
  create: [MessageCreateWithoutRecipientInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutRecipientInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutRecipientInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutAuthorDataInput {
  recipient: UserUpdateOneRequiredWithoutInboxInput
  type: String
  text: String
}

input MessageUpdateWithoutRecipientDataInput {
  author: UserUpdateOneRequiredWithoutOutboxInput
  type: String
  text: String
}

input MessageUpdateWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutAuthorDataInput!
}

input MessageUpdateWithWhereUniqueWithoutRecipientInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutRecipientDataInput!
}

input MessageUpsertWithWhereUniqueWithoutAuthorInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutAuthorDataInput!
  create: MessageCreateWithoutAuthorInput!
}

input MessageUpsertWithWhereUniqueWithoutRecipientInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutRecipientDataInput!
  create: MessageCreateWithoutRecipientInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  recipient: UserWhereInput
  type: String
  type_not: String
  type_in: [String!]
  type_not_in: [String!]
  type_lt: String
  type_lte: String
  type_gt: String
  type_gte: String
  type_contains: String
  type_not_contains: String
  type_starts_with: String
  type_not_starts_with: String
  type_ends_with: String
  type_not_ends_with: String
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createConnection(data: ConnectionCreateInput!): Connection!
  updateConnection(data: ConnectionUpdateInput!, where: ConnectionWhereUniqueInput!): Connection
  updateManyConnections(data: ConnectionUpdateManyMutationInput!, where: ConnectionWhereInput): BatchPayload!
  upsertConnection(where: ConnectionWhereUniqueInput!, create: ConnectionCreateInput!, update: ConnectionUpdateInput!): Connection!
  deleteConnection(where: ConnectionWhereUniqueInput!): Connection
  deleteManyConnections(where: ConnectionWhereInput): BatchPayload!
  createDeck(data: DeckCreateInput!): Deck!
  updateDeck(data: DeckUpdateInput!, where: DeckWhereUniqueInput!): Deck
  updateManyDecks(data: DeckUpdateManyMutationInput!, where: DeckWhereInput): BatchPayload!
  upsertDeck(where: DeckWhereUniqueInput!, create: DeckCreateInput!, update: DeckUpdateInput!): Deck!
  deleteDeck(where: DeckWhereUniqueInput!): Deck
  deleteManyDecks(where: DeckWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createUserInfo(data: UserInfoCreateInput!): UserInfo!
  updateUserInfo(data: UserInfoUpdateInput!, where: UserInfoWhereUniqueInput!): UserInfo
  updateManyUserInfoes(data: UserInfoUpdateManyMutationInput!, where: UserInfoWhereInput): BatchPayload!
  upsertUserInfo(where: UserInfoWhereUniqueInput!, create: UserInfoCreateInput!, update: UserInfoUpdateInput!): UserInfo!
  deleteUserInfo(where: UserInfoWhereUniqueInput!): UserInfo
  deleteManyUserInfoes(where: UserInfoWhereInput): BatchPayload!
  createUserSettings(data: UserSettingsCreateInput!): UserSettings!
  updateUserSettings(data: UserSettingsUpdateInput!, where: UserSettingsWhereUniqueInput!): UserSettings
  updateManyUserSettingses(data: UserSettingsUpdateManyMutationInput!, where: UserSettingsWhereInput): BatchPayload!
  upsertUserSettings(where: UserSettingsWhereUniqueInput!, create: UserSettingsCreateInput!, update: UserSettingsUpdateInput!): UserSettings!
  deleteUserSettings(where: UserSettingsWhereUniqueInput!): UserSettings
  deleteManyUserSettingses(where: UserSettingsWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateManyMutationInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  connection(where: ConnectionWhereUniqueInput!): Connection
  connections(where: ConnectionWhereInput, orderBy: ConnectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Connection]!
  connectionsConnection(where: ConnectionWhereInput, orderBy: ConnectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ConnectionConnection!
  deck(where: DeckWhereUniqueInput!): Deck
  decks(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deck]!
  decksConnection(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DeckConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userInfo(where: UserInfoWhereUniqueInput!): UserInfo
  userInfoes(where: UserInfoWhereInput, orderBy: UserInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserInfo]!
  userInfoesConnection(where: UserInfoWhereInput, orderBy: UserInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserInfoConnection!
  userSettings(where: UserSettingsWhereUniqueInput!): UserSettings
  userSettingses(where: UserSettingsWhereInput, orderBy: UserSettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserSettings]!
  userSettingsesConnection(where: UserSettingsWhereInput, orderBy: UserSettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserSettingsConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Subscription {
  connection(where: ConnectionSubscriptionWhereInput): ConnectionSubscriptionPayload
  deck(where: DeckSubscriptionWhereInput): DeckSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userInfo(where: UserInfoSubscriptionWhereInput): UserInfoSubscriptionPayload
  userSettings(where: UserSettingsSubscriptionWhereInput): UserSettingsSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfo
  decks(where: DeckWhereInput, orderBy: DeckOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Deck!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  userSettings: UserSettings
  connections(where: ConnectionWhereInput, orderBy: ConnectionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Connection!]
  inbox(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  outbox(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfoCreateOneWithoutUserInput
  decks: DeckCreateManyWithoutAuthorInput
  votes: VoteCreateManyWithoutAuthorInput
  userSettings: UserSettingsCreateOneWithoutUserInput
  connections: ConnectionCreateManyWithoutFriendInput
  inbox: MessageCreateManyWithoutRecipientInput
  outbox: MessageCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutConnectionsInput {
  create: UserCreateWithoutConnectionsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutDecksInput {
  create: UserCreateWithoutDecksInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutInboxInput {
  create: UserCreateWithoutInboxInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutOutboxInput {
  create: UserCreateWithoutOutboxInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserInfoInput {
  create: UserCreateWithoutUserInfoInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserSettingsInput {
  create: UserCreateWithoutUserSettingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutConnectionsInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfoCreateOneWithoutUserInput
  decks: DeckCreateManyWithoutAuthorInput
  votes: VoteCreateManyWithoutAuthorInput
  userSettings: UserSettingsCreateOneWithoutUserInput
  inbox: MessageCreateManyWithoutRecipientInput
  outbox: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutDecksInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfoCreateOneWithoutUserInput
  votes: VoteCreateManyWithoutAuthorInput
  userSettings: UserSettingsCreateOneWithoutUserInput
  connections: ConnectionCreateManyWithoutFriendInput
  inbox: MessageCreateManyWithoutRecipientInput
  outbox: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutInboxInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfoCreateOneWithoutUserInput
  decks: DeckCreateManyWithoutAuthorInput
  votes: VoteCreateManyWithoutAuthorInput
  userSettings: UserSettingsCreateOneWithoutUserInput
  connections: ConnectionCreateManyWithoutFriendInput
  outbox: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutOutboxInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfoCreateOneWithoutUserInput
  decks: DeckCreateManyWithoutAuthorInput
  votes: VoteCreateManyWithoutAuthorInput
  userSettings: UserSettingsCreateOneWithoutUserInput
  connections: ConnectionCreateManyWithoutFriendInput
  inbox: MessageCreateManyWithoutRecipientInput
}

input UserCreateWithoutUserInfoInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  decks: DeckCreateManyWithoutAuthorInput
  votes: VoteCreateManyWithoutAuthorInput
  userSettings: UserSettingsCreateOneWithoutUserInput
  connections: ConnectionCreateManyWithoutFriendInput
  inbox: MessageCreateManyWithoutRecipientInput
  outbox: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutUserSettingsInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfoCreateOneWithoutUserInput
  decks: DeckCreateManyWithoutAuthorInput
  votes: VoteCreateManyWithoutAuthorInput
  connections: ConnectionCreateManyWithoutFriendInput
  inbox: MessageCreateManyWithoutRecipientInput
  outbox: MessageCreateManyWithoutAuthorInput
}

input UserCreateWithoutVotesInput {
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  userInfo: UserInfoCreateOneWithoutUserInput
  decks: DeckCreateManyWithoutAuthorInput
  userSettings: UserSettingsCreateOneWithoutUserInput
  connections: ConnectionCreateManyWithoutFriendInput
  inbox: MessageCreateManyWithoutRecipientInput
  outbox: MessageCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

type UserInfo {
  id: ID!
  user: User!
  about: String!
  timeZone: String!
}

type UserInfoConnection {
  pageInfo: PageInfo!
  edges: [UserInfoEdge]!
  aggregate: AggregateUserInfo!
}

input UserInfoCreateInput {
  user: UserCreateOneWithoutUserInfoInput!
  about: String!
  timeZone: String!
}

input UserInfoCreateOneWithoutUserInput {
  create: UserInfoCreateWithoutUserInput
  connect: UserInfoWhereUniqueInput
}

input UserInfoCreateWithoutUserInput {
  about: String!
  timeZone: String!
}

type UserInfoEdge {
  node: UserInfo!
  cursor: String!
}

enum UserInfoOrderByInput {
  id_ASC
  id_DESC
  about_ASC
  about_DESC
  timeZone_ASC
  timeZone_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserInfoPreviousValues {
  id: ID!
  about: String!
  timeZone: String!
}

type UserInfoSubscriptionPayload {
  mutation: MutationType!
  node: UserInfo
  updatedFields: [String!]
  previousValues: UserInfoPreviousValues
}

input UserInfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserInfoWhereInput
  AND: [UserInfoSubscriptionWhereInput!]
  OR: [UserInfoSubscriptionWhereInput!]
  NOT: [UserInfoSubscriptionWhereInput!]
}

input UserInfoUpdateInput {
  user: UserUpdateOneRequiredWithoutUserInfoInput
  about: String
  timeZone: String
}

input UserInfoUpdateManyMutationInput {
  about: String
  timeZone: String
}

input UserInfoUpdateOneWithoutUserInput {
  create: UserInfoCreateWithoutUserInput
  update: UserInfoUpdateWithoutUserDataInput
  upsert: UserInfoUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: UserInfoWhereUniqueInput
}

input UserInfoUpdateWithoutUserDataInput {
  about: String
  timeZone: String
}

input UserInfoUpsertWithoutUserInput {
  update: UserInfoUpdateWithoutUserDataInput!
  create: UserInfoCreateWithoutUserInput!
}

input UserInfoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  about: String
  about_not: String
  about_in: [String!]
  about_not_in: [String!]
  about_lt: String
  about_lte: String
  about_gt: String
  about_gte: String
  about_contains: String
  about_not_contains: String
  about_starts_with: String
  about_not_starts_with: String
  about_ends_with: String
  about_not_ends_with: String
  timeZone: String
  timeZone_not: String
  timeZone_in: [String!]
  timeZone_not_in: [String!]
  timeZone_lt: String
  timeZone_lte: String
  timeZone_gt: String
  timeZone_gte: String
  timeZone_contains: String
  timeZone_not_contains: String
  timeZone_starts_with: String
  timeZone_not_starts_with: String
  timeZone_ends_with: String
  timeZone_not_ends_with: String
  AND: [UserInfoWhereInput!]
  OR: [UserInfoWhereInput!]
  NOT: [UserInfoWhereInput!]
}

input UserInfoWhereUniqueInput {
  id: ID
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  isAdmin_ASC
  isAdmin_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  isAdmin: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSettings {
  id: ID!
  user: User!
  darkMode: Boolean
  autoAccept: Boolean
}

type UserSettingsConnection {
  pageInfo: PageInfo!
  edges: [UserSettingsEdge]!
  aggregate: AggregateUserSettings!
}

input UserSettingsCreateInput {
  user: UserCreateOneWithoutUserSettingsInput!
  darkMode: Boolean
  autoAccept: Boolean
}

input UserSettingsCreateOneWithoutUserInput {
  create: UserSettingsCreateWithoutUserInput
  connect: UserSettingsWhereUniqueInput
}

input UserSettingsCreateWithoutUserInput {
  darkMode: Boolean
  autoAccept: Boolean
}

type UserSettingsEdge {
  node: UserSettings!
  cursor: String!
}

enum UserSettingsOrderByInput {
  id_ASC
  id_DESC
  darkMode_ASC
  darkMode_DESC
  autoAccept_ASC
  autoAccept_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserSettingsPreviousValues {
  id: ID!
  darkMode: Boolean
  autoAccept: Boolean
}

type UserSettingsSubscriptionPayload {
  mutation: MutationType!
  node: UserSettings
  updatedFields: [String!]
  previousValues: UserSettingsPreviousValues
}

input UserSettingsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserSettingsWhereInput
  AND: [UserSettingsSubscriptionWhereInput!]
  OR: [UserSettingsSubscriptionWhereInput!]
  NOT: [UserSettingsSubscriptionWhereInput!]
}

input UserSettingsUpdateInput {
  user: UserUpdateOneRequiredWithoutUserSettingsInput
  darkMode: Boolean
  autoAccept: Boolean
}

input UserSettingsUpdateManyMutationInput {
  darkMode: Boolean
  autoAccept: Boolean
}

input UserSettingsUpdateOneWithoutUserInput {
  create: UserSettingsCreateWithoutUserInput
  update: UserSettingsUpdateWithoutUserDataInput
  upsert: UserSettingsUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: UserSettingsWhereUniqueInput
}

input UserSettingsUpdateWithoutUserDataInput {
  darkMode: Boolean
  autoAccept: Boolean
}

input UserSettingsUpsertWithoutUserInput {
  update: UserSettingsUpdateWithoutUserDataInput!
  create: UserSettingsCreateWithoutUserInput!
}

input UserSettingsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  darkMode: Boolean
  darkMode_not: Boolean
  autoAccept: Boolean
  autoAccept_not: Boolean
  AND: [UserSettingsWhereInput!]
  OR: [UserSettingsWhereInput!]
  NOT: [UserSettingsWhereInput!]
}

input UserSettingsWhereUniqueInput {
  id: ID
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  userInfo: UserInfoUpdateOneWithoutUserInput
  decks: DeckUpdateManyWithoutAuthorInput
  votes: VoteUpdateManyWithoutAuthorInput
  userSettings: UserSettingsUpdateOneWithoutUserInput
  connections: ConnectionUpdateManyWithoutFriendInput
  inbox: MessageUpdateManyWithoutRecipientInput
  outbox: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
}

input UserUpdateOneRequiredWithoutConnectionsInput {
  create: UserCreateWithoutConnectionsInput
  update: UserUpdateWithoutConnectionsDataInput
  upsert: UserUpsertWithoutConnectionsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutDecksInput {
  create: UserCreateWithoutDecksInput
  update: UserUpdateWithoutDecksDataInput
  upsert: UserUpsertWithoutDecksInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutInboxInput {
  create: UserCreateWithoutInboxInput
  update: UserUpdateWithoutInboxDataInput
  upsert: UserUpsertWithoutInboxInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutOutboxInput {
  create: UserCreateWithoutOutboxInput
  update: UserUpdateWithoutOutboxDataInput
  upsert: UserUpsertWithoutOutboxInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutUserInfoInput {
  create: UserCreateWithoutUserInfoInput
  update: UserUpdateWithoutUserInfoDataInput
  upsert: UserUpsertWithoutUserInfoInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutUserSettingsInput {
  create: UserCreateWithoutUserSettingsInput
  update: UserUpdateWithoutUserSettingsDataInput
  upsert: UserUpsertWithoutUserSettingsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutConnectionsDataInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  userInfo: UserInfoUpdateOneWithoutUserInput
  decks: DeckUpdateManyWithoutAuthorInput
  votes: VoteUpdateManyWithoutAuthorInput
  userSettings: UserSettingsUpdateOneWithoutUserInput
  inbox: MessageUpdateManyWithoutRecipientInput
  outbox: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutDecksDataInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  userInfo: UserInfoUpdateOneWithoutUserInput
  votes: VoteUpdateManyWithoutAuthorInput
  userSettings: UserSettingsUpdateOneWithoutUserInput
  connections: ConnectionUpdateManyWithoutFriendInput
  inbox: MessageUpdateManyWithoutRecipientInput
  outbox: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutInboxDataInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  userInfo: UserInfoUpdateOneWithoutUserInput
  decks: DeckUpdateManyWithoutAuthorInput
  votes: VoteUpdateManyWithoutAuthorInput
  userSettings: UserSettingsUpdateOneWithoutUserInput
  connections: ConnectionUpdateManyWithoutFriendInput
  outbox: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutOutboxDataInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  userInfo: UserInfoUpdateOneWithoutUserInput
  decks: DeckUpdateManyWithoutAuthorInput
  votes: VoteUpdateManyWithoutAuthorInput
  userSettings: UserSettingsUpdateOneWithoutUserInput
  connections: ConnectionUpdateManyWithoutFriendInput
  inbox: MessageUpdateManyWithoutRecipientInput
}

input UserUpdateWithoutUserInfoDataInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  decks: DeckUpdateManyWithoutAuthorInput
  votes: VoteUpdateManyWithoutAuthorInput
  userSettings: UserSettingsUpdateOneWithoutUserInput
  connections: ConnectionUpdateManyWithoutFriendInput
  inbox: MessageUpdateManyWithoutRecipientInput
  outbox: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutUserSettingsDataInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  userInfo: UserInfoUpdateOneWithoutUserInput
  decks: DeckUpdateManyWithoutAuthorInput
  votes: VoteUpdateManyWithoutAuthorInput
  connections: ConnectionUpdateManyWithoutFriendInput
  inbox: MessageUpdateManyWithoutRecipientInput
  outbox: MessageUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutVotesDataInput {
  name: String
  email: String
  password: String
  isAdmin: Boolean
  userInfo: UserInfoUpdateOneWithoutUserInput
  decks: DeckUpdateManyWithoutAuthorInput
  userSettings: UserSettingsUpdateOneWithoutUserInput
  connections: ConnectionUpdateManyWithoutFriendInput
  inbox: MessageUpdateManyWithoutRecipientInput
  outbox: MessageUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutConnectionsInput {
  update: UserUpdateWithoutConnectionsDataInput!
  create: UserCreateWithoutConnectionsInput!
}

input UserUpsertWithoutDecksInput {
  update: UserUpdateWithoutDecksDataInput!
  create: UserCreateWithoutDecksInput!
}

input UserUpsertWithoutInboxInput {
  update: UserUpdateWithoutInboxDataInput!
  create: UserCreateWithoutInboxInput!
}

input UserUpsertWithoutOutboxInput {
  update: UserUpdateWithoutOutboxDataInput!
  create: UserCreateWithoutOutboxInput!
}

input UserUpsertWithoutUserInfoInput {
  update: UserUpdateWithoutUserInfoDataInput!
  create: UserCreateWithoutUserInfoInput!
}

input UserUpsertWithoutUserSettingsInput {
  update: UserUpdateWithoutUserSettingsDataInput!
  create: UserCreateWithoutUserSettingsInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  isAdmin: Boolean
  isAdmin_not: Boolean
  userInfo: UserInfoWhereInput
  decks_every: DeckWhereInput
  decks_some: DeckWhereInput
  decks_none: DeckWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  userSettings: UserSettingsWhereInput
  connections_every: ConnectionWhereInput
  connections_some: ConnectionWhereInput
  connections_none: ConnectionWhereInput
  inbox_every: MessageWhereInput
  inbox_some: MessageWhereInput
  inbox_none: MessageWhereInput
  outbox_every: MessageWhereInput
  outbox_some: MessageWhereInput
  outbox_none: MessageWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  deck: Deck!
  author: User!
  quality: Boolean!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  deck: DeckCreateOneInput!
  author: UserCreateOneWithoutVotesInput!
  quality: Boolean!
}

input VoteCreateManyWithoutAuthorInput {
  create: [VoteCreateWithoutAuthorInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutAuthorInput {
  deck: DeckCreateOneInput!
  quality: Boolean!
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  quality_ASC
  quality_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
  quality: Boolean!
}

input VoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quality: Boolean
  quality_not: Boolean
  AND: [VoteScalarWhereInput!]
  OR: [VoteScalarWhereInput!]
  NOT: [VoteScalarWhereInput!]
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  deck: DeckUpdateOneRequiredInput
  author: UserUpdateOneRequiredWithoutVotesInput
  quality: Boolean
}

input VoteUpdateManyDataInput {
  quality: Boolean
}

input VoteUpdateManyMutationInput {
  quality: Boolean
}

input VoteUpdateManyWithoutAuthorInput {
  create: [VoteCreateWithoutAuthorInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  set: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [VoteScalarWhereInput!]
  updateMany: [VoteUpdateManyWithWhereNestedInput!]
}

input VoteUpdateManyWithWhereNestedInput {
  where: VoteScalarWhereInput!
  data: VoteUpdateManyDataInput!
}

input VoteUpdateWithoutAuthorDataInput {
  deck: DeckUpdateOneRequiredInput
  quality: Boolean
}

input VoteUpdateWithWhereUniqueWithoutAuthorInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutAuthorDataInput!
}

input VoteUpsertWithWhereUniqueWithoutAuthorInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutAuthorDataInput!
  create: VoteCreateWithoutAuthorInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  deck: DeckWhereInput
  author: UserWhereInput
  quality: Boolean
  quality_not: Boolean
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`
      }
    