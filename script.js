const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 20; //How far should the shadow go == 100px


function shadow(e) {
  let { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e; //coursor position

  //This fixes the problem with hovering over children which affects the reading of X and Y.
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round(x / width * walk) - (walk / 2) //Math round round down the numbers
  const yWalk = Math.round(y / height * walk) - (walk / 2)

text.style.textShadow = `
${xWalk}px ${yWalk}px rgba(255,0,255,0.7),
${xWalk * -1}px ${yWalk}px rgba(0, 255, 255,0.7),
${yWalk}px ${xWalk * -1}px rgba(0, 255, 0,0.7),
${yWalk * -1}px ${xWalk}px rgba(0, 0, 255,0.7)


`
}

hero.addEventListener("mousemove", shadow);
