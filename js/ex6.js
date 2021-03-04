//Mini Dictionary Program

//Array of words
const words = [{
  term: "Procrastination",
  definition: "Avoidance of doing a task that needs to be accomplished"
}, {
  term: "Tautology",
  definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
  term: "Oxymoron",
  definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

// Display dictionary

const dictElement = document.createElement("dl");

for (i of words){
//Dictionary Term
const dictTerm = document.createElement("dt");
dictTerm.textContent = i.term;

//Adding term
dictElement.appendChild(dictTerm).style.fontWeight="bold";

// Dictionary Meaning
const dictMeaning = document.createElement("dm");
dictMeaning.textContent = i.definition;

//Adding Definition
dictElement.appendChild(dictMeaning);
}

document.getElementById("content").appendChild(dictElement);