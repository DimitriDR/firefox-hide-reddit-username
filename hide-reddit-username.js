/* To replace your Reddit username when commenting */
function hideUsername() {
  // There might be multiple elements displaing the username. Hide them all.
  usernameElements = document.getElementsByClassName("_23wugcdiaj44hdfugIAlnX")
  for (let i = 0; i < usernameElements.length; i++) {
    usernameElements[i].textContent = "Whiffkaws"
  }
}

// Hide once immediately
hideUsername();

// Reddit also sometimes shows the username without doing a reload.
// So lets just attempt to remove it every second. Shouldnt be too much
// of a performance hog...
window.setInterval(hideUsername, 1000)

