(function () {
  var whoIAm = [
    'reader'
  , 'writer'
  , 'smoker'
  , 'swimmer'
  , 'listener'
  , 'creator'
  , 'explorer'
  , 'runner'
  , 'thinker'
  , 'communicator'
  , 'entrepeneur'
  ]

  var descriptor = [
    'avid'
  , 'extreme'
  , 'incurable'
  , 'evil'
  , 'hardcore'
  , 'infuriatingly'
  , 'humble'
  , 'lifelong'
  , 'friendly'
  , 'general'
  , 'total'
  , 'devoted'
  , 'typical'
  , 'award-winning'
  , 'certified'
  , 'freelance'
  ]

  var additionally = [
    'introvert'
  , 'extrovert'
  , 'webaholic'
  , 'student'
  , 'organizer'
  ]

  var reallyCoolThing = [
  , 'beer'
  , 'coffee'
  , 'bacon'
  , 'web'
  , 'zombie'
  , 'ninja'
  , 'pirate'
  , 'anime'
  , 'music'
  , 'TV'
  , 'internet'
  , 'pop culture'
  , 'alcohol'
  , 'food'
  , 'travel'
  ]

  var secondaryDescriptor = [
    'nerd'
  , 'junkie'
  , 'maven'
  , 'dork'
  , 'geek'
  , 'enthusiast'
  , 'lover'
  , 'fanatic'
  , 'expert'
  , 'guru'
  , 'wizard'
  , 'scholar'
  , 'evangelist'
  , 'buff'
  , 'fan'
  ]

  var cuteQuotes = [
    'unable to type with boxing gloves on'
  ]

  var randomishSort = function (a, b) { return Math.random() - 0.5 }

  var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function getrand(topic) {
    return topic.sort(randomishSort)[0]
  }

  function instabio() {
    return [
      [descriptor, reallyCoolThing, secondaryDescriptor],
      [descriptor, whoIAm],
      [descriptor, reallyCoolThing, secondaryDescriptor],
      [additionally.concat(whoIAm, cuteQuotes)]
    ]
    .map(function (sentence) {
      return capitalize(sentence.map(getrand).join(' '))
    })
    .sort(randomishSort)
    .join('. ')
  }

  window.instabio = instabio
}());
