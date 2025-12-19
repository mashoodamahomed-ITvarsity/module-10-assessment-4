document.addEventListener("mousemove", function (event) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = event.pageX + "px";
  sparkle.style.top = event.pageY + "px";

  document.body.appendChild(sparkle);

  setTimeout(function () {
    sparkle.remove();
  }, 600);
});
