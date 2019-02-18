const {buildSchema} = require('graphql');

module.exports = buildSchema(`

  type GameFrame {

    id: ID!

    MatchID: String!

    RecTeam_Score: String!

    PullTeam_Score: String!

    RecTeam_Win_Prob: String!

    PullTeam_Win_Prob: String!

    RecTeam_Avg_Score: String!

    PullTeam_Avg_Score: String!

    RecTeam_RecToStartGame: String!

    firstHalf: String!

    Time_StartofSim: String!

    Time_UntilCap: String!

    CapOn: String!

    SimulationCount: String!

    OLE_Rate: String!

  }

  type rootQuery {
      gameFrames( MatchID: String): [GameFrame!]!
      test: String!
  }

  schema {
    query: rootQuery
  }
`);
