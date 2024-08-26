const allKeys = document.querySelectorAll('.key')

const soundsObject = {
  'A': '/sounds/boom.wav',
  'S': '/sounds/clap.wav',
  'D': '/sounds/hihat.wav',
  'F': '/sounds/kick.wav',
  'G': '/sounds/openhat.wav',
  'H': '/sounds/ride.wav',
  'J': '/sounds/snare.wav',
  'K': '/sounds/tink.wav',
  'L': '/sounds/tom.wav'
}

allKeys.forEach(element => {
  element.addEventListener('click', (evt) => {
    const keyValue = evt.currentTarget.dataset.key
    
    if (soundsObject[keyValue]) {
      const audio = new Audio(soundsObject[keyValue])
      audio.play()
    }
  })
})