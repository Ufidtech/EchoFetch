const fileUrl = chrome.runtime.getURL("src/content/main.html");

(async () => {
  const response = await fetch(fileUrl);
  const html = await response.text();
  document.body.insertAdjacentHTML("beforeend", html);
})();
