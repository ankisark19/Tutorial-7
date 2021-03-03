//Complete code for the following function
//Display the text only (no HTML) for 400 level courses

const displayText400 = () => {
  const displayElements = document.getElementsByClassName("400level");
  for (const displayText of displayElements){
      console.log(displayText.textContent);
  }
}

// Call function
displayText400();