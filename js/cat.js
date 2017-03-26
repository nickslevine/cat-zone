let p = document.getElementById("catpic");
let pics = 1
document.getElementById("catpic").addEventListener("click", function(){
  if (pics == 7) {pics = 1}
  else {pics += 1};
  let file = `img/${pics}.jpg`
  document.getElementById("catpic").setAttribute("src", file);
})