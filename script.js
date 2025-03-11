var slideIndex = 1;
var projects = [
  {
    name: "wics website",
    date: "jan 25 - now",
    type: "web dev",
    github: "https://github.com/wics-uic/WiCS-Website",
    details: "astro | tailwind | html | css | js",
    images: '<img class="viewer-image" src="assets/wicsweb.png">',
    description:
      "i'm leading a group of 15 students to build the official website for the women in computer science organization. this is a full-stack project that will go through the entirety of the spring 2025 semester.",
  },
  {
    name: "uic course planner",
    date: "sept 2024 - dec 2024",
    type: "react / web dev",
    github: "https://github.com/cheetodustflori/UIC-Course-Planner",
    details: "react.js | node.js | html | css | js",
    images: '<img class="viewer-image" src="assets/courseplanner.png">',
    description:
      "leading a group of 15 students to build a website to help uic community prepare for their cs courses for each semester. this website features a catalog of courses with descriptions and topics, and student reviews of course difficulty and enjoyment.",
  },
  {
    name: "the leaf project",
    date: "aug 2023 - aug 2024",
    type: "mobile ios dev",
    github: "https://github.com/cheetodustflori/The-Leaf-Project",
    details: "swift | xcode",
    images: '<img class="viewer-image" src="assets/leaf.png">',
    description:
      "this was my first project entering college! leaf club is dedicated to increasing financial literacy through the development of an app which teaches users basic finance lessons. since the team decided to break off and transition to xcode, i volunteered to learn swift and rebuild the app from scratch in my first semester. i finished designing and building 80% of the app's basic pages with added elements(i.e. completed task counters).",
  },
  
  {
    name: "travel bucket list",
    date: "jan 24",
    type: "mobile ios dev",
    github: "https://github.com/cheetodustflori/Travel-Bucket-List",
    details: "swift | xcode",
    images:
      '<video class="viewer-video" src="assets/travel.mov" controls autoplay loop muted></video>',
    description:
      'i taught a group of students how to make an app with swift and xcode in weekly meetings! this travel bucket list app offers users a tracking tool for destinations they\'d like to visit, details for these places, and ways to categorize them by types of trips (e.x. vacation, road trip, etc.). i was inspired by the tutorial by <a href="https://www.youtube.com/watch?v=uSanD_pFwis target="_blank" style="text-decoration: none; color: #7796CB">designCode</a>',
  },
  
  // {
  //     name: 'university projects',
  //     date: 'aug 23 - may 24',
  //     type: '2 wk projects',
  //     github: 'https://github.com/cheetodustflori',
  //     details: 'c | c++',
  //     images: '<img class="viewer-image" src="assets/leaf.png">'
  // }
];

var experiences = [
  {
    position: "web dev research assistant",
    date: "june 24 - now",
    github: "https://github.com/cheetodustflori/UIC-Course-Planner",
    embed:
      '<iframe src="https://docs.google.com/presentation/d/1Sa9GjBIq1oHeTT5ptnoDPSZZTWrLatbZ6ITDGAZCJ8s/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
    description:
      "i redesigned the interface of a teacher authoring tool to make it easy for users to navigate, give the application a more sleek look, and add more functions that would assist teachers with organizing their comments. i created a sorting mechanism where teachers can count and filter comments by category (clicking on a line bar) and emotions (clicking on emotions panel). I also added color coding and emojis to help teachers easily differentiate comment categories and emotions.",
  },
  {
    position: "ui design intern",
    date: "may 24",
    embed:
      '<video class="viewer-video" src="assets/survey.mp4" controls loop muted></video>',
    description:
      "i created a mock-up of a survey collection app which would be presented to patients in rural healthcare clinics. these surveys aim to provide a sense of comfort to new patients and give the clinic a better sense of how to serve the rural community. i led the design and ideation of the prototype, including the use of 3D icons, color palette, minimal and sleek look, and general flow of the survey.",
  },
];

var activities = [
  {
    activity: "leaf",
    position: "front end developer",
    date: "aug 23 - now",
    description:
      "<ul><li>led swift developer team</li><li>designed and built mobile ios app </li><li>organized fundraisers and financial literacy workshops</li></ul>",
    images: [
      "assets/activities/leaf.png",
      "assets/activities/leaf2.jpg",
      "assets/activities/leaf4.png",
      "assets/activities/leaf5.png",
      "assets/activities/leaf6.png",
      "assets/activities/leaf7.jpg",
    ],
  },
  {
    activity: "acm",
    position: "treasurer",
    date: "may 24 - now",
    description:
      "<ul><li>host technical workshops in web design</li><li>organize weekly cs workshops and fun events</li><li>manage funds</li></ul>",
    images: [
      "assets/activities/acm.jpg",
      "assets/activities/acm2.jpg",
      "assets/activities/acm3.jpg",
      "assets/activities/acm4.jpg",
    ],
  },
  {
    activity: "wics",
    position: "dev lead",
    date: "may 24 - now",
    description:
      "<ul><li>teaching group of cs students how to build a website</li><li>host technical workshops in web design</li><li>organize weekly cs workshops and fun events</li></ul>",
    images: ["assets/activities/wics.jpg", "assets/activities/wics2.jpg"],
  },
  {
    activity: "sparkhacks",
    position: "web developer",
    date: "sep 24 - jan 24",
    description:
      "<ul><li>built <a target='_blank' href='https://www.sparkhacks.org/'>website</a> for uic's annual hackathon for students to register and receive updates about the 2-day event</li><li>developed using html, css, tailwind, and astro</li></ul>",
    images: ["assets/activities/sparkhacks.png"],
  },
];



