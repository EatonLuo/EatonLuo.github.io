document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".item-header");

  headers.forEach(function (header) {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const expanded = this.classList.contains("expanded");

      headers.forEach(function (h) {
        h.classList.remove("expanded");
        h.nextElementSibling.style.height = "0";
      });

      if (!expanded) {
        this.classList.add("expanded");
        content.style.height = content.scrollHeight + "px";
        content.querySelector("video").play();
      }
    });
  });
});
