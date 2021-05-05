//data
const movies = [
  {
    action: {
      TheDarkKnight: {
        key: "TheDarkKnight",
        name: "The Dark Knight ",
        date: "18 July 2008",
        type: "Action",
        rating: 9.1,
        Director: "Christopher ",
        img: "images/TheDarkKnight.jpg",
        time: "2h 32min ",
        story:
          "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        video: "https://youtube.com/embed/EXeTwQWrcwY",
      },

      TheMountainII: {
        key: "TheMountainII",
        name: "The Mountain II",
        date: "4 November 2016",
        type: "Action",
        rating: 8.8,
        Director: "Alper Caglar",
        img: "images/TheMountainII.jpg",
        time: "2h 15min ",
        story:
          "In a desolate war zone where screams of the innocent echo, seven Maroon Berets will dance with death on the very line between disaster and valor.",
        video: "https://www.youtube.com/embed/L3rDQhwBf0I",
      },

      Inception: {
        key: "Inception",
        name: "Inception",
        date: "16 July 2010",
        type: "Action",
        rating: 8.8,
        Director: "Christopher ",
        img: "images/Inception.jpg",
        time: "2h 28min",
        story:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        video: "https://www.youtube.com/embed/YoHD9XEInc0",
      },

      TheMatrix: {
        key: "TheMatrix",
        name: "The Matrix",
        date: "31 March 1999",
        type: "Action",
        Director: " Lana Wachowski",
        rating: 8.7,
        img: "images/TheMatrix.jpg",
        time: "2h 28min",
        story:
          "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        video: "https://www.youtube.com/embed/vKQi3bBA1y8",
      },
    },
  },

  {
    comedy: {
      Parasite: {
        key: "Parasite",
        name: "Parasite",
        date: "8 November 2019",
        type: "Comedy",
        rating: 8.6,
        Director: "Bong Joon Ho",
        img: "images/Parasite.jpg",
        time: " 2h 12min",
        story:
          "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        video: "https://www.youtube.com/embed/SEUXfv87Wpk",
      },

      LifeIsBeautiful: {
        key: "LifeIsBeautiful",
        name: "Life Is Beautiful",
        date: "20 December 1997",
        type: "Comedy",
        rating: 8.6,
        Director: "Roberto Benigni",
        img: "./images/LifeIsBeautifulLifeIsBeautiful.jpg",
        time: "1h 56min",
        story:
          "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
        video: "https://www.youtube.com/embed/pAYEQP8gx3w",
      },

      TheIntouchables: {
        key: "TheIntouchables",
        name: "The Intouchables",
        date: "2 November 2011",
        type: "Comedy",
        rating: 8.5,
        Director: "Olivier Nakache,",
        img: "./images/OlivierNakache.jpg",
        time: "1h 52min",
        story:
          "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
        video: "https://www.youtube.com/embed/34WIbmXkewU",
      },

      BacktotheFuture: {
        key: "BacktotheFuture",
        name: "Back to the Future",
        date: "3 July 1985",
        type: "Comedy",
        rating: 8.5,
        Director: "Robert Zemeckis",
        img: "./images/Backtotheutre.jpg",
        time: " 2h 12min",
        story:
          "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
        video: "https://www.youtube.com/embed/qvsgGtivCgs",
      },
    },
  },

  {
    drama: {
      TheGodfather: {
        key: "TheGodfather",
        name: "The Godfather",
        date: "24 March 1972",
        type: "Drama",
        rating: 9.2,
        Director: "Francis Ford",
        img: "images/TheGodfather.jpg",
        time: "2h 55min",
        story:
          "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        video: "https://www.youtube.com/embed/sY1S34973zA",
      },

      AngryMen: {
        key: "AngryMen",
        name: "12 Angry Men",
        date: "10 April 1957",
        type: "Drama",
        rating: 9.0,
        Director: "Sidney Lumet",
        img: "images/12AngryMen.jpg",
        time: " 1h 36min ",
        story:
          "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        video: "https://www.youtube.com/embed/_13J_9B5jEk",
      },

      Interstellar: {
        key: "Interstellar",
        name: "Interstellar",
        date: "7 November 2014",
        type: "Drama",
        rating: 8.6,
        Director: "Christopher",
        img: "images/Interstellar.jpg",
        time: "2h 49min",
        story:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        video: "https://www.youtube.com/embed/Lm8p5rlrSkY",
      },

      Hamilton: {
        key: "Hamilton",
        name: "Hamilton",
        date: "3 July 2020",
        type: "Drama",
        rating: 8.5,
        Director: "Thomas Kail",
        img: "images/Hamilton.jpg",
        time: "2h 49min",
        story:
          "The real life of one of America's foremost founding fathers and first Secretary of the Treasury, Alexander Hamilton. Captured live on Broadway from the Richard Rodgers Theater with the original Broadway cast.",
        video: "https://www.youtube.com/embed/67CaQADkPho",
      },
    },
  },

  {
    animation: {
      YourName: {
        key: "YourName",
        name: "Your Name.",
        date: "7 April 2017",
        type: "Animation",
        rating: 8.4,
        Director: "Makoto Shinkai",
        img: "images/YourName.jpg",
        time: "1h 46min",
        story:
          "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        video: "https://www.youtube.com/embed/xU47nhruN-Q",
      },

      coco: {
        key: "coco",
        name: "Coco",
        date: "22 November 2017",
        type: "Animation",
        rating: 8.4,
        Director: "Lee Unkrich",
        img: "images/Coco.jpg",
        time: "1h 45min",
        story:
          "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        video: "https://www.youtube.com/embed/5sSMRg1X1vg",
      },

      Soul: {
        key: "Soul",
        name: "Soul",
        date: "25 December 2020",
        type: "Animation",
        rating: 8.1,
        Director: "Pete Docter",
        img: "images/Soul.jpg",
        time: "1h 40min",
        story:
          "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
        video: "https://www.youtube.com/embed/xOsLIiBStEs",
      },

      Monsters: {
        key: "Monsters",
        name: "Monsters, Inc.",
        date: "2 November 2001",
        type: "Animation",
        rating: 8.1,
        Director: "Pete Docter",
        img: "images/Monsters.jpg",
        time: "1h 32min",
        story:
          "In order to power the city, monsters have to scare children so that they scream. However, the children are toxic to the monsters, and after a child gets through, two monsters realize things may not be what they think.",
        video: "https://www.youtube.com/embed/CGbgaHoapFM",
      },
    },
  },

  {
    horror: {
      Tumbbad: {
        key: "Tumbbad",
        name: "Tumbbad",
        date: "12 October 2018",
        type: "Horror",
        rating: 8.3,
        Director: "Rahi Anil Barve",
        img: "images/Tumbbad.jpg",
        time: "1h 44min ",
        story:
          "A mythological story about a goddess who created the entire universe. The plot revolves around the consequences when humans build a temple for her first-born.",
        video: "https://www.youtube.com/embed/sN75MPxgvX8",
      },

      TheExorcist: {
        key: "TheExorcist",
        name: "The Exorcist",
        date: "26 December 1973",
        type: "Horror",
        rating: 8.0,
        Director: "William Friedkin",
        img: "images/TheExorcist.jpg",
        time: "2h 2min",
        story:
          "When a 12-year-old girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
        video: "https://www.youtube.com/embed/gzFCk_cvmik",
      },

      GetOut: {
        key: "GetOut ",
        name: "Get Out ",
        date: "24 February 2017",
        type: "Horror",
        rating: 7.7,
        Director: "Jordan Peele",
        img: "images/GetOut.jpg",
        time: "1h 44min",
        story:
          "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        video: "https://www.youtube.com/embed/DzfpyUB60YY",
      },

      TraintoBusan: {
        key: "TraintoBusan",
        name: "Train to Busan",
        date: "20 July 2016",
        type: "Horror",
        rating: 7.6,
        Director: "Sang-ho Yeon",
        img: "images/TraintoBusan.jpg",
        time: "1h 32min",
        story:
          "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
        video: "https://www.youtube.com/embed/pyWuHv2-Abk",
      },
    },
  },

  {
    romance: {
      ForrestGump: {
        key: "ForrestGump",
        name: "Forrest Gump",
        date: "6 July 1994",
        type: "Romance",
        rating: 8.8,
        Director: "Robert Zemeckis",
        img: "images/ForrestGump.jpg",
        time: "2h 22min",
        story:
          "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
        video: "https://www.youtube.com/embed/bLvqoHBptjg",
      },

      Her: {
        key: "Her",
        name: "Her",
        date: "10 January 2014",
        type: "Romance",
        rating: 8.1,
        Director: "Spike Jonze",
        img: "images/Her.jpg",
        time: "2h 6min",
        story:
          "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        video: "https://www.youtube.com/embed/dJTU48_yghs",
      },

      TheHandmaiden: {
        key: "TheHandmaiden",
        name: "The Handmaiden",
        date: "1 June 2016",
        type: "Romance",
        rating: 8.1,
        Director: "Chan-wook Park",
        img: "images/TheHandmaiden.jpg",
        time: "2h 25min",
        story:
          "A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.",
        video: "https://www.youtube.com/embed/whldChqCsYk",
      },

      BeforeSunset: {
        key: "BeforeSunset",
        name: "Before Sunset",
        date: "30 July 2004",
        type: "Romance",
        rating: 8.1,
        Director: "Richard Linklater",
        img: "images/BeforeSunset.jpg",
        time: "1h 20min",
        story:
          "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
        video: "https://www.youtube.com/embed/oI3UuneLcyU",
      },
    },
  },
];