// changing pages based on button click
$("#nav-button-container > li").on("click", function () {
  $(".viewer-display").empty();
  $(".viewer-description").empty();
  var buttonType = $(this).attr("type");
  var activeContainer = $("div[type='" + buttonType + "']");

  $("#home-container").removeClass("active");
  $("#nav-button-container > li").removeClass("active");
  $("#name").removeClass("active");
  $(".container").removeClass("active");

  $(this).addClass("active");
  activeContainer.addClass("active");
  resetViewers();
});

$("#name").on("click", resetToDefault);
$("#portfolio-title").on("click", resetToDefault);

function updateViewer(containerSelector, dataList) {
  $(containerSelector + " > .list > li").on("click", function () {
    var viewerPrefix = containerSelector
      .replace("#", "")
      .replace("-container", "-viewer");

    $("." + viewerPrefix + "-headline").empty();
    $(".viewer-display").empty();
    $(".viewer-description").empty();
    $(".viewer-details").empty();
    $(containerSelector + " .list > li").removeClass("active");
    $(this).addClass("active");

    var index = $(this).index();

    if (dataList === projects) {
      $("." + viewerPrefix + "-headline").append(
        "<p>" +
          dataList[index].date +
          "</p><b>" +
          dataList[index].type +
          '</b><a href="' +
          dataList[index].github +
          '" target="_blank" class="github-button"><img src="assets/github.png"></a>'
      );
      $(".viewer-display").append(dataList[index].images);
    } else if (dataList === experiences) {
      $("." + viewerPrefix + "-headline").append(
        '<p style="font-weight:bold; text-decoration: underline;">' +
          dataList[index].position +
          "</p><p>" +
          dataList[index].date
      );
      if (index == 0) {
        $("." + viewerPrefix + "-headline").append(
          "</p>" +
            '<a target="_blank" href="' +
            dataList[index].github +
            '" class="github-button"><img src="assets/github.png"></a>'
        );
      }
      $(".viewer-display").append(dataList[index].embed);
    } else if (dataList === activities) {
      $("." + viewerPrefix + "-headline").append(
        "<b style='text-decoration:underline'>" +
          dataList[index].position +
          "</b><p>" +
          dataList[index].date +
          "</p>"
      );

      if (activities[index].images && activities[index].images.length > 0) {
        activities[index].images.forEach(function (image) {
          
          $("#activities-container .viewer-display").append(
            '<div class="mySlides"><img src="' +
              image +
              '" style="width:100%"></div>'
          );
        });
      }

      $("#activities-container .viewer-display").append(
        '<div id="arrow-container"><a class="prev" onclick="plusSlides(-1)">&#10094;</a><a class="next" onclick="plusSlides(1)">&#10095;</a></div>'
      );

      slideIndex = 1;
      showSlides(slideIndex);
      
    }

    $(".viewer-description").append(dataList[index].description);
    $(".viewer-details").append(dataList[index].details || "");
  });
}

// Example usage:
updateViewer("#projects-container", projects);
updateViewer("#experience-container", experiences);
updateViewer("#activities-container", activities);

// --------- FUNCTIONS ----------

// reset containers
function resetToDefault() {
  $(".container").removeClass("active");
  $(".viewer-description").empty();
  $("#nav-button-container > li").removeClass("active");
  $("#home-container").addClass("active");
  $("#name").addClass("active");
  resetViewers();
}

// reset all viewer headlines
function resetViewers() {
  $(".list > li").removeClass("active");
  $(".projects-viewer-headline").empty();
  $(".experience-viewer-headline").empty();
  $(".activities-viewer-headline").empty();
  $(".projects-viewer-headline").append("<p> ... </p>");
  $(".experience-viewer-headline").append("<p> ... </p>");
  $(".activities-viewer-headline").append("<p> ... </p>");
}

function plusSlides(n){
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = $("#activities-container .mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.each(function (index) {
    $(this).css("display", "none");
  });
  slides.eq(slideIndex - 1).css("display", "flex");
}
