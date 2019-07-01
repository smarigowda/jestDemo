const video = {
  playOne() {
    return true;
  },
  playTwo() {
      return this.playOne();
  }
};

module.exports = video;
