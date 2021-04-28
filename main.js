const movies = [
  {
    action: {
      TheDarkKnight: {
        name: "The Dark Knight ",
        date: 2008,
        type: "Action",
        rating: 9.0,
        Director: "Christopher Nolan",
        img: "images/TheDarkKnight.jpg",
        time: "2h 32min ",
      },

      TheMountainII: {
        name: "The Mountain II",
        date: 2016,
        type: "Action",
        rating: 8.8,
        Director: "Alper Caglar",
        img: "images/TheMountainII.jpg",
        time: "2h 15min ",
      },

      Inception: {
        name: "Inception",
        date: 2010,
        type: "Action",
        rating: 8.8,
        Director: "Christopher Nolan",
        img: "images/Inception.jpg",
        time: "2h 28min",
      },

      TheMatrix: {
        name: "The Matrix",
        date: 1999,
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
        name: "Parasite",
        date: 2019,
        type: "Comedy",
        rating: 8.6,
        Director: "Bong Joon Ho",
        img: "images/Parasite.jpg",
        time: " 2h 12min",
      },

      Parasite: {
        name: "Parasite",
        date: 2019,
        type: "Comedy",
        rating: 8.6,
        Director: "Bong Joon Ho",
        img: "./images/Parasite.jpg",
        time: " 2h 12min",
      },

      Parasite: {
        name: "Parasite",
        date: 2019,
        type: "Comedy",
        rating: 8.6,
        Director: "Bong Joon Ho",
        img: "./images/Parasite.jpg",
        time: " 2h 12min",
      },

      Parasite: {
        name: "Parasite",
        date: 2019,
        type: "Comedy",
        rating: 8.6,
        Director: "Bong Joon Ho",
        img: "./images/Parasite.jpg",
        time: " 2h 12min",
      },
    },
  },
];

const body = $("body");
const row = $(".row");
$("#homeNavbar").on("click", function () {
  $(".banner").show();
  $(".column").hide();

  $("#homeNavbar").css("color", "goldenrod");
  $("#moviesNavbar").css("color", "#565950");
  $("#randomNavbar").css("color", "#565950");
});

$("#moviesNavbar").on("click", function () {
  $(".banner").hide();
  $("#homeNavbar").css("color", "#565950");
  $("#randomNavbar").css("color", "#565950");
  $("#moviesNavbar").css("color", "goldenrod");
  body.css({
    marginBottom: "900px",
  });

  for (let index = 0; index < movies.length; index++) {
    for (const key in movies[index]) {
      for (const movie in movies[index][key]) {
        const c = $(`<div class="card">
        <div class="card-image">
          <a href="#">
        <img id="img" height="400px" width="200px" src=${movies[index][key][movie].img}></a></div>
        <div class="card-description">
        <h2>${movies[index][key][movie].name}<h2> 
        <h3>Date: <span class="fontCard">${movies[index][key][movie].date}</span></h3>
        <h4>Director:<span class="fontCard"> ${movies[index][key][movie].Director}</span></h4>
        </div>
      </div>   
      </div>`);
        row.append(c);
      }
    }
  }
});

$("#randomNavbar").on("click", function () {
  $(".banner").hide();
  $(".card").hide();
  $("#randomNavbar").css("color", "goldenrod");

  $("#homeNavbar").css("color", "#565950");
  $("#moviesNavbar").css("color", "#565950");
});
