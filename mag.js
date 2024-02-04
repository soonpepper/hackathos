function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  // Get the container of the image
  var container = img.parentElement;
  // Parse padding values from the container
  var style = window.getComputedStyle(container);
  var padLeft = parseInt(style.paddingLeft, 10);
  var padTop = parseInt(style.paddingTop, 10);

  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  img.parentElement.insertBefore(glass, img);
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  img.addEventListener("mouseleave", function() {
    glass.style.display = "none";
  });

  glass.addEventListener("mouseleave", function() {
    glass.style.display = "none";
  });

  img.addEventListener("mouseenter", function() {
    glass.style.display = "block";
  });

  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left - padLeft - window.pageXOffset;
    y = e.pageY - a.top - padTop - window.pageYOffset;
    return {x : x, y : y};
  }

}