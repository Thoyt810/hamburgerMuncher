$(function() {
  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var neweat = $(this).data("neweat");

    var neweatState = {
      eaten: neweat
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: neweatState
    }).then(
      function() {
        console.log("changed eat to", neweat);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      eat: $("[name=eat]:checked").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
