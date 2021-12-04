const myEmojis = ["🐱", "🍃", "🌺", "🌳"]

//Grab the emojiContainer div and store it in a variable
const emojiContainer = document.getElementById("emojiContainer")


//Loop through the myEmojis array and render the emojis as <span> tags in the emojisContainer <div> using createElement(), textContent, and append()
for (let i=0; i<myEmojis.length; i++) {
  const emoji = document.createElement('span')
  emoji.textContent = myEmojis[i]
  emojiContainer.append(emoji)
}