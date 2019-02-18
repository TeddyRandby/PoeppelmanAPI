const GameFrame = require ('../models/gameFrame');

module.exports = {
  gameFrames: async args => {
    try {
      const frames = await GameFrame.find({MatchID: args.MatchID });
      return frames.map( frame => {
        return { ...frame._doc }
      });
    } catch (err) {
      throw err;
    }
  }
}
