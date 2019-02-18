const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameFrameSchema = new Schema({
  matchID: {
    type: String,
    required: true
  },
  recTeam_Score: {
    type: String,
    required: true
  },
  pullTeam_Score: {
    type: String,
    required: true
  },
  recTeam_Win_Prob: {
    type: String,
    required: true
  },
  pullTeam_Win_Prob: {
    type: String,
    required: true
  },
  recTeam_Avg_Score: {
    type: String,
    required: true
  },
  pullTeam_Avg_Score: {
    type: String,
    required: true
  },
  recTeam_Rec_To_Start_Game: {
    type: String,
    required: true
  },
  firstHalf: {
    type: String,
    required: true
  },
  time_StartOfSim: {
    type: String,
    required: true
  },
  time_UntilCap: {
    type: String,
    required: true
  },
  capOn: {
    type: String,
    required: true
  },
  simulation_Count: {
    type: String,
    required: true
  },
  ole_Rate: {
    type: String,
    required: true
  }

}, {
  collection: 'OLE70'
});

module.exports = mongoose.model('gameFrame', gameFrameSchema);
