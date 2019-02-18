const GameFrame = require ('../models/gameFrame');

module.exports = {
  gameFrames: async () => {
    try {
      const frames = await GameFrame.find({MatchID: '0-7-85-1'});
      console.log(frames);
      return frames.map( frame => {
        return { ...frame._doc }
      });
    } catch (err) {
      throw err;
    }
  }
}
