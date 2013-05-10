(function (exports) {
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
    return topic.sort(randomishSort).shift()
  }

  function instabio() {
    var _descriptor = descriptor.slice(0)
    var _reallyCoolThing = reallyCoolThing.slice(0)
    var _secondaryDescriptor = secondaryDescriptor.slice(0)
    var _whoIAm = whoIAm.slice(0)
    var _additionally = additionally.concat(whoIAm, cuteQuotes)

    return [
      [_descriptor, _reallyCoolThing, _secondaryDescriptor],
      [_descriptor, _whoIAm],
      [_descriptor, _reallyCoolThing, _secondaryDescriptor],
      [_additionally]
    ]
    .map(function (sentence) {
      return capitalize(sentence.map(getrand).join(' '))
    })
    .sort(randomishSort)
    .join('. ')
  }

  if (typeof module !== 'undefined') {
    module.exports = instabio
  } else {
    exports.instabio = instabio
  }
}(this));
