export function Sound() {
  const forestCard = new Audio("./sounds/forest.wav");
  const rainCard = new Audio("./sounds/rain.wav");
  const coffeCard = new Audio("./sounds/coffe.wav");
  const firePlaceCard = new Audio("./sounds/fireplace.wav");
  let isPlaying = { forest: false, rainSound: false, coffeSound: false, firePlaceSound: false };
  console.log();

  function playForestSounds() {
    if (isPlaying.forest) {
      forestCard.pause();

      isPlaying.forest = false;
    } else {
      forestCard.play();
      forestCard.loop = true;

      isPlaying.forest = true;
    }
  }

  function playRainSounds() {
    if (isPlaying) {
      rainCard.pause();

      isPlaying = false;
    } else {
      rainCard.play();
      rainCard.loop = true;

      isPlaying = true;
    }
  }

  function playCoffeSounds() {
    if (isPlaying) {
      coffeCard.pause();

      isPlaying = false;
    } else {
      coffeCard.play();
      coffeCard.loop = true;

      isPlaying = true;
    }
  }

  function playfirePlaceSounds() {
    if (isPlaying) {
      firePlaceCard.pause();

      isPlaying = false;
    } else {
      firePlaceCard.play();
      firePlaceCard.loop = true;

      isPlaying = true;
    }
  }

  return { forestCard, playForestSounds, playCoffeSounds, playfirePlaceSounds, playRainSounds };
}
