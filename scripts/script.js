// Get a random number between 0-2
function getRandomNumber() {
  return Math.floor(Math.random()*3)
}

// Get random word from listOfWords
function getRandomWord(listOfWords) {
  return listOfWords[getRandomNumber()]
}

// Convert Farenheit to Centigrade
function convertToCentigrade(tempInFarenheit) {
  temp = (tempInFarenheit-32)*5/9
  return Math.round(temp)
}

// Convert Pounds to Stone
function convertToStone(weightInPounds) {
  weight = weightInPounds/14
  return Math.round(weight)
}

// Creates a random story
function getStory() {

  // Initialize variables and get data from html
  let output = document.querySelector('.story')
  let customName = document.querySelector('#customname').value
  let ukButtonStatus = document.querySelector('#uk').checked
  let whoUser
  let valuesPhrase
  let temp = 91
  let weight = 300
  let measure
  let whoPhrase = getRandomWord(['Willy the Goblin','Big Daddy','Father Christmas'])
  let wherePhrase = getRandomWord(['the soup kitchen','Disneyland','the White House'])
  let whatPhrase = getRandomWord(['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'])

  // Checks if user entered a custom name
  if (customName !== "") {
    whoUser = customName
  } else {
    whoUser = 'Bob'
  }

  // Checks if which button is checked and assign values to variables
  if (ukButtonStatus === false) {  
    measure = ['farenheit', 'pounds']
  } else {
    temp = convertToCentigrade(temp)
    weight = convertToStone(weight)
    measure = ['centigrade', 'stones']
  }

  valuesPhrase = [`${ temp } ${ measure[0] }`,`${ weight } ${ measure[1] }`]
  
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








