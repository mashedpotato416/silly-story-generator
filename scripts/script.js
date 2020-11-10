function getRandomNumber() {
  return Math.floor(Math.random()*3)
}

function getRandomWord(listOfWords) {
  return listOfWords[getRandomNumber()]
}

function getStory() {
  let output = document.querySelector('.story')
  let customName = document.querySelector('#customname').value 

  let whoUser = 'Bob'
  if (customName !== "") {
    whoUser = customName
  }
  let whoPhrase = getRandomWord(['Willy the Goblin','Big Daddy','Father Christmas'])
  let wherePhrase = getRandomWord(['the soup kitchen','Disneyland','the White House'])
  let whatPhrase = getRandomWord(['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'])

  output.textContent = `It was 94 fahrenheit outside, so ${ whoPhrase } went for a walk. 
  When they got to ${ wherePhrase }, they stared in horror for a few moments,
  then ${ whatPhrase }. ${ whoUser } saw the whole thing, but was not surprised
    — ${ whoPhrase } weighs 300 pounds, and it was a hot day.`

  output.style.visibility = 'visible'
}

randomButton = document.querySelector('.randomize')
randomButton.addEventListener('click',getStory)








