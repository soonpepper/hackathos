function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

  // Create magnifier glass
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  img.parentElement.insertBefore(glass, img);

  // Set background properties for the magnifier glass
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  // Event listeners for moving the magnifier
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);

  // Event listeners for touch screens
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  // Event listeners to remove the magnifier
  glass.addEventListener("mouseleave", removeMagnifier);
  img.addEventListener("mouseleave", removeMagnifier);

  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;

    // New logic to center the magnifier on the cursor
    x = x - (w / zoom);
    y = y - (h / zoom);

    // Prevent the magnifier glass from being positioned outside the image
    if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
    if (x < 0) { x = 0; }
    if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
    if (y < 0) { y = 0; }

    glass.style.left = x + "px";
    glass.style.top = y + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w / 2) + "px -" + ((y * zoom) - h / 2) + "px";
}

function getCursorPos(e) {
  var a, x = 0, y = 0;
  e = e || window.event;
  /* Get the x and y positions of the image: */
  a = img.getBoundingClientRect();

  /* Calculate the cursor's x and y coordinates, relative to the image: */
  x = e.pageX;
  y = e.pageY;

  /* Consider any page scrolling: */
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;
  return {x : x, y : y};
}

  function removeMagnifier() {
      glass.remove();
  }
}

