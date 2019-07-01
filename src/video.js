const video = {
  play() {
    return true;
  },
  play2() {
      return this.play();
  }
};

module.exports = video;
