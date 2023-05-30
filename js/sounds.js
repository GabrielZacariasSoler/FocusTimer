export function Sound({ forestCardSound, rainCardSound, coffeCardSound, firePlaceCardSound }) {
  function playSounds(sound, card) {
    if (card.classList.contains("press")) {
      stopAllSounds();
      sound.play();
      sound.loop = true;
    } else {
      stopAllSounds();
    }
  }

  function stopAllSounds() {
    forestCardSound.pause();
    rainCardSound.pause();
    coffeCardSound.pause();
    firePlaceCardSound.pause();
  }
  return { playSounds, stopAllSounds };
}