const body = $("body");
const row = $(".row");
const continuer = $(".continuer");
const contFavPage = $(".cont-favPage");
const randomDiv = $(".random-div");

let checked = $("input[type=checkbox]:checked").length;

$("#filter").hide();
$(".titlePageFav").hide();
let counterFav =
  localStorage.getItem("counterFav") > 0
    ? localStorage.getItem("counterFav")
    : 0;
localStorage.getItem("fav");
const favNavNum = document.querySelector("#favNavNum");
favNavNum.innerText = counterFav;
let favMovies =
  JSON.parse(localStorage.getItem("favMovie")) == undefined
    ? []
    : JSON.parse(localStorage.getItem("favMovie"));

// get card key
const changeKey = (e) => {
  $("continuer").show();
  $("#filter").hide();
  localStorage.setItem("movie", e);
  row.hide();
  $(".continuer").hide();
  $(".titlePageFav").hide();
  $(".cont-favPage").hide();
  $(".card").hide();

  // on click movie card in movie page
  for (let index = 0; index < movies.length; index++) {
    for (const key in movies[index]) {
      for (const movie in movies[index][key]) {
        let a = localStorage.getItem("movie");
        if (movie === e) {
          continuer.html("");
          const decMovie = $(`
          <div class="con-des">
          <img id="img-des" width="300" height="400" src="${movies[index][key][movie].img}">
          </div>
          <div class="desmovie">
          <p id="${movies[index][key][movie].type}">${movies[index][key][movie].name}</p>
          <p  class="des"><img src="./images/star.png" width="25" height="25" alt="star">
          <b>${movies[index][key][movie].rating}</b></p>
          <p class="des"><b>Date: </b>${movies[index][key][movie].date}</p>
          <p class="des"><b>Type: </b>${movies[index][key][movie].type}</p>
          <p class="des" ><b>Director: </b>${movies[index][key][movie].Director}</p>
          <p class="des" ><b>Time: </b>${movies[index][key][movie].time}</p>
          <h2 class="des">Description:</h2>
          <div class="des">${movies[index][key][movie].story}</div>
         
          <div><button onclick="favireteButton('${movie}')" id="favBtn">FAVORITE</button> </div></div></div>
          <div class="continuer-des">

          <iframe id="video" width="400" height="300"
          src="${movies[index][key][movie].video}"
           frameborder="0" allowFullScreen></iframe>
           </div>
          `);

          continuer.append(decMovie);
        }
      }
    }
  }
  $(".continuer").show();
};

