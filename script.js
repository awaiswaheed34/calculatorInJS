var sc = document.getElementsByClassName("disp");
var lastNum = 0;
var lastOp = "";
function pressed(num) {
  if (sc[0].innerHTML == "0") {
    sc[0].innerHTML = num;
  } else {
    sc[0].innerHTML += num;
  }
}

function clearScreen() {
  sc[0].innerHTML = "0";
  lastNum = 0;
  lastOp = "";
}

function add() {
  if (lastNum != 0) {
    equall();
  } else {
    lastNum = parseInt(sc[0].innerHTML);
    lastOp = "+";
    sc[0].innerHTML = "0";
  }
}

function sub() {
  if (lastNum != 0) {
    equall();
  } else {
    lastNum = parseInt(sc[0].innerHTML);
    lastOp = "-";
    sc[0].innerHTML = "0";
  }
}

function mult() {
  if (lastNum != 0) {
    equall();
  } else {
    lastNum = parseInt(sc[0].innerHTML);
    lastOp = "*";
    sc[0].innerHTML = "0";
  }
}

function divide() {
  if (lastNum != 0) {
    equall();
  } else {
    lastNum = parseInt(sc[0].innerHTML);
    lastOp = "/";
    sc[0].innerHTML = "0";
  }
}

function equall() {
  if (lastOp == "" || lastNum == 0) {
    return;
  }
  if (lastOp == "+") {
    var val = parseInt(sc[0].innerHTML) + lastNum;
    sc[0].innerHTML = val;
  } else if (lastOp == "-") {
    var val = parseInt(sc[0].innerHTML) - lastNum;
    sc[0].innerHTML = val;
  } else if (lastOp == "*") {
    var val = parseInt(sc[0].innerHTML) * lastNum;
    sc[0].innerHTML = val;
  } else if (lastOp == "/") {
    var val = parseInt(sc[0].innerHTML) / lastNum;
    sc[0].innerHTML = val;
  }
  console.log(lastOp, lastNum);
  lastOp = "";
  lastNum = 0;
}
