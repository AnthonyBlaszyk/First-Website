const background = document.getElementById("background");

function createBackground() {
  let count = 1;
  for (let j = 0; j < window.innerHeight; j += 200) {
    if (count % 2 === 0) {
      for (let i = 0; i < window.innerWidth; i += 200) {
        background.innerHTML += `
        <span style="left: ${i - 25}px; top:${j}px;" class="circle" style=""></span>
      `;
      }
    } else {
      for (let i = 0; i < window.innerWidth; i += 200) {
        background.innerHTML += `
        <span style="left: ${i + 25}px; top:${j}px;" class="circle" style=""></span>
      `;
      }
    }
    count++;
  }
}

createBackground();

window.onresize = () => {
  background.innerHTML = "";
  createBackground();
};

const textBubble = document.querySelector(".textInsideBubble");
const nextButton = document.querySelector("#next");
const previousButton = document.querySelector("#previous");
let count = 1;

nextButton.addEventListener("click", () => {
  if (count === 3) {
    count = 1;
  } else {
    count++;
  }
  switch (count) {
    case 1:
      textBubble.innerHTML = `1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ut exercitationem temporibus,
      suscipit veniam nihil. Omnis, at. Ipsa illum deleniti voluptatibus dolorem totam sequi dolor, maxime
      molestias voluptates fugit.`;
      break;

    case 2:
      textBubble.innerHTML = `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ut exercitationem temporibus,
      suscipit veniam nihil. Omnis, at. Ipsa illum deleniti voluptatibus dolorem totam sequi dolor, maxime
      molestias voluptates fugit.`;
      break;

    case 3:
      textBubble.innerHTML = `3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ut exercitationem temporibus,
      suscipit veniam nihil. Omnis, at. Ipsa illum deleniti voluptatibus dolorem totam sequi dolor, maxime
      molestias voluptates fugit.`;
      break;
  }
});

previousButton.addEventListener("click", () => {
  if (count === 1) {
    count = 3;
  } else {
    count--;
  }
  switch (count) {
    case 1:
      textBubble.innerHTML = `1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ut exercitationem temporibus,
      suscipit veniam nihil. Omnis, at. Ipsa illum deleniti voluptatibus dolorem totam sequi dolor, maxime
      molestias voluptates fugit.`;
      break;

    case 2:
      textBubble.innerHTML = `2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ut exercitationem temporibus,
      suscipit veniam nihil. Omnis, at. Ipsa illum deleniti voluptatibus dolorem totam sequi dolor, maxime
      molestias voluptates fugit.`;
      break;

    case 3:
      textBubble.innerHTML = `3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo expedita ut exercitationem temporibus,
      suscipit veniam nihil. Omnis, at. Ipsa illum deleniti voluptatibus dolorem totam sequi dolor, maxime
      molestias voluptates fugit.`;
      break;
  }
});
