

document.addEventListener("DOMContentLoaded", function() {
  var note = localStorage.getItem("note");
  var noteName = localStorage.getItem("noteName");
  if (note) {
    document.getElementById("text-box").value = note;
  } else {
    document.getElementById("text-box").value = "";
  }

  if (noteName) {
    document.getElementById("noteNameDisplay").textContent = noteName;
  } else {
    document.getElementById("noteNameDisplay").textContent = "[Untitled]";
  }


});

function saveNote() {
  var note = document.getElementById("text-box").value;
  localStorage.setItem("note", note);
  localStorage.setItem("noteName", document.getElementById("noteNameDisplay").textContent);
}

// Prompt user to name the note and display the note name
function nameNote() {
  var noteName = prompt("What do you want to name your note?");
  if (noteName) {
    localStorage.setItem("noteName", noteName);
    document.getElementById("noteNameDisplay").textContent = noteName;
  } else {
    localStorage.removeItem("noteName");
    document.getElementById("noteNameDisplay").textContent = "[Untitled]";
  }
}

function newNote() {
  document.getElementById("text-box").value = "";
  document.getElementById("noteNameDisplay").textContent = "[Untitled]";
}

function fontSize() {
  var fontSize = document.getElementById("font-size").value;
  if (fontSize < 101) {
    localStorage.setItem("fontSize", fontSize);
    document.getElementById("text-box").style.fontSize = fontSize + "px";
  } else {
    fontSize = localStorage.getItem("fontSize");
    document.getElementById("font-size").value = fontSize;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var fontSize = localStorage.getItem("fontSize");
  if (fontSize) {
    document.getElementById("font-size").value = fontSize;
    document.getElementById("text-box").style.fontSize = fontSize + "px";
  } else {
    document.getElementById("font-size").value = "18";
    document.getElementById("text-box").style.fontSize = "18px";
  }
});


document.addEventListener("DOMContentLoaded", function() {
  let numLinks = localStorage.getItem("numLinks");
  numLinks = numLinks ? parseInt(numLinks, 10) : 0;
  let linkArray = numLinks > 0 ? JSON.parse(localStorage.getItem("linkArray")) : [];

  // Make links exist
  for (let i = 0; i < numLinks; i++) {
    const link = document.createElement("a");
    link.href = linkArray[i];
    link.target = "_blank";
    link.classList.add("link-box-link");
    const node = document.createTextNode(linkArray[i]);
    link.appendChild(node);
    const element = document.getElementById("linkBox");
    element.appendChild(link);
  }

  window.linkClipboard = function() {
    const input = document.getElementById("linkInput").value;
    if (!input) return;

    // Create a new anchor element
    const link = document.createElement("a");
    link.href = input;
    const node = document.createTextNode(input);
    link.appendChild(node);
    link.target = "_blank";
    link.classList.add("link-box-link");

    // Append the link to the element with id "linkBox"
    const element = document.getElementById("linkBox");
    element.appendChild(link);

    // Clear input field
    document.getElementById("linkInput").value = "";

    // Update the number of links
    linkArray.push(input);
    numLinks++;

    // Save the updated array and numLinks to localStorage
    localStorage.setItem("linkArray", JSON.stringify(linkArray));
    localStorage.setItem("numLinks", numLinks.toString());
  };

  window.deleteLink = function() {
    const linkBox = document.getElementById("linkBox");
    if (numLinks > 0) {
      linkBox.removeChild(linkBox.lastChild);
      linkArray.pop();
      numLinks--;
      localStorage.setItem("linkArray", JSON.stringify(linkArray));
      localStorage.setItem("numLinks", numLinks.toString());
    }
  };
});

function checkEnter(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default form submission
    window.linkClipboard(); // Call the linkClipboard function
  }
}

function linkClose() {
  const linkBox = document.getElementById("linkBox");
  linkBox.innerHTML = "";
  localStorage.setItem("numLinks", "0");
}

document.addEventListener("DOMContentLoaded", function() {

});