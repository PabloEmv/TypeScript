;(() => {
  // los enum son formas de manejar números
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }
  const currentAudio: AudioLevel = AudioLevel.medium
  console.log(currentAudio)
  console.log(AudioLevel)
})()
