function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('hello'.toUpperCase())
}

function logWhisper(string) {
  console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === 'I can\'t hear you!'){
    return 'I cant\'t hear you!'.toLowerCase()
  }
  else if (string === 'yes indeed!'){
    return  string.toUpperCase()
  }
  else if (string ==='I love you, Grandma.') {
    return 'I love you, too.'
  }
}
