import batman from "assets/images/movie-posters/batman.png";
import blackPanther from "assets/images/movie-posters/black-panther.jpg";
import blonde from "assets/images/movie-posters/blonde.png";
import bulletTrain from "assets/images/movie-posters/bullet-train.png";
import flash from "assets/images/movie-posters/flash.png";
import godfather from "assets/images/movie-posters/godfather.jpg";
import grayManImg from "assets/images/movie-posters/gray-man.png";
import minions from "assets/images/movie-posters/minions.png";
import purpleHearts from "assets/images/movie-posters/purple-hearts.jpg";
import spiderMan from "assets/images/movie-posters/spider-man.png";
import thor from "assets/images/movie-posters/thor.png";
import topGun from "assets/images/movie-posters/top-gun.png";

export const MOVIES = [
  {
    id: 1,
    title: "The Gray Man",
    imdbId: "tt1649418",
    imageUrl: grayManImg,
    category: "action"
  },
  {
    id: 2,
    title: "Blonde",
    imdbId: "tt1655389",
    imageUrl: blonde,
    category: "drama"
  },
  {
    id: 3,
    title: "Minions: The Origin of Gru",
    imdbId: "tt5113044",
    imageUrl: minions,
    category: "animation"
  },
  {
    id: 4,
    title: "Top Gun: Maveric",
    imdbId: "tt1745960",
    imageUrl: topGun,
    category: "action"
  },
  {
    id: 5,
    title: "The Bullet Train",
    imdbId: "tt12593682",
    imageUrl: bulletTrain,
    category: "action"
  },
  {
    id: 6,
    title: "Thor: Love and Thunder",
    imdbId: "tt10648342",
    imageUrl: thor,
    category: "action"
  },
  {
    id: 7,
    title: "Purple Hearts",
    imdbId: "tt4614584",
    imageUrl: purpleHearts,
    category: "drama"
  },
  {
    id: 8,
    title: "Black Panther: Wakanda Forever",
    imdbId: "tt9114286",
    imageUrl: blackPanther,
    category: "drama"
  },
  {
    id: 9,
    title: "The Godfather",
    imdbId: "tt0068646",
    imageUrl: godfather,
    category: "drama"
  },
  // {
  //   id: 10,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 11,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 12,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 13,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 14,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 15,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 16,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 17,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  // {
  //   id: 18,
  //   title: "",
  //   imdbId: "",
  //   imageUrl:
  // },
  {
    id: 19,
    title: "The Batman",
    imdbId: "tt1877830",
    imageUrl: batman,
    category: "action"
  },
  {
    id: 20,
    title: "Spider Man",
    imdbId: "tt10872600",
    imageUrl: spiderMan,
    category: "action"
  },
  {
    id: 21,
    title: "Flash",
    imdbId: "tt3107288",
    imageUrl: flash,
    category: "action"
  }
];

export const QUESTIONS = [
  {
    id: 1,
    text: "Choose one of the three movies",
    options: [1, 2, 3]
  },
  {
    id: 2,
    text: "Which one do you like the most?",
    // options: [4, 5, 6, 7, 8, 9, 10, 11, 12]
    options: [4, 5, 6, 7, 8, 9]
  },
  {
    id: 3,
    text: "Which one do you want to watch now?",
    // options: [13, 14, 15, 16, 17, 18, 19, 20, 21]
    options: [19, 20, 21]
  }
];
