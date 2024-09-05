const allKeys = document.querySelectorAll('.key')

const soundsObject = {
  'a': '/sounds/boom.wav',
  's': '/sounds/clap.wav',
  'd': '/sounds/hihat.wav',
  'f': '/sounds/kick.wav',
  'g': '/sounds/openhat.wav',
  'h': '/sounds/ride.wav',
  'j': '/sounds/snare.wav',
  'k': '/sounds/tink.wav',
  'l': '/sounds/tom.wav'
}


function playKey(key) {
  if (soundsObject[key]) {
    const audio = new Audio(soundsObject[key])
    audio.currentTime = 0
    audio.play()
  }
}

document.addEventListener('keydown', (evt) => {
  let keyName = evt.key
  playKey(keyName)
})

allKeys.forEach(element => {
  element.addEventListener('click', (evt) => {
    const keyValue = evt.currentTarget.dataset.key
    playKey(keyValue)
  })
})
