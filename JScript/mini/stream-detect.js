document.addEventListener("DOMContentLoaded", function () {
  const streamElement = document.querySelector(".window .header .element.streaming");

  fetch("https://decapi.me/twitch/uptime/godenname")
    .then((response) => (response.ok ? response.text() : Promise.reject()))
    .then((text) => {
      if (!streamElement) return;
      const responseText = text.trim().toLowerCase();

      if (!responseText.includes("offline")) {
        streamElement.classList.add("online");
      } else {
        streamElement.classList.remove("online");
      }
    });
});