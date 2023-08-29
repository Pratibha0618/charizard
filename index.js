let movies = [
  {
    name: "loki",
    des:
      "Loki is captured by the Avengers and brought back to Asgard by Thor to be imprisoned for his crimes on Midgard (Earth) using the Tesseract.",
    image: "images/slider.png"
  },
  {
    name: "the falcon and the winter soldier",
    des:
      "After retelling his tragic past to Wilson, Bradley affirms to him that no self-respecting black man would ever want to become Captain America.",
    image: "images/slider 2.png"
  },
  {
    name: "wanda vision",
    des:
      "It follows Wanda Maximoff and Vision as they live an idyllic suburban life in the town of Westview, New Jersey, until their reality starts moving through different decades of sitcom homages and television tropes.",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    des:
      "The film follows Raya, a warrior princess who must find the fabled last dragon in order to save her divided home world from a ravenous plague.",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    des:
      "In the summer circa 1959, timid sea monster child Luca Paguro herds goatfish off the coast of the Italian town of Portorosso. His parents forbid him from approaching the surface, fearing that he might be hunted by humans.",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //to track current slide
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  //create DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classnames
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 5; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
