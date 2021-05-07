window.onload = function () {
  SUB_MENU = 3;
  LEVELS = 3;

  let items = new Map([
    ["C", 4],
    ["I", 5],
    ["T", 7],
  ]);

  let keys = Array.from(items.keys()).flat().join("");
  let values = Array.from(items.values()).flat().join("");

  let resultBox = document.getElementById("result");
  let errorBox = document.getElementsByClassName("highlighter-rouge error")[0];
  let errorText = document.getElementById("error");
  let copyButton = document.getElementById("copyBtn");

  document.getElementById("editor").addEventListener(
    "input",
    function (i) {
      let read = i.target.innerText;

      /* Remove all empty lines */
      read = read.replace(/^\n/gm, "");

      if (read.length <= 0) {
        resultBox.style.display = "none";
        return;
      }

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

      /* 0th level sub menu */
      re = new RegExp(`\^${SUB_MENU}\[\^${keys} \]\|\^\[${keys}\]\{1\}`, "gm");
      read = read.replace(re, "0$&");

      /* Replace item key with value */
      items.forEach((value, key) => {
        re = new RegExp(`${key}:`, "gm");
        read = read.replace(re, value);
      });

      const readCopy = read;

      /* Count the items in each sub menu */
      for (let k = 0; k < LEVELS; k++) {
        re = new RegExp(`${k}3\\\w\+`, "gm");
        const vsdsd = readCopy.split(re).slice(1);

        vsdsd.forEach((value) => {
          arr = value.split(`${k + 1}`).slice(1);

          regex = `\^${k}${SUB_MENU}`;
          re = new RegExp(regex, "gm");
          var t = k - 1;
          /* Count index of each menu */
          read = read.replace(re, function (match) {
            t++;
            return t === k ? arr.length + "" + match : match;
          });

          /* Find the index of each menu */
          for (let j = 0; j < arr.length; j++) {
            const element = arr[j];
            const toFind = k + 1 + "" + element.split("\n")[0];

            if (read.match(new RegExp(`\\d\\d${toFind}`, "gm"))) continue;

            re = new RegExp(`\.*${toFind}`, "gm");
            if (parseInt(toFind.charAt(1)) != SUB_MENU)
              read = read.replace(re, j + " $&");
            else read = read.replace(re, "$&*" + j);
          }
        });
      }

      /* Get index of level 0 */
      arr = read.split("\n");
      var m = arr.length;
      while (m--) if (arr[m].charAt(1) != "0") arr.splice(m, 1);

      arr.forEach((element, index) => {
        read = read.replace(element, "$&*" + index);
      });

      /* Swap position of * for sub menus */
      read = read.replace(/\d{3}\w+\*\d/gm, function (match) {
        return match.split("*").reverse().join("");
      });

      /* Add count of root level */
      read = `0${arr.length}00\n` + read + "\n";

      readArr = read.split("\n");

      read = [];

      /* Find the parent items */
      const normalRegex = /^\d \d{2}.+/gm;
      const subMenuRegex = new RegExp(
        `\^\\d\\d\[\^0\]${SUB_MENU}\[\^${values}\]\.\+`
      );
      readArr.find(function (value, index) {
        /* Find the parent of normal items */
        if (value.match(normalRegex)) {
          let i = 1;

          let n;
          let pn;

          while (true) {
            while (readArr[index - i].charAt(3) != SUB_MENU) i++;

            let up = readArr[index - i];
            n = up.charAt(2);

            if (n != pn) {
              value = `${value.substr(0, 2)}${up.charAt(0)}${value.substr(2)}`;
              pn = n;
            }

            if (up.charAt(3) == SUB_MENU && up.charAt(2) != 0) i++;
            else break;
          }
          value = value.replace(/ /g, "");
          /* Find the parent of submenu items */
        } else if (value.match(subMenuRegex)) {
          let i = 1;
          let sub = 1;

          while (true) {
            try {
              while (
                readArr[index - i].charAt(2) !=
                value.charAt(2) - "0" - sub
              )
                i++;

              let up = readArr[index - i];

              value = `${value.substr(0, 2)}${up.charAt(0)}${value.substr(2)}`;

              if (up.charAt(2) != 0) {
                sub++;
                i++;
              } else break;
            } catch (error) {
              break;
            }
          }
        }
        read.push(value);
      });

      /* Sort the items */
      read
        .sort(function (a, b) {
          let countA = 0;
          let countB = 0;

          while (a.charAt(countA) < 10 && countA < a.length) countA++;
          while (b.charAt(countB) < 10 && countB < b.length) countB++;

          return (
            parseInt(a.charAt(countA - 2)) - parseInt(b.charAt(countB - 2)) ||
            parseInt(a.charAt(countA - 1)) - parseInt(b.charAt(countB - 1))
          );
        })
        .forEach((a, index) => {
          let count = 0;
          while (a.charAt(count) < 10 && count < a.length) count++;

          if (count >= 5) {
            if (a.charAt(count - 1) == SUB_MENU) {
              start = 2;
              end = count - 4;
            } else {
              start = 1;
              end = count - 3;
            }
            read[index] =
              a.substr(0, start) +
              `<span class="o">${a.substr(start, end)}</span>` +
              a.substr(start + end);
          }
        });
      read = read.join("\n");

      /* Replace new line with literal */
      read = read.replace(/\n/g, "\\n");

      /* Display errors if any */
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
      resultBox.innerHTML = read;
    },
    false
  );
};