//show all movies
const showMoviePage = () => {
  checked = $("input[type=checkbox]:checked").length;

  $("#filter").show();
  $(".continuer").hide();
  $(".FavPage").hide();
  $(".banner").hide();
  $(".titlePageFav").hide();
  $(".random-div").hide();
  $(".Navbar").css({
    marginBottom: "20px",
  });
  row.html("");

  //get all data movie
  for (let index = 0; index < movies.length; index++) {
    for (const key in movies[index]) {
      for (const movie in movies[index][key]) {
        let e = movies[index][key][movie];
        const card = $(
          `<div class="card" id= "card${index}" onclick="changeKey('${e.key}')">  
          <div class="card-image">
          <img id="img" src=${movies[index][key][movie].img}></div>
          <div class="card-description">
          <h2>${movies[index][key][movie].name}<h2> 
          <h2 id="${movies[index][key][movie].type}">${movies[index][key][movie].type}</h2>
          <h3 id="titleH3">Date: <span class="fontCard">${movies[index][key][movie].date}</span></h3>
          <h4 id="fontH4">Director:<span class="fontCard"> ${movies[index][key][movie].Director}</span></h4>
          </div> 
          </div>`
        );

        row.append(card);
      }
    }
  }
  $(".row").show();

  if (checked === 1) {
    $(".card-description").css({
      backgroundColor: "rgb(46, 38, 38)",
      color: "white",
    });
    $(".titleH3").css({ color: "white" });

    $(".fontCard").css({
      color: "white",
    });
  } else {
    $(".card-description").css({
      backgroundColor: "white",
    });
    $(".fontCard").css({
      color: "black",
    });
  }
};

