const myEmojis = ["🐱", "🍃", "🌺", "🌳"]

//Grab the emojiContainer div and store it in a variable
const emojiContainer = document.getElementById("emojiContainer")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

//Loop through the myEmojis array and render the emojis as <span> tags in the emojisContainer <div> using createElement(), textContent, and append()
// Render the updated myEmojis array by wrapping the code for rendering the emojis in a function and make sure it clears away old version of the array before it renders the updated one
function renderEmojis() {
  emojiContainer.innerHTML = ""
for (let i=0; i<myEmojis.length; i++) {
  const emoji = document.createElement('span')
  emoji.textContent = myEmojis[i]
  emojiContainer.append(emoji)
}
}

// Hook an event listener up with the button, and log out the input field's value when it's clicked
pushBtn.addEventListener("click", function() {
  // If the input value has data run code below. If it is empty, don't do anything.
  if (emojiInput.value) {
   // Push the emoji into the myEmoji's array
    myEmojis.push(emojiInput.value)
    //clear the input field
    emojiInput.value = ""
    renderEmojis()
  }
})

unshiftBtn.addEventListener("click", function() {
  if(emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
  }
})
//Make pop button remove an emoji from end
popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

//Make shift button remove emoji from beginning
shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})

