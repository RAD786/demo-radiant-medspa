const chatWidget = document.getElementById("chatWidget");
const chatFab = document.getElementById("chatFab");
const chatTrigger = document.getElementById("chatTrigger");
const ctaChat = document.getElementById("ctaChat");
const chatClose = document.getElementById("chatClose");

function openChat() {
  chatWidget.classList.add("show");
}

function closeChat() {
  chatWidget.classList.remove("show");
}

chatTrigger?.addEventListener("click", openChat);
ctaChat?.addEventListener("click", openChat);
chatFab?.addEventListener("click", openChat);
chatClose?.addEventListener("click", closeChat);