//filter categories
const filter = (index) => {
  checked = $("input[type=checkbox]:checked").length;

  row.html("");

  if (index == "") {
    showMoviePage();
  }
  for (const key in movies[index]) {
    for (const movie in movies[index][key]) {
      let e = movies[index][key][movie];
      const card = $(
        `<div class="card" id= "card${index}" onclick="changeKey('${e.key}')">  
          <div class="card-image">
          <img id="img" src=${movies[index][key][movie].img}></div>
          <div class="card-description">
          <h2>${movies[index][key][movie].name}<h2> 
          <h2 id="${movies[index][key][movie].type}">${movies[index][key][movie].type}</h2>
          <h3 id="titleH3">Date: <span class="fontCard">${movies[index][key][movie].date}</span></h3>
          <h4>Director:<span class="fontCard"> ${movies[index][key][movie].Director}</span></h4>
          </div> 
          </div>`
      );
      row.append(card);
    }
  }
  if (checked === 1) {
    $(".card-description").css({
      backgroundColor: "rgb(46, 38, 38)",
      color: "white",
    });
    $(".titleH3").css({ color: "white" });

    $(".fontCard").css({
      color: "white",
    });
  } else {
    $(".card-description").css({
      backgroundColor: "white",
    });
    $(".fontCard").css({
      color: "black",
    });
  }
};

// push fav movie on array favMovies
// favMovies = JSON.parse(localStorage.getItem("favMovie"));
const favireteButton = (e) => {
  let favArr = favMovies.length == undefined ? 0 : favMovies.length;
  console.log(e);
  for (let index = 0; index < movies.length; index++) {
    for (const key in movies[index]) {
      for (const movie in movies[index][key]) {
        if (counterFav === 0) {
          favNavNum.innerText = localStorage.setItem("counterFav", 0);
        }
        if (movie === e) {
          console.log(favMovies);
          if (favArr.length === 0) {
            counterFav++;
            favMovies.push(movies[index][key][movie]);
            localStorage.setItem("counterFav", counterFav);
            favNavNum.innerText = localStorage.getItem("counterFav");
            localStorage.setItem("favMovie", JSON.stringify(favMovies));
          } else {
            for (let index2 = 0; index2 < favMovies.length; index2++) {
              if (movie === favMovies[index2]["key"]) {
                return;
              }
            }
            counterFav++;
            favMovies.push(movies[index][key][movie]);
            localStorage.setItem("counterFav", counterFav);
            favNavNum.innerText = localStorage.getItem("counterFav");
            localStorage.setItem("favMovie", JSON.stringify(favMovies));
          }
        }
      }
    }
  }
};

