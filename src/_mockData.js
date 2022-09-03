import batman from "assets/images/movie-posters/batman.png";
import blackPanther from "assets/images/movie-posters/black-panther.jpg";
import blonde from "assets/images/movie-posters/blonde.png";
import bulletTrain from "assets/images/movie-posters/bullet-train.png";
import dragonBall from "assets/images/movie-posters/dragon-ball.jpg";
import elvis from "assets/images/movie-posters/elvis.jpg";
import flash from "assets/images/movie-posters/flash.png";
import godfather from "assets/images/movie-posters/godfather.jpg";
import grayManImg from "assets/images/movie-posters/gray-man.png";
import lightyear from "assets/images/movie-posters/lightyear.jpg";
import luck from "assets/images/movie-posters/luck.jpg";
import minions from "assets/images/movie-posters/minions.png";
import prey from "assets/images/movie-posters/prey.jpg";
import purpleHearts from "assets/images/movie-posters/purple-hearts.jpg";
import sandman from "assets/images/movie-posters/sandman.jpg";
import seaBest from "assets/images/movie-posters/sea-beast.jpg";
import spiderMan from "assets/images/movie-posters/spider-man.png";
import superPets from "assets/images/movie-posters/superpets.jpg";
import thor from "assets/images/movie-posters/thor.png";
import topGun from "assets/images/movie-posters/top-gun.png";
import turningRed from "assets/images/movie-posters/turningRed.jpg";

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
  {
    id: 10,
    title: "Dragon Ball Super: Super Hero",
    imdbId: "tt14614892",
    imageUrl: dragonBall,
    category: "animation"
  },
  {
    id: 11,
    title: "DC League of Super-Pets",
    imdbId: "tt8912936",
    imageUrl: superPets,
    category: "animation"
  },
  {
    id: 12,
    title: "Lightyear",
    imdbId: "tt10298810",
    imageUrl: lightyear,
    category: "animation"
  },
  {
    id: 13,
    title: "Luck",
    imdbId: "tt7214954",
    imageUrl: luck,
    category: "animation"
  },
  {
    id: 14,
    title: "The Sea Beast",
    imdbId: "tt9288046",
    imageUrl: seaBest,
    category: "animation"
  },
  {
    id: 15,
    title: "Turning Red",
    imdbId: "tt8097030",
    imageUrl: turningRed,
    category: "animation"
  },
  {
    id: 16,
    title: "Prey",
    imdbId: "tt11866324",
    imageUrl: prey,
    category: "drama"
  },
  {
    id: 17,
    title: "Elvis",
    imdbId: "tt3704428",
    imageUrl: elvis,
    category: "drama"
  },
  {
    id: 18,
    title: "The Sandman",
    imdbId: "tt1751634",
    imageUrl: sandman,
    category: "drama"
  },
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
    options: [4, 5, 6, 7, 8, 9, 10, 11, 12]
  },
  {
    id: 3,
    text: "Which one do you want to watch now?",
    options: [13, 14, 15, 16, 17, 18, 19, 20, 21]
  }
];
