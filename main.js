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
        Director:
          " Lana Wachowski (as The Wachowski Brothers), Lilly Wachowski (as The Wachowski Brothers)",
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

$("#homeNavbar").on("click", function () {
  $(".banner").show();
  $("#homeNavbar").css("color", "goldenrod");
  $("#moviesNavbar").css("color", "#565950");
  $("#randomNavbar").css("color", "#565950");
});

$("#moviesNavbar").on("click", function () {
  $(".banner").hide();
  $("#homeNavbar").css("color", "#565950");
  $("#randomNavbar").css("color", "#565950");
  $("#moviesNavbar").css("color", "goldenrod");

  for (let index = 0; index < movies.length; index++) {
    for (const key in movies[index]) {
      for (const movie in movies[index][key]) {
        let c = $(`<div class="column"> 
        <img  src=${movies[index][key][movie].img}>
         <h2>${movies[index][key][movie].name}<h2> 
      </div>`);
        body.append(c);
      }
    }
  }
});

$("#randomNavbar").on("click", function () {
  $(".banner").hide();
  $(".row").hide();
  $("#randomNavbar").css("color", "goldenrod");

  $("#homeNavbar").css("color", "#565950");
  $("#moviesNavbar").css("color", "#565950");
});
