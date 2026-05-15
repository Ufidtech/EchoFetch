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
      // Toggle the display
      const isHidden = hud.style.display === "none" || hud.style.display === "";
      hud.style.display = isHidden ? "grid" : "none";

      // If we just showed the HUD, move the cursor to the search bar
      if (isHidden) {
        const searchBar = document.querySelector(".glow-search");
        if (searchBar) {
          searchBar.focus();
        }
      }
    }
  }
});
