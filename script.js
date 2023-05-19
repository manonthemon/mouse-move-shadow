const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100; //How far should the shadow go == 100px


function shadow(e) {
  let { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e; //coursor position

  //This fixes the problem with hovering over children which affects the reading of X and Y.

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = (x / width * walk) - (walk / 2)
  const yWalk = (y / height * walk) - (walk / 2)

  console.log(xWalk, yWalk)
}

hero.addEventListener("mousemove", shadow);
