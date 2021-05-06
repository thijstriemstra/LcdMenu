window.onload = function () {
  SUB_MENU = 3;
  LEVELS = 3;

  let items = new Map([
    ["C", 4],
    ["I", 5],
    ["T", 7],
  ]);

  let keys = Array.from(items.keys()).flat().join("");

  let resultBox = document.getElementById("result");
  let errorBox = document.getElementsByClassName("highlighter-rouge error")[0];
  let errorText = document.getElementById("error");
  let copyButton = document.getElementById("copyBtn");

  document.getElementById("editor").addEventListener(
    "input",
    function (i) {
      let read = i.target.innerText;

      read = read.replace(/^\n/gm, "");

      if (read.length <= 0) {
        resultBox.style.display = "none";
        return;
      }

      console.log(read);

      let re = new RegExp(`\^ \*\[\^${keys} \]`, "gm");
      read = read.replace(re, SUB_MENU + "$&");

      for (let j = LEVELS; j > 0; j--) {
        re = new RegExp(`\^ \{${j}\}`, "gm");
        read = read.replace(re, j);
      }

      for (let j = LEVELS; j > 0; j--) {
        re = new RegExp(`${SUB_MENU + " ".repeat(j)}`, "gm");
        read = read.replace(re, j + "" + SUB_MENU);
      }

      re = new RegExp(`\^${SUB_MENU}\[\^${keys} \]\|\^\[${keys}\]\{1\}`, "gm");
      read = read.replace(re, "0$&");

      items.forEach((value, key) => {
        re = new RegExp(`${key}:`, "gm");
        read = read.replace(re, value);
      });

      const readCopy = read;

      for (let k = 0; k < LEVELS; k++) {
        re = new RegExp(`${k}3\\\w\+`, "gm");
        const vsdsd = readCopy.split(re).slice(1);

        vsdsd.forEach((value) => {
          arr = value.split(`${k + 1}`).slice(1);

          regex = `\^${k}${SUB_MENU}`;
          re = new RegExp(regex, "gm");
          var t = k - 1;

          read = read.replace(re, function (match) {
            t++;
            return t === k ? arr.length + "" + match : match;
          });

          for (let j = 0; j < arr.length; j++) {
            const element = arr[j];
            const toFind = k + 1 + "" + element.split("\n")[0];

            re = new RegExp(`\.*${toFind}`, "gm");
            if (parseInt(toFind.charAt(1)) != SUB_MENU)
              read = read.replace(re, j + " $&");
            else read = read.replace(re, "$&*" + j);
          }
        });
      }

      arr = read.split("\n");
      var m = arr.length;
      while (m--) if (arr[m].charAt(1) != "0") arr.splice(m, 1);

      arr.forEach((element, index) => {
        read = read.replace(element, "$&*" + index);
      });

      read = read.replace(/\d{3}\w+\*\d/gm, function (match) {
        return match.split("*").reverse().join("");
      });

      read = read.replace(/ /gm, "0");

      read = `0${arr.length}00\n` + read + "\n";

      read = read
        .split("\n")
        .sort((a, b) => parseInt(a.charAt(2)) - parseInt(b.charAt(2)))
        .join("\n");

      read = read.replace(/\n/g, "\\n");

      final = `${read}`;

      if (read.includes("*")) {
        errorText.innerHTML =
          "<b>Error: Invalid format</b>\n       Ensure that\n       - Each line is unique.\n       - Text follows desired format.";

        errorBox.style.display = "block";
        resultBox.style.display = "none";
        copyButton.disabled = true;
        return;
      } else errorBox.style.display = "none";

      copyButton.disabled = false;
      resultBox.style.display = "inline";
      resultBox.innerHTML = final;
    },
    false
  );
};
