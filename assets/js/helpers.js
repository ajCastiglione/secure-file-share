handleClipboard = function (e) {
  e.preventDefault();
  var link = e.target.getAttribute("href");

  // Save the link to the clipboard.
  navigator.clipboard.writeText(link);

  // Append completed class to the button.
  e.target.classList.add("text-teal-400");

  // Update the button text to reflect the copied status.
  e.target.innerHTML = "Successfully copied!";
};

handleFileChange = function (e) {
  // Find the current message.
  let message = document.querySelector(".file-download");

  // If the message is found, remove it.
  if (message) {
    message.classList.add("hide");
  }
};
