function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}


function logShout(string) {
 console.log(shout(string))
}

function logWhisper(string) {
  console.log(whisper(string))
}


function sayHiToGrandma(string) {
  var result;
  
  if (string == 'hello') {
    result = "I can't hear you!"
  }
  
  if (string == 'HELLO') {
    result = "YES INDEED!"
  }
  
  if (string == 'I love you, Grandma.') {
    result = "I love you, too."
  }
  return result
}