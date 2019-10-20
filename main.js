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
