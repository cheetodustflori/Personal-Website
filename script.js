var projects = [
    {
        name: 'the leaf project',
        date: 'aug 23 - now',
        type: 'mobile ios dev',
        github: '',
        details: {
            language: 'swift',
            tool: 'xcode'
        }
    },
    {
        name: 'the leaf project',
        date: 'aug 23 - now',
        type: 'mobile ios dev',
        github: '',
        details: {
            language: 'swift',
            tool: 'xcode'
        }
    },
    {
        name: 'the leaf project',
        date: 'aug 23 - now',
        type: 'mobile ios dev',
        github: '',
        details: {
            language: 'swift',
            tool: 'xcode'
        }
    },
    {
        name: 'the leaf project',
        date: 'aug 23 - now',
        type: 'mobile ios dev',
        github: '',
        details: {
            language: 'swift',
            tool: 'xcode'
        }
    }
]

// changing pages based on button click

$("#nav-button-container > li").on("click", function () {
  var buttonType = $(this).attr("type");
  var activeContainer = $("div[type='" + buttonType + "']");

  $("#logo-image").removeClass("active");
  $("#nav-button-container > li").removeClass("active");
  $("#name").removeClass("active");
  $(".container").removeClass("active");

  $(this).addClass("active");
  activeContainer.addClass("active");
});

// back to default when click on name
$("#name").on("click", function () {
  $(".container").removeClass("active");
  $("#nav-button-container > li").removeClass("active");
  $("#logo-image").addClass("active");
  $(this).addClass("active");
});

// back to default when click on portfolio title
$("#portfolio-title").on("click", function () {
    $(".container").removeClass("active");
    $("#nav-button-container > li").removeClass("active");
    $("#logo-image").addClass("active");
    $("#name").addClass("active");
  });
  


// changing viewer based on list item

$(".list > li").on("click", function () {
    $(".list > li").removeClass("active");
  
    $(this).addClass("active");
  });