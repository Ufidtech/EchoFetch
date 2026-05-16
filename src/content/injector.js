(async () => {
  const fileUrl = chrome.runtime.getURL("src/content/main.html");
  const response = await fetch(fileUrl);
  const html = await response.text();
  document.body.insertAdjacentHTML("beforeend", html);

  // LOGIC CHECK: Now that the HTML is in the DOM,
  // you can find your HUD elements here if needed.
  console.log("HUD Injected and ready.");
})();

window.addEventListener("keydown", (event) => {
  // Shortcut: Alt + S
  if (event.altKey && event.key === "s") {
    const hud = document.getElementById("echo-fetch-hud");

     if (hud) {
      hud.classList.toggle("ef-hidden");

      // Check if it's visible now to handle your focus logic
      if (!hud.classList.contains("ef-hidden")) {
        const searchBar = document.querySelector(".glow-search");
        if (searchBar) searchBar.focus();
      }
    }
  }
});