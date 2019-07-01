const video = require("./video");

console.log(video.play2());

test("plays video", () => {
  const spy = jest.spyOn(video, "play");
  const isPlaying = video.play();
  const isPlaying2 = video.play2();
  console.log(isPlaying2);

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  spy.mockRestore();
});

test("plays video, mock implementation", () => {
  const spy = jest.spyOn(video, "play").mockImplementation(() => false);
  const isPlaying = video.play();

  const isPlaying2 = video.play2();
  console.log(isPlaying2);

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(false);

  spy.mockRestore();
});