const buildFavPage = () => {
  let getDataFav = JSON.parse(localStorage.getItem("favMovie"));
  checked = $("input[type=checkbox]:checked").length;

  $(".titlePageFav").show();
  $("FavPage").show();
  $(".banner").hide();
  $(".card").hide();
  $("#filter").hide();
  $(".continuer").hide();
  $(".cont-favPage").hide();
  $(".random-div").hide();
  $(".Navbar").css({
    marginBottom: "0px",
  });

  const favPage = $(".FavPage");
  favPage.html("");
  console.log();
  for (let index = 0; index < getDataFav.length; index++) {
    const card = $(
      `<div class="card" onclick="onClickFav('${index}')">  
          <div class="card-image">
          <img id="img" src=${getDataFav[index].img}></div>
          <div class="card-description">
          <h2>${getDataFav[index].name}<h2> 
          <h2 id="${getDataFav[index].type}">${getDataFav[index].type}</h2>
          <h3>Date: <span class="fontCard">${getDataFav[index].date}</span></h3>
          <h4>Director:<span class="fontCard"> ${getDataFav[index].Director}</span></h4>
          </div> 
          </div>`
    );
    favPage.append(card);
  }
  $(".FavPage").show();
  if (checked === 1) {
    $(".card-description").css({
      backgroundColor: "rgb(46, 38, 38)",
      color: "white",
    });
    $(".titleH3").css({ color: "white" });

    $(".fontCard").css({
      color: "white",
    });
  } else {
    $(".card-description").css({
      backgroundColor: "white",
    });
    $(".fontCard").css({
      color: "black",
    });
  }
};

// onclick card movie in fav page
const onClickFav = (e) => {
  let getDataFav = JSON.parse(localStorage.getItem("favMovie"));
  $("#filter").hide();
  localStorage.setItem("fav", e);
  row.hide();
  $(".continuer").hide();
  const contFavPage = $(".cont-favPage");
  $(".card").hide();
  $(".banner").hide();
  $(".column").hide();
  $(".row").hide();
  $(".continuer").hide();
  $("#filter").hide();
  $(".titlePageFav").hide();
  $(".random-div").hide();
  $(".Navbar").css({
    marginBottom: "30px",
  });

  // information movie page
  for (let index = 0; index < getDataFav.length; index++) {
    if (index.toString() === e.toString()) {
      contFavPage.html("");
      const decMovie = $(`
          <div class="con-des">
          <img id="img-des" width="300" height="400" src="${getDataFav[index].img}">
          </div>
          <div class="desmovie">
          <p id="${getDataFav[index].type}">${getDataFav[index].name}</p>
          <p  class="des"><img src="./images/star.png" width="25" height="25" alt="star">
          <b>${getDataFav[index].rating}</b></p>
          <p class="des"><b>Date: </b>${getDataFav[index].date}</p>
          <p class="des"><b>Type: </b>${getDataFav[index].type}</p>
          <p class="des" ><b>Director: </b>${getDataFav[index].Director}</p>
          <p class="des" ><b>Time: </b>${getDataFav[index].time}</p>
          <h2 class="des">Description:</h2>
          <div class="des">${getDataFav[index].story}</div>
         
          <div><button id="deleteButton" onclick="deleteButton('${index}')">Delete</button> </div></div></div>
          <div class="continuer-des">
          <iframe id="video" width="400" height="300"
          src="${getDataFav[index].video}"
           frameborder="0" allowFullScreen></iframe>
           </div>
          `);

      contFavPage.append(decMovie);
    }
  }
  contFavPage.show();
};

const deleteButton = (index) => {
  favMovies = JSON.parse(localStorage.getItem("favMovie"));
  $(".titlePageFav").show();
  $("#FavPage").show();
  if (counterFav > 0) {
    favMovies.splice(index, 1);
    counterFav--;
    localStorage.setItem("counterFav", counterFav);
    localStorage.setItem("favMovie", JSON.stringify(favMovies));
  } else if (counterFav === 0) {
    $("#FavPage").show();
    localStorage.clear();
    favNavNum.innerText = 0;
    localStorage.setItem("counterFav", 0);
  }
  $(".continuer").hide();
  $(".cont-favPage").hide();
  favNavNum.innerText = localStorage.getItem("counterFav");
  buildFavPage();
};

