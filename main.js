document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#Donate'))
    return;

	// Don't follow the link
	event.preventDefault();
  if(document.getElementById('Donate').innerHTML === "@Christopher-Gsell (Venmo)")
  {
    document.getElementById('Donate').innerHTML = "Donate";
  }
  else {
    document.getElementById('Donate').innerHTML = "@Christopher-Gsell (Venmo)";
  }

	// Log the clicked element in the console

}, false);


function showMap() {
  console.log("hello");
  // var storage = firebase.storage();
  // var pathReference = storage.ref('0_0.png');

  // var img = document.createElement("img");
  // img.src = pathReference;
  // var src = document.getElementById("mapImage");
  // src.appendChild(img);
}
