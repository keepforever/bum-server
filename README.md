

## To redeploy
```sh
now --dotenv .env
```
### In order to query relational data (i.e. inbox) given:

```graphql
type User {
  id: ID! @unique
  name: String!
  inbox: [Message!]! @relation(name: "RecievedMessages" , onDelete: SET_NULL)
}

type Message {
  id: ID! @unique
  author: User! @relation(name: "WrittenMessages", onDelete: SET_NULL)
  recipient: User! @relation(name: "RecievedMessages" , onDelete: SET_NULL)
  text: String!
}
```
### h
```js
const meUser = await ctx.prisma.user({ id })
const myInbox = await ctx.prisma.user({ id }).inbox();
```
### the `.inbox()` call returns an array of Message objects which can then be appended to the User object before returning
```js
meUser.inbox = myInbox;

return user
```

# Basic prisma-client boiler

### fetch single user
```js
const user = await prisma
  .user({ id: '__USER_ID__' })
```
### Filter User List
```js
const usersCalledAlice = await prisma
  .users({
    where: {
      name: 'Alice'
    }
  })
```
### update user's name
```js
const updatedUser = await prisma
 .updateUser({
   where: { id: '__USER_ID__' },
   data: { name: 'Bob' }
 })
```
### deleteUser
```js
const deletedUser = await prisma
 .deleteUser({ id: '__USER_ID__' })
```

# Change Prisma Datamodel

### 1. edit datamodel.prisma
### 2. run `prisma deploy`
### 3. run `prisma generate`

### note, because we added:
```yml
hooks:
  post-deploy:
    - prisma generate
```
### to the prisma.yml file, the prisma client should be regenerated after each deploy.
