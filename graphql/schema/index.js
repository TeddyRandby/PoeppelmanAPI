const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  input GameQuery {

    RecTeam_Score: String!

    PullTeam_Score: String!

    RecTeam_RecToStartGame: String!

    SecondHalf: String!

    Time_StartofSim: String!

    CapOn: String!

    OLE_Rate: String!
  }

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

    SecondHalf: String!

    Time_StartofSim: String!

    Time_UntilCap: String!

    CapOn: String!

    SimulationCount: String!

    OLE_Rate: String!

  }

  type rootQuery {
      poeppelman( gameQuery: GameQuery): [GameFrame!]!
      test: String!
  }

  schema {
    query: rootQuery
  }
`);
