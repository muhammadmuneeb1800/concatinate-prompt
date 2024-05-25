let string = document.getElementById("string");
let user = document.getElementById("user");
let operator = document.getElementById("operator");
let Else = document.getElementById("else");
let test = document.getElementById("test");
let nest = document.getElementById("nest");
let log = document.getElementById("log");

let input = document.getElementById("input");
let output = document.getElementById("output");

let inp = document.getElementById("btnInput");
let out = document.getElementById("btnOutput");

string.onclick = function () {
  let Fname = "Muhammad";
  let Lname = "Muneeb";
  let banger = "!";
  alert("Muhammad Muneeb !");
  input.value =
    "let Fname = 'Muhammad' ; let Lname = 'Muneeb' ; let banger = '!'";
  output.value = Fname + " " + Lname + " " + banger;
};

user.onclick = function () {
  let first = prompt("Enter your Firrst Name: ");
  let last = prompt("Enter your Last Name: ");
  output.value = first + " " + last;
  input.value = "";
};

operator.onclick = function () {
  let a = +prompt("Enter Your First Number: ");
  let b = +prompt("Enter Your Second Number: ");

  if (a == b) {
    output.value = "Your Nmbers are Same" + " " + a + " " + b;
  } else {
    output.value = "Your Numbers are Different" + " " + a + " " + b;
  }
};

Else.onclick = function () {
  let a = +prompt("Enter Your Age");
  if (a > 18) {
    alert("You Are Eligibal !");
    output.value = "You Are Elder";
  } else {
    alert("You Are Not Eligibal !");
    output.value = "You Are Baby";
  }
};

test.onclick = function () {
  let a = +prompt("Enter Your Number :");
  if (a >= 40 && a <= 59) {
    alert("You Are Passed ! Your Grade Is D");
    output.value = "Your Number is " + " " + a + " " + "Your Grade Is D";
  } else if (a >= 60 && a <= 79) {
    alert("You Are Passed ! Your Grade Is C");
    output.value = "Your Number is " + " " + a + " " + "Your Grade Is C";
  } else if (a >= 80 && a <= 89) {
    alert("You Are Passed ! Your Grade Is B");
    output.value = "Your Number is " + " " + a + " " + "Your Grade Is B";
  } else if (a >= 90 && a <= 94) {
    alert("You Are Passed ! Your Grade Is A");
    output.value = "Your Number is " + " " + a + " " + "Your Grade Is A";
  } else if (a >= 95 && a <= 100) {
    alert("You Are Passed ! Your Grade Is A+");
    output.value = "Your Number is " + " " + a + " " + "Your Grade Is A+";
  } else {
    alert("You Are Failed ! Your Grade Is F");
    output.value = "Your Number is " + " " + a + "  " + "Your Grade Is F";
  }
};

nest.onclick = function () {
  let a = +prompt("Enter Your Age Number :");
  if (a >= 18) {
    let b = +prompt("Enter Your Weight Number :");
  } else {
    output.value = "Your Are Not Eligibale !";
  }
};

log.onclick = function () {
  let a = prompt("Enter Your Name :");
  let b = +prompt("Enter your Password :");
  if (a === string || b === 12345678) {
    alert("You Are Logined");
    output.value = "Name is " + a + " and Password is " + b;
  } else {
    aler("Your Name or Password is incorrect");
  }
};

inp.onclick = function () {
  input.value = "";
};

out.onclick = function () {
  output.value = "";
};
