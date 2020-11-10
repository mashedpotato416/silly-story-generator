// Get a random number between 0-2
function getRandomNumber() {
  return Math.floor(Math.random()*3)
}

// Get random word from listOfWords
function getRandomWord(listOfWords) {
  return listOfWords[getRandomNumber()]
}

// Creates a random story
function getStory() {

  // Initialize variables and get data from html
  let output = document.querySelector('.story')
  let customName = document.querySelector('#customname').value
  let ukButtonStatus = document.querySelector('#uk').checked
  let whoUser
  let valuesPhrase
  let whoPhrase = getRandomWord(['Willy the Goblin','Big Daddy','Father Christmas'])
  let wherePhrase = getRandomWord(['the soup kitchen','Disneyland','the White House'])
  let whatPhrase = getRandomWord(['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'])

  // Checks if user entered a custom name
  if (customName !== "") {
    whoUser = customName
  } else {
    whoUser = 'Bob'
  }

  // Checks if which button is checked
  if (ukButtonStatus === false) {  
    valuesPhrase = ['94 fahrenheit','300 pounds']
  } else {
    valuesPhrase = ['34 centigrade','21 stone']
  }

  // Create output based on user input and default values
  output.textContent = `It was ${ valuesPhrase[0] } outside, so ${ whoPhrase } went for a walk. 
  When they got to ${ wherePhrase }, they stared in horror for a few moments,
  then ${ whatPhrase }. ${ whoUser } saw the whole thing, but was not surprised
    — ${ whoPhrase } weighs ${ valuesPhrase[1] }, and it was a hot day.`

  // Change visibility
  output.style.visibility = 'visible'
}

// Event listener for user click on "Generate random story" button
randomButton = document.querySelector('.randomize')
randomButton.addEventListener('click',getStory)








