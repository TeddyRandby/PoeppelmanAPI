const GameFrame = require ('../models/gameFrame');

module.exports = {
  poeppelman: async args => {
    try {
      const game = args.gameQuery;
      var time = game.Time_StartofSim;
      time = parseInt(time)

      var i = 0;
      while ( i < time ) {
        i +=5;
      }
      var top = i;

      i = 85;
      while ( i > time ) {
        i -=5;
      }
      var bottom = i;

      const upperFramesArr = await GameFrame.find({
        RecTeam_Score: game.RecTeam_Score,
        PullTeam_Score: game.PullTeam_Score,
        RecTeam_RecToStartGame: game.RecTeam_RecToStartGame,
        SecondHalf: game.SecondHalf,
        Time_StartofSim: top.toString(),
        CapOn: game.CapOn,
        OLE_Rate: game.OLE_Rate
      });

      const lowerFramesArr = await GameFrame.find({
        RecTeam_Score: game.RecTeam_Score,
        PullTeam_Score: game.PullTeam_Score,
        RecTeam_RecToStartGame: game.RecTeam_RecToStartGame,
        SecondHalf: game.SecondHalf,
        Time_StartofSim: bottom.toString(),
        CapOn: game.CapOn,
        OLE_Rate: game.OLE_Rate

      });

      upperFrames = upperFramesArr[0]._doc;
      lowerFrames = lowerFramesArr[0]._doc;

      var upperWeight = top - time;
      var lowerWeight = time - bottom;

      upperWeight = upperWeight / 5;
      lowerWeight = lowerWeight / 5;

      if ( upperWeight == 0 && lowerWeight == 0 ) {
        lowerWeight = 1;
      }

      var avgPredRecScore = upperFrames.RecTeam_Avg_Score * upperWeight + lowerFrames.RecTeam_Avg_Score * lowerWeight;
      var avgPredPullScore = upperFrames.PullTeam_Avg_Score * upperWeight + lowerFrames.PullTeam_Avg_Score * lowerWeight;
      var avgPredRecWinProb = upperFrames.RecTeam_Win_Prob * upperWeight + lowerFrames.RecTeam_Win_Prob * lowerWeight;
      var avgPredPullWinProb = upperFrames.PullTeam_Win_Prob * upperWeight + lowerFrames.PullTeam_Win_Prob * lowerWeight;

      var avgFrame = {
        MatchID: game.MatchID,
        RecTeam_Score: game.RecTeam_Score,
        PullTeam_Score: game.PullTeam_Score,
        RecTeam_Win_Prob: avgPredRecWinProb.toString(),
        PullTeam_Win_Prob: avgPredPullWinProb.toString(),
        RecTeam_Avg_Score: avgPredRecScore.toString(),
        PullTeam_Avg_Score: avgPredPullScore.toString(),
        RecTeam_RecToStartGame: game.RecTeam_RecToStartGame,
        SecondHalf: game.SecondHalf,
        Time_StartofSim: game.Time_StartofSim,
        Time_UntilCap: game.Time_UntilCap,
        CapOn: game.CapOn,
        OLE_Rate: game.OLE_Rate
    }
      return [avgFrame];

    } catch (err) {
      throw err;
    }
  }
}