const randomMovie = () => {
  let index = Math.floor(Math.random() * movies.length);
  let key1 = Object.keys(movies[index])[
    Math.floor(Math.random() * Object.keys(movies[index]).length)
  ];
  let key2 = Object.keys(movies[index][key1])[
    Math.floor(Math.random() * Object.keys(movies[index][key1]).length)
  ];

  $(".Navbar").css({
    marginBottom: "30px",
  });
  randomDiv.html("");
  const decMovie = $(`
        <div class="con-des">
        <img id="img-des" width="300" height="400" src="${movies[index][key1][key2].img}">
        </div>
        <div class="desmovie">
        <p id="${movies[index][key1][key2].type}">${movies[index][key1][key2].name}</p>
        <p  class="des"><img src="./images/star.png" width="25" height="25" alt="star">
        <b>${movies[index][key1][key2].rating}</b></p>
        <p class="des"><b>Date: </b>${movies[index][key1][key2].date}</p>
        <p class="des"><b>Type: </b>${movies[index][key1][key2].type}</p>
        <p class="des" ><b>Director: </b>${movies[index][key1][key2].Director}</p>
        <p class="des" ><b>Time: </b>${movies[index][key1][key2].time}</p>
        <h2 class="des">Description:</h2>
        <div class="des">${movies[index][key1][key2].story}</div>
        <div><button onclick="favireteButton('${movies[index][key1][key2].key}')" id="favBtn">FAVORITE</button> </div></div></div>
        </div></div>
        <div class="continuer-des">

        <iframe id="video" width="400" height="300"
        src="${movies[index][key1][key2].video}"
         frameborder="0" allowFullScreen></iframe>
         </div>
        `);

  randomDiv.append(decMovie);

  randomDiv.show();
};
const darkMode = () => {
  checked = $("input[type=checkbox]:checked").length;

  if (checked === 0) {
    body.css({ backgroundColor: "rgb(46, 38, 38)", color: "white" });
    $(".logo").css({ color: "white" });
    $("#homeNavbar").css({ color: "white" });
    $("#moviesNavbar").css({ color: "white" });
    $(".btn").css({ color: "black", backgroundColor: "rgb(241, 235, 235)" });
    $(".div.card").css({ backgroundColor: "rgb(46, 38, 38)", color: "white" });
    $(".card-description").css({
      backgroundColor: "rgb(46, 38, 38)",
      color: "white",
    });
    $(".card").css({ color: "white" });
    $(".fontCard").css({
      backgroundColor: "none",
      color: "white",
    });
    $(".titleH3").css({ color: "white" });
  } else {
    $(".card-description").css({
      color: "black",
      backgroundColor: "white",
    });
    body.css({ backgroundColor: "white", color: "rgb(46, 38, 38)" });
    $(".logo").css({ color: "#4e4849" });
    $("#homeNavbar").css({ color: "rgb(75, 69, 69)" });
    $("#moviesNavbar").css({ color: "rgb(75, 69, 69)" });
    $(".btn").css({ color: "white", backgroundColor: "rgb(75, 69, 69)" });
    $(".div.card").css({ color: "black", backgroundColor: "white" });

    $(".fontCard").css({
      color: "rgb(46, 38, 38)",
    });
  }

  $(".card").css({ backgroundColor: "white", color: "black" });

  $(".titleH3").css({ color: "black" });
};

//home page
$("#homeNavbar").on("click", () => {
  $(".banner").show();
  $(".column").hide();
  $(".row").hide();
  $(".continuer").hide();
  $("#filter").hide();
  $(".FavPage").hide();
  $(".titlePageFav").hide();
  $(".cont-favPage").hide();
  $(".titlePageFav").hide();
  $(".random-div").hide();
  $(".Navbar").css({
    marginBottom: "0px",
  });
});

//movies Page
$("#moviesNavbar").on("click", showMoviePage);

// favorite page
$("#favoriteNavbar").on("click", buildFavPage);

//random Movie
$("#randomNavbar").on("click", () => {
  $("#video").attr("src", "");
  $(".titlePageFav").hide();
  $(".banner").hide();
  $(".card").hide();
  $("#filter").hide();
  $(".continuer").hide();
  $(".FavPage").hide();
  $(".titlePageFav").hide();
  $(".cont-favPage").hide();
  randomMovie();
});
