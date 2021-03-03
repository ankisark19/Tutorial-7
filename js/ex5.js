
function add_link(){
  const link=document.createElement("Li");
  link.innerHTML="<a href='https://www.csulb.edu/college-of-business'>College of Business</a>"
  const link_list=document.getElementById("links");
  link_list.insertBefore(link,link_list.childNodes[2]);
}

add_link();