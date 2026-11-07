document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var fields = [
      document.getElementById("fullName"),
      document.getElementById("email"),
      document.getElementById("country"),
      document.getElementById("comments")
    ];

    var allFilled = true;

    fields.forEach(function (field) {
      if (field.value.trim() === "") {
        field.classList.add("error");
        allFilled = false;
      } else {
        field.classList.remove("error");
      }
    });

    if (!allFilled) {
      alert("Please fill in all fields before submitting the form.");
      return;
    }

    alert("Thank you! Your form was submitted successfully.");
    form.reset();
  });
});
