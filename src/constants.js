const path = require("path");

// TODO: Ideally should come from snapshot.js
const SNAPSHOT_VERSION = "0.1.3";
const SNAPSHOT_GRAPHQL_ENDPOINT = "https://hub.snapshot.org/graphql";

const AWS_REGION = "us-west-1";

const VOTES_DIR = path.join(__dirname, "votes", "cvx");
const PROPOSAL_ID = "QmTQBqsG7dW93xX8zBZnevMa1mbEmDHUx7QabAYyn6mFJi";

module.exports = {
  SNAPSHOT_VERSION,
  SNAPSHOT_GRAPHQL_ENDPOINT,
  AWS_REGION,
  VOTES_DIR,
  PROPOSAL_ID,
};
