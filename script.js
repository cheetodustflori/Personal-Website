var projects = [
  {
    name: "the leaf project",
    date: "aug 23 - now",
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
    description: 'i taught a group of students how to make an app with swift and xcode in weekly meetings! this travel bucket list app offers users a tracking tool for destinations they\'d like to visit, details for these places, and ways to categorize them by types of trips (e.x. vacation, road trip, etc.). i was inspired by the tutorial by <a href="https://www.youtube.com/watch?v=uSanD_pFwis target="_blank">designCode</a>',
  },
  {
    name: "uic course planner",
    date: "sept 24 - now",
    type: "react / web dev",
    github: "https://github.com/cheetodustflori/UIC-Course-Planner",
    details: "react.js | node.js | html | css | js",
    images: "<p>...results coming out soon...</p>",
    description: "this upcoming semester, i will be leading a group of 10-15 students to build a website to help the cs community at uic plan out their undergrad courses for each semester. this website will feature a catalog of courses with descriptions and topics, and a planner where they can add courses to each semester and print their final plan.",
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
    position: "web development ra",
    date: "june 24 - now",
    embed:
      '<iframe src="https://docs.google.com/presentation/d/1Sa9GjBIq1oHeTT5ptnoDPSZZTWrLatbZ6ITDGAZCJ8s/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>',
  },
  {
    position: "ui design intern",
    date: "may 24",
    embed:
      '<video class="viewer-video" src="assets/survey.mp4" controls autoplay loop muted></video>',
  },
];

var activities = [
    {
        activity: 'leaf',
        position:'',
        description: '',
        images:'',
    },
    {
        activity: 'acm',
        position:'',
        description: '',
        images:'',
    },
    {
        activity: 'wics',
        position:'',
        description: '',
        images:'',
    },
    {
        activity: 'sparkhacks',
        position:'',
        description: '',
        images:'',
    },
]

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

function resetToDefault() {
  $(".container").removeClass("active");
  $(".viewer-description").empty();
  $("#nav-button-container > li").removeClass("active");
  $("#home-container").addClass("active");
  $("#name").addClass("active");
  resetViewers();
}

$("#name").on("click", resetToDefault);
$("#portfolio-title").on("click", resetToDefault);

// changing projects viewer based on list item
$("#projects-container > .list > li").on("click", function () {
  $(".projects-viewer-headline").empty();
  $(".viewer-display").empty();
  $(".viewer-description").empty();
  $(".list > li").removeClass("active");
  $(this).addClass("active");
  var index = $(this).index();
  $(".projects-viewer-headline").append(
    "<p>" +
      projects[index].date +
      "</p><b>" +
      projects[index].type +
      '</b><a href="' +
      projects[index].github +
      '" target="_blank" class="link"> github</a>'
  );
  $(".viewer-display").append(projects[index].images);
  $(".viewer-description").append(projects[index].description);
});

// changing experience viewer based on list item
$("#experience-container > .list > li").on("click", function () {
  $(".experience-viewer-headline").empty();
  $(".viewer-display").empty();
  $(".viewer-description").empty();
  $(".list > li").removeClass("active");
  $(this).addClass("active");
  var index = $(this).index();
  $(".experience-viewer-headline").append(
    '<p style="font-weight:bold; text-decoration: underline;">' +
      experiences[index].position +
      "</p><p>" +
      experiences[index].date +
      "</p>"
  );
  $(".viewer-display").append(experiences[index].embed);
  $(".viewer-description").append(experiences[index].description);
});


// reset all viewer headlines
function resetViewers() {
  $(".list > li").removeClass("active");
  $(".projects-viewer-headline").empty();
  $(".experience-viewer-headline").empty();
  $(".activities-viewer-headline").empty();
  $(".projects-viewer-headline").append("<p>projects</p>");
  $(".experience-viewer-headline").append("<p>experience</p>");
  $(".activities-viewer-headline").append("<p>experience</p>");
}

// changing activities viewer based on list item