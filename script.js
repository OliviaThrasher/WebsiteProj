$(document).ready(function() {
    const currentPath = window.location.pathname;

    $(".NavMenu li a").each(function() {
        if ($(this).attr("href") === currentPath) {
            $(this).addClass("active");
        }
    });
    let slideIndex = 1;
    showSlides(slideIndex);

    $(".prev, .next").on("click", function () {
        let increment = $(this).hasClass("next") ? 1 : -1;
        showSlides(slideIndex += increment);
    });

    $(".dot").on("click", function () {
        let dotIndex = $(this).index() + 1;
        showSlides(slideIndex = dotIndex);
    });

    function showSlides(n) {
        let $slides = $(".mySlides");
        let $dots = $(".dot");

        if (n > $slides.length) slideIndex = 1;
        if (n < 1) slideIndex = $slides.length;

        $slides.hide();
        $slides.eq(slideIndex - 1).show();

        $dots.removeClass("active");
        $dots.eq(slideIndex - 1).addClass("active");
    }
});
$(document).ready(function () {
    // Ensure errors are hidden by default
    $(".error").hide();

    // Form submission handler
    $("#feedbackForm").on("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        let isValid = true;

        // Clear all error messages initially
        $(".error").hide();

        // Name validation
        const name = $("#name").val().trim();
        if (name === "") {
            $("#nameError").show();
            isValid = false;
        }

        // Email validation
        const email = $("#email").val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $("#emailError").show();
            isValid = false;
        }

        // Age validation
        const age = parseInt($("#age").val().trim(), 10);
        if (isNaN(age) || age <= 0) {
            $("#ageError").show();
            isValid = false;
        }

        // Gender validation
        const genderSelected = $("input[name='gender']:checked").length > 0;
        if (!genderSelected) {
            $("#genderError").show();
            isValid = false;
        }

        // Show success message if all fields are valid
        if (isValid) {
            $("#formFeedback").text("Thank you for your feedback!").fadeIn();
            $("#feedbackForm")[0].reset(); // Optionally reset the form
        }
    });

    // Display user inputs
    $("#displayButton").on("click", function () {
        const name = $("#name").val().trim() || "N/A";
        const email = $("#email").val().trim() || "N/A";
        const age = $("#age").val().trim() || "N/A";
        const gender = $("input[name='gender']:checked").val() || "N/A";

        // Update the #userInputs div with the entered data
        $("#userInputs").html(
            `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Age:</strong> ${age}</p>
             <p><strong>Gender:</strong> ${gender}</p>`
        );
    });

    // Reset button functionality
    $("#resetButton").on("click", function () {
        // Hide error messages on reset
        $(".error").hide();
        $("#formFeedback").fadeOut(); // Hide success message
        $("#userInputs").empty(); // Clear displayed user inputs
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }