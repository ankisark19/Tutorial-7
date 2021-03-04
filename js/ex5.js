//Create and run a function to add a link to the College of Busines between the CSULB link and the IS link.

function cobLinks(){
  const linkElement = document.createElement("li");
  linkElement.id = "coblink"; // Define element ID
  linkElement.innerHTML = "<a href='https://www.csulb.edu/college-of-business'>College Of Business</a>"; // Define its text content
  document.getElementById("links").insertBefore(linkElement, document.getElementById("csulb2"));
}

//Call Function
cobLinks();