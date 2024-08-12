// assignment 1

// create  dynamic options for font-size select from 16 to 30
let font_size = document.querySelector("#font-size");
let font_size_option;

for (i = 16; i <= 30; i++) {
  font_size_option = document.createElement("option");
  font_size_option.setAttribute("value", i);
  font_size_option.textContent = i + "px";
  font_size_option.style.fontSize = i + "px";

  font_size.appendChild(font_size_option);
}

// when i click in font family it apply to the text
let font_family = document.querySelector("#font-family");
let result = document.querySelector(".result");

font_family.addEventListener("change", function () {
  selectedFont = font_family.value;
  result.style.fontFamily = selectedFont;

  // save choose in localStorage
  localStorage.setItem("fontFamily", font_family.value);
});

// when click in font color it apply to the text
let fontColor = document.getElementById("font-color");

fontColor.addEventListener("change", function () {
  selectedColor = fontColor.value;
  result.style.color = selectedColor;

  // save choose in localStorage
  localStorage.setItem("color", fontColor.value);
});

// when click in font size it apply to the text
font_size.addEventListener("change", function () {
  selectedFontSize = font_size.value + "px";
  result.style.fontSize = selectedFontSize;

  // save choose in localStorage
  localStorage.setItem("fontSize", font_size.value);
});

// Font Family
let storedFontFamily = localStorage.getItem("fontFamily");

if (storedFontFamily) {
  // take fontfamily form localStorage in load
  result.style.fontFamily = localStorage.getItem("fontFamily");

  // make the apper option whoes option it have been choosen
  [...font_family.options].forEach((opt) => {
    if (opt.value !== localStorage.getItem("fontFamily")) {
      opt.removeAttribute("selected");
    } else if (opt.value === localStorage.getItem("fontFamily")) {
      opt.setAttribute("selected", "");
    }
  });
} else {
  result.style.fontFamily = font_family.value;
}

//  Color
let storedColor = localStorage.getItem("color");

if (storedColor) {
  // take color form localStorage in load
  result.style.color = localStorage.getItem("color");

  // make the apper option whoes option it have been choosen
  [...fontColor.options].forEach((opt) => {
    if (opt.value !== localStorage.getItem("color")) {
      opt.removeAttribute("selected");
    } else if (opt.value === localStorage.getItem("color")) {
      opt.setAttribute("selected", "");
    }
  });
} else {
  result.style.color = fontColor.value;
}

// Font Size
let storedFontSize = localStorage.getItem("fontSize");

if (storedFontSize) {
  // take fontsize form localStorage in load
  result.style.fontSize = localStorage.getItem("fontSize") + "px";

  // make the apper option whoes option it have been choosen
  [...font_size.options].forEach((opt) => {
    if (opt.value !== localStorage.getItem("fontSize")) {
      opt.removeAttribute("selected");
    } else if (opt.value === localStorage.getItem("fontSize")) {
      opt.setAttribute("selected", "");
    }
  });
} else {
  result.style.fontSize = font_size.value + "px";
}

// assignment 2

let username = document.querySelector("input[name='username']");
let password = document.querySelector("input[name='password']");
let email = document.querySelector("input[name='email']");
let background = document.querySelector("#background");

// save input value in localStorage
username.addEventListener("input", function () {
  sessionStorage.setItem("username", username.value);
});

password.addEventListener("input", function () {
  sessionStorage.setItem("password", password.value);
});

email.addEventListener("input", function () {
  sessionStorage.setItem("email", email.value);
});

background.addEventListener("change", function () {
  sessionStorage.setItem("background", background.value);
  document.body.style.backgroundImage = `url(${background.value})`;
});

// take input value from localStorage while load
function inputLoad() {
  let savedBackground = sessionStorage.getItem("background");
  if (savedBackground) {
    background.value = savedBackground;
    document.body.style.backgroundImage = `url(${savedBackground})`;
  }

  username.value = sessionStorage.getItem("username") || "";
  password.value = sessionStorage.getItem("password") || "";
  email.value = sessionStorage.getItem("email") || "";
}

inputLoad();
