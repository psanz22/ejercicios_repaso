"use strict";

// setInterval , setTimeout, clearTimeout, clearInterval

const removeMsg = () => {
  const msg = document.querySelector(".msg");
  msg.classList.add("window");
  msg.innerHTML = "Su sesión ha expirado, jefa.";
};

setTimeout(removeMsg, 15000);
