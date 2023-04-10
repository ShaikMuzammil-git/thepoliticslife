
/* sending visitors form data to Recruiter Panel */
var script_url =
  "https://script.google.com/macros/s/AKfycbyEZ3xEGZdc3OhRsI9BA-p2JFiNazwPYNmHHTRTzqRAhV9dbZa8hpshqmxS-B7sNtVr/exec";

// Make an AJAX call to Google Script ( for Form in CONTACT US section)
function SubForm() {
  var name = $("#name").val();
  var number = $("#number").val();
  var comments = $("#comments").val();

  if (name != "" && number !== "" && comments != "") {
    document.getElementById("submitConfirmation").style.display = "block";
    document.getElementById("submitBtn").innerHTML = "Thank You";
    var url =
      script_url +
      "?callback=ctrlq&comments=" +
      comments +
      "?callback=ctrlq&number=" +
      number +
      "?callback=ctrlq&name=" +
      name +
      "&action=insert";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url,
      method: "GET",
      dataType: "jsonp",
    });
  } else {
    alert("Please fill all the form details to submit");
  }
}

function closeSubmitConfirmationBox() {
  document.getElementById("submitConfirmation").style.display = "none";
}
