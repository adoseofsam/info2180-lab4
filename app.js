window.onload = function() {
  var searchButton = document.getElementById("btn");
  var httpRequest;

  searchButton.onclick = Request;
  function Request() {
    event.preventDefault();
    httpRequest = new XMLHttpRequest();
    var userInput = document.getElementById("inputField").value;
    var url = "superheroes.php" + "?query=" + userInput;

    httpRequest.onreadystatechange = getResults;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
}