function copyCodeToClipboard() {
  var copyText = document.getElementById("myCode");

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(copyText);
    range.select();
    document.execCommand("Copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().addRange(range);
    document.execCommand("Copy");
  }

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = copyText.innerHTML;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
  tooltip.style.opacity = "0";
}

function overFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.style.opacity = "1";
}