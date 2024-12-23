const input = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

const isValid = (str, int) => {
  let errorText = "";

  if (!str || str.match(/[e.]/g)) {
    errorText = 'Please enter a valid number.';
  } else if (int < 1) {
    errorText = 'Please enter a number greater than or equal to 1.';
  } else if (int > 3999) {
    errorText = 'Please enter a number less than or equal to 3999.';
  } else {
    return true;
  }

  output.innerText = errorText;
  output.classList.add("alert");

  return false;
};

const clearOutput = () => {
  output.innerText = "";
  output.classList.remove("alert");
};

input.addEventListener("submit", e => {
  e.preventDefault();
  updateUI();
});

convertButton.addEventListener("click", () => {
  updateUI();
});

const updateUI = () => {
  const numStr = document.getElementById("number").value;
  const int = parseInt(numStr, 10);

  clearOutput();

  if (isValid(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
};
