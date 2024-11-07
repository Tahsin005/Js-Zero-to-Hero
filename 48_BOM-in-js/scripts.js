console.log("Tahsin");
// location.href = 'https://developer.mozilla.org/en-US/'


// 1. location - Displays the current URL of the document
function showLocation() {
  console.log("Current URL: " + window.location.href);
}

// 2. history - Navigates back to the previous page in the browser history
function goBack() {
  window.history.back();
}

// 3. innerHeight - Gets the inner height of the window in pixels
function showInnerHeight() {
  console.log("Window inner height: " + window.innerHeight + "px");
}

// 4. innerWidth - Gets the inner width of the window in pixels
function showInnerWidth() {
  console.log("Window inner width: " + window.innerWidth + "px");
}

// 5. open() - Opens a new browser window or tab with a specified URL
function openNewWindow() {
  window.open("https://example.com", "_blank", "width=600,height=400");
}

// 6. close() - Closes the currently focused window
let newWindow;
function openAndCloseWindow() {
  newWindow = window.open("", "", "width=200,height=100");
  setTimeout(() => {
    newWindow.close();
  }, 2000);
}

// 7. resizeBy() - Resizes the current window by specified width and height
function resizeByExample() { // will only work with the window that have been opened with open method
  window.resizeBy(100, 100);
}

// 8. resizeTo() - Resizes the current window to specified width and height
function resizeToExample() { // will only work with the window that have been opened with open method
  window.resizeTo(800, 600);
}

// 9. moveTo() - Moves the window to specified coordinates on the screen
function moveToExample() {
  window.moveTo(100, 100);
}

// 10. moveBy() - Moves the window by specified x and y pixels
function moveByExample() {
  window.moveBy(50, 50);
}

// 11. scrollBy() - Scrolls the document by specified x and y pixels
function scrollByExample() {
  window.scrollBy(0, 100); // Scrolls down by 100px
}

// 12. scroll() - Scrolls the document to a specified position
function scrollExample() {
  window.scroll(0, 200); // Scrolls to the y-position of 200px
}

// 13. scrollTo() - Scrolls to a specified position
function scrollToExample() {
  window.scrollTo(0, 0); // Scrolls to the top of the page
}

// 14. print() - Opens the print dialog
function printPage() {
  window.print();
}

// 15. document - Accesses and modifies HTML elements
function modifyDocument() {
  document.body.style.backgroundColor = "lightblue";
  console.log("Document title: " + document.title);
}
