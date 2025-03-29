// TODO: this file! :)

// === state ===
const numBankArr = [];
const numOddArr = [];
const numEvenArr = [];

// === render ===
// prints the contents of the array to the html
const output = document.querySelector("#numberBank output");
const outputEven = document.querySelector("#sortedNumbers #evens output");
const outputOdds = document.querySelector("#sortedNumbers #odds output");

const print = () => {
  output.innerHTML = numBankArr;
};

const printEvens = () => {
  outputEven.innerHTML = numEvenArr;
};

const printOdds = () => {
  outputOdds.innerHTML = numOddArr;
};

// enters the contents of the input field "add a number to the Bank" to the numBankArr when user clicks add number
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  // check if input field is not empty
  if (data.get("number") !== "") {
    // adds number from input field to numBankArr
    numBankArr.push(data.get("number"));

    // prints numBankArr
    print();

    // clears input field
    number.value = "";
  }
});

// check if number is odd
const isOdd = (number) => {
  if (number % 2 == 1) {
    return true;
  } else {
    return false;
  }
};

// sort 1 button
const sortOneNumBtn = document.querySelector("#numberBank #sortOne");
sortOneNumBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (numBankArr.length !== 0) {
    const curNum = numBankArr.shift();
    if (isOdd(curNum)) {
      // if current number is odd push to the numOddArr
      numOddArr.push(curNum);

      // update the current odd number displayed in the HTML
      printOdds();

      // update the current number bank to show the sorted number being removed
      print();
    } else {
      // if current number is even push to the numEvenArr
      numEvenArr.push(curNum);

      // update the current even number displayed in the HTML
      printEvens();

      // update the current number bank to show the sorted number being removed
      print();
    }
  }
});

// sort all button
const sortAllNumBtn = document.querySelector("#numberBank #sortAll");
sortAllNumBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const numBankArrLength = numBankArr.length;

  for (let i = 0; i < numBankArrLength; i++) {
    console.log(numBankArr.length);
    const curNum = numBankArr.shift();

    if (isOdd(curNum)) {
      // if current number is odd push to the numOddArr
      numOddArr.push(curNum);

      // update the current odd number displayed in the HTML
      printOdds();

      // update the current number bank to show the sorted number being removed
      print();
    } else {
      // if current number is even push to the numEvenArr
      numEvenArr.push(curNum);

      // update the current even number displayed in the HTML
      printEvens();

      // update the current number bank to show the sorted number being removed
      print();
    }
  }
});

// === script ===
