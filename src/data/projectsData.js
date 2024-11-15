const importImages = (r) => r.keys().map(r);
const images = importImages(
  require.context("../img/projects", false, /\.(png|jpe?g|svg)$/)
);

let projectsData = [
  {
    id: 1,
    link: "https://jazzy-treacle-e0ad5b.netlify.app/",
    src: images[1],
    info: "Event Timer",
    about:
      "This customer wanted a fun event timer on their website: a red square that spins around and shows the date when you hover over it. They also want to be able to adjust the dates.",
  },
  {
    id: 2,
    link: "https://benjamin-cube.netlify.app/",
    src: images[2],
    info: "Cube Project",
    about:
      "This cube project was developed for a client seeking a dynamic slideshow to showcase their impactful programs. It involved complex CSS and presented a significant challenge.",
  },
  {
    id: 3,
    link: "https://codes-tip.netlify.app/",
    src: images[5],
    info: "Tip App",
    about:
      "app for splitting bills and tips! Whenever I have a free moment and a fun idea, I dive in and make it happen. Now you can easily share the tab and add that extra tip with ease.",
  },
  {
    id: 4,
    link: "https://supermproject.netlify.app/index.html",
    src: images[4],
    info: "Super-M Project",
    about:
      "Implemented dom-manipulation for this project, I created a cart feature that will be adding the number of products along with the final price of all the items.",
  },
  {
    id: 5,
    link: "https://guess-flag-game.netlify.app/",
    src: images[3],
    info: "Guess Game",
    about:
      "This was a small project I decided to make also practice some figma, and wireframing ideas. I still working on it, and I will be adding more features soon.",
  },
  {
    id: 6,
    link: "https://oop-todo-app.netlify.app/",
    src: images[6],
    info: "OOP Todo app",
    about:
      "I built this simple todo-app using object-oriented programming with classes and capsulation, I have to admit object oriented programming is way more organized.",
  },
  {
    id: 7,
    link: "https://punch-in-app.netlify.app/",
    src: images[0],
    info: "Clock in app",
    about:
      "Again I used object-oriented programming for this app, really challenging, and learned a lot about classes, I will be soon adding a backend feature to save all the usernames and worked.",
  },
];

export default projectsData;
