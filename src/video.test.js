const video = require("./video");

test("plays video", () => {
  const spy = jest.spyOn(video, "playOne");
  const isPlaying1 = video.playOne();
  const isPlaying2 = video.playTwo();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying1).toBe(true);
  expect(isPlaying2).toBe(true);

  spy.mockRestore();
});

test("plays video, mock implementation", () => {
  const spy = jest.spyOn(video, "playOne").mockImplementation(() => false);
  const isPlaying1 = video.playOne();
  const isPlaying2 = video.playTwo();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying1).toBe(false);
  expect(isPlaying2).toBe(false);

  spy.mockRestore();
});
