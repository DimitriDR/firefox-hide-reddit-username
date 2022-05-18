/* To replace your Reddit username when commenting */

function hideUsername() {

  // Get the username
  const username = document.getElementsByClassName("_2BMnTatQ5gjKGK5OWROgaG")[0].textContent;

  // There might be multiple elements displaying the username.
  usernameElements = document.getElementsByClassName("_23wugcdiaj44hdfugIAlnX")
  for (let i = 0; i < usernameElements.length; i++) {

    // Does the element containing a username actually contain "our" user name?
    if (usernameElements[i].textContent === username) {
      // Yes: replace it.
      usernameElements[i].textContent = "Whiffkaws"
    }
  }
}

// We should also wait for the website to have finished loading completely.
// Otherwise it may fail on a very slow internet connection.
window.addEventListener("load", () => {

  // Hide once immediately
  hideUsername();

  // Reddit also sometimes adds new user name elements, without reloading the dom.
  // So lets just attempt to remove them every second. Shouldnt be too much
  // of a performance hog...
  window.setInterval(hideUsername, 1000)
});

