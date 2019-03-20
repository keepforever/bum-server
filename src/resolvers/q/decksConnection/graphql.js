
const deckConnectionTemplateString = `
  query($first: Int!, $after: String) {
    decksConnection(
      first: $first,
      after: $after
    ) {
      pageInfo{
        hasNextPage
        endCursor
      }
      edges{
        node{
          id
          deckName
        }
      }
      aggregate{
        count
      }
    }
  }
`;

module.exports = {
  deckConnectionTemplateString
}
