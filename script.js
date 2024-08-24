var projects = [
    {
        name: 'the leaf project',
        date: 'aug 23 - now',
        type: 'mobile ios dev',
        github: 'https://github.com/cheetodustflori/The-Leaf-Project',
        details: {
            language: 'swift',
            tool: 'xcode'
        },
        embed: '<iframe src="https://docs.google.com/presentation/d/1WV-iL6uyBBX-Vdsh1Jo38k-vImQVICoMe-Rz7xuuIo8/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
    },
    {
        name: 'travel bucket list',
        date: 'jan 24',
        type: 'mobile ios dev',
        github: 'https://github.com/cheetodustflori/Travel-Bucket-List',
        details: {
            language: 'swift',
            tool: 'xcode'
        },
        embed: '<iframe src="https://docs.google.com/presentation/d/111L9kzXAssakQFs0CYtcvJz6mQxr3xHBPUQUnxvbfaQ/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
    },
    {
        name: 'uic course planner',
        date: 'sept 24 - now',
        type: 'react / web dev',
        github: 'https://github.com/cheetodustflori',
        details: {
            language: 'swift',
            tool: 'xcode'
        },
        embed: '<iframe src="https://docs.google.com/presentation/d/1WV-iL6uyBBX-Vdsh1Jo38k-vImQVICoMe-Rz7xuuIo8/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
    },
    {
        name: 'university projects',
        date: 'aug 23 - may 24',
        type: '2 wk projects',
        github: 'https://github.com/cheetodustflori',
        details: {
            language: 'swift',
            tool: 'xcode'
        },
        embed: '<iframe src="https://docs.google.com/presentation/d/1WV-iL6uyBBX-Vdsh1Jo38k-vImQVICoMe-Rz7xuuIo8/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
    }
]

var experiences = [
    {
        position: 'web development ra',
        date: 'june 24 - now',
        embed: '<iframe src="https://docs.google.com/presentation/d/1Sa9GjBIq1oHeTT5ptnoDPSZZTWrLatbZ6ITDGAZCJ8s/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
    },
    {
        position: 'ui design intern',
        date: 'may 24',
        embed: '<iframe src="https://docs.google.com/presentation/d/1Sa9GjBIq1oHeTT5ptnoDPSZZTWrLatbZ6ITDGAZCJ8s/embed?start=false&loop=true&delayms=3000" frameborder="0" width="504" height="313" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>'
    }
]

// changing pages based on button click
$("#nav-button-container > li").on("click", function () {
    $(".viewer-display").empty()
  var buttonType = $(this).attr("type");
  var activeContainer = $("div[type='" + buttonType + "']");

  $("#logo-image").removeClass("active");
  $("#nav-button-container > li").removeClass("active");
  $("#name").removeClass("active");
  $(".container").removeClass("active");

  $(this).addClass("active");
  activeContainer.addClass("active");
  resetViewers();
});

// back to default viewer when click on name
$("#name").on("click", function () {
  $(".container").removeClass("active");
  $("#nav-button-container > li").removeClass("active");
  $("#logo-image").addClass("active");
  $(this).addClass("active");
  resetViewers();
});

// back to default when click on portfolio title
$("#portfolio-title").on("click", function () {
    $(".container").removeClass("active");
    $("#nav-button-container > li").removeClass("active");
    $("#logo-image").addClass("active");
    $("#name").addClass("active");
    resetViewers();
  });

// changing projects viewer based on list item
$("#projects-container > .list > li").on("click", function () {
    $(".projects-viewer-headline").empty();
    $(".viewer-display").empty()
    $(".list > li").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".projects-viewer-headline").append('<p>' + projects[index].date +'</p><b>' + projects[index].type +'</b><a href="'+ projects[index].github +'" target="_blank" class="link"> github</a>');
    $(".viewer-display").append(projects[index].embed);
});

// changing experience viewer based on list item
$("#experience-container > .list > li").on("click", function () {
    $(".experience-viewer-headline").empty();
    $(".viewer-display").empty()
    $(".list > li").removeClass("active");
    $(this).addClass("active");
    var index = $(this).index();
    $(".experience-viewer-headline").append('<p style="font-weight:bold; text-decoration: underline;">' + experiences[index].position + '</p><p>' + experiences[index].date + '</p>');
    $(".viewer-display").append(experiences[index].embed);
});

// changing experience viewer based on list item
function resetViewers() {
    $(".list > li").removeClass("active");
    $(".projects-viewer-headline").empty();
    $(".experience-viewer-headline").empty();
    $(".activities-viewer-headline").empty();
    $(".projects-viewer-headline").append('<p>projects</p>');
    $(".experience-viewer-headline").append('<p>experience</p>');
    $(".activities-viewer-headline").append('<p>experience</p>');
}