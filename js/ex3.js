// 3.	Create and run a function to change all paragraph elements to bold with a yellow background.  

const changeparaBgFont = () =>{
  const pElements = document.getElementsByTagName("p");
  for (const i of pElements){
      i.style.fontWeight = "bold";
      i.style.backgroundColor = "yellow";    
  }
}

//Call function
changeparaBgFont();