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
  setInitialPosition();

  // Event listeners to remove the magnifier
  glass.addEventListener("mouseleave", removeMagnifier);
  img.addEventListener("mouseleave", removeMagnifier);

  function moveMagnifier(e) {
      var pos, x, y;
      e.preventDefault();
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;

      // Adjust the position of the magnifier glass to be centered on the cursor
      // if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      // if (x < w / zoom) {x = w / zoom;}
      // if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      // if (y < h / zoom) {y = h / zoom;}

      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.scrollX;
      y = y - window.scrollY;
      return {x : x, y : y};
  }

  function removeMagnifier() {
      glass.remove();
  }
}


