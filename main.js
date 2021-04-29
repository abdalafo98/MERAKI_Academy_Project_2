//data
const movies = [
  {
    action: {
      TheDarkKnight: {
        key: "TheDarkKnight",
        name: "The Dark Knight ",
        date: "18 July 2008",
        type: "Action",
        rating: 9.0,
        Director: "Christopher Nolan",
        img: "images/TheDarkKnight.jpg",
        time: "2h 32min ",
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
      },

      Inception: {
        key: "Inception",
        name: "Inception",
        date: "16 July 2010",
        type: "Action",
        rating: 8.8,
        Director: "Christopher Nolan",
        img: "images/Inception.jpg",
        time: "2h 28min",
      },

      TheMatrix: {
        key: "TheMatrix",
        name: "The Matrix",
        date: "31 March 1999",
        type: "Action",
        Director: " Lana Wachowski,Lilly",
        rating: 8.7,
        img: "images/TheMatrix.jpg",
        time: "2h 28min",
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
      },

      Interstellar: {
        key: "Interstellar",
        name: "Interstellar",
        date: "7 November 2014",
        type: "Drama",
        rating: 8.6,
        Director: "Christopher Nolan",
        img: "images/Interstellar.jpg",
        time: "2h 49min",
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
      },
    },
  },
];

const body = $("body");
const row = $(".row");
const b = $(".b");
$("#filter").hide();

// get name card
const changeKey = (e) => {
  $(".b").show();
  $("#filter").hide();

  console.log(e);
  localStorage.setItem("movie", e);
  row.hide();

  $(".card").hide();

  // information movie page

  for (let index = 0; index < movies.length; index++) {
    for (const key in movies[index]) {
      for (const movie in movies[index][key]) {
        if (movie === e) {
          b.html("");
          const decMovie = $(`
          <div class="center">
          <div class="b">
          
    <div class="b">
    <img height="400px" width="300px" alt="" id="imgDes" src="${movies[index][key][movie].img}">
 
  <div class="b" >
    <h2 id="${movies[index][key][movie].type}">${movies[index][key][movie].name}</h2>
    <h4 id="des">Date:<h6>${movies[index][key][movie].date}</h6></h4>
    <h4 id="des">Type:<h6>${movies[index][key][movie].type}</h6></h4>
    <h4 id="des">${movies[index][key][movie].rating}</h4>
    <h4 id="des">${movies[index][key][movie].Director}</h4>
    <h4 id="des">${movies[index][key][movie].time}</h4>
  </div>
          </div>
          </div> 
          `);
          // const c = $(`<div class="b">
          //   <div class="card-image">
          //   <img id="img" src=${movies[index][key][movie].img}></div>
          //   <div class="card-description">
          //   <h2>${movies[index][key][movie].name}<h2>
          //   <h2 id="${movies[index][key][movie].type}">${movies[index][key][movie].type}</h2>
          //   <h3>Date: <span class="fontCard">${movies[index][key][movie].date}</span></h3>
          //   <h4>Director:<span class="fontCard"> ${movies[index][key][movie].Director}</span></h4>
          //   </div>
          // </div>`);
          b.append(decMovie);
        }
      }
    }
  }
};

//home page
$("#homeNavbar").on("click", function () {
  $(".banner").show();
  $(".column").hide();
  $(".row").hide();
  $(".b").hide();
  $("#filter").hide();

  $("#homeNavbar").css("color", "rgb(173, 34, 29)");
  $("#moviesNavbar").css("color", "#565950");
  $("#randomNavbar").css("color", "#565950");
  $(".Navbar").css({
    marginBottom: "5px",
  });
});

const showMoviePage = () => {
  $("#filter").show();

  $(".banner").hide();
  $("#homeNavbar").css("color", "#565950");
  $("#randomNavbar").css("color", "#565950");
  $("#moviesNavbar").css("color", "rgb(173, 34, 29)");
  $(".Navbar").css({
    marginBottom: "50px",
  });
  row.html("");
  $(".b").hide();

  //get all data
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
          <h3>Date: <span class="fontCard">${movies[index][key][movie].date}</span></h3>
          <h4>Director:<span class="fontCard"> ${movies[index][key][movie].Director}</span></h4>
          </div> 
          </div>`
        );

        row.append(card);
      }
    }
  }
  $(".row").show();
};

//movies Page
$("#moviesNavbar").on("click", showMoviePage);

const filter = (index) => {
  row.html("");

  if (index == "") {
    showMoviePage();
  }
  //filter categories
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
          <h3>Date: <span class="fontCard">${movies[index][key][movie].date}</span></h3>
          <h4>Director:<span class="fontCard"> ${movies[index][key][movie].Director}</span></h4>
          </div> 
          </div>`
      );
      row.append(card);
    }
  }
};

//random Movie
$("#randomNavbar").on("click", function () {
  $(".banner").hide();
  $(".card").hide();
  $("#filter").hide();
  $("#randomNavbar").css("color", "goldenrod");

  $("#homeNavbar").css("color", "#565950");
  $("#moviesNavbar").css("color", "#565950");
});
