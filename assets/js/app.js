const body = document.querySelector("body");
const toggleBtn1 = document.querySelector("#theme-1");
const toggleBtn2 = document.querySelector("#theme-2");
const toggleBtn3 = document.querySelector("#theme-3");

DarkTheme();
function DarkTheme() {
  $(body).css("backgroundColor", "hsl(222, 26%, 31%)");
  $(".content-head").css("color", "hsl(0, 0%, 100%)");
  $(".theme-toggle").css("backgroundColor", "hsl(223, 31%, 20%)");
  $(".toggle-hide").css(" backgroundColor", "hsl(223, 31%, 20%)");
  $(".toggle-btn").css("backgroundColor", "hsl(6, 63%, 50%)");
  $("#theme-2").css("backgroundColor", "hsl(223, 31%, 20%)");
  $("#theme-3").css("backgroundColor", "hsl(223, 31%, 20%)");
  $(".calculate-screen").css({
    backgroundColor: "hsl(224, 36%, 15%)",
    color: "hsl(0, 0%, 100%)",
  });
  $(".calculate-keypad").css("backgroundColor", "hsl(223, 31%, 20%)");
  $(".key-item").css({
    color: "hsl(221, 14%, 31%)",
    backgroundColor: "hsl(30, 25%, 89%)",
  });
  $(".key-item").hover(
    function () {
      $(this).css("background-color", "hsl(0, 0%, 100%)");
    },
    function () {
      $(this).css("background-color", "hsl(30, 25%, 89%)");
    }
  );

  $(".key-item-delete").css("backgroundColor", "hsl(225, 21%, 49%)");
  $(".key-item-delete").hover(
    function () {
      $(this).css("background-color", "hsl(224, 28%, 35%)");
    },
    function () {
      $(this).css("background-color", "hsl(225, 21%, 49%)");
    }
  );
  $(".reset-key").css("backgroundColor", "hsl(225, 21%, 49%)");
  $(".reset-key").hover(
    function () {
      $(this).css("background-color", "hsl(224, 28%, 35%)");
    },
    function () {
      $(this).css("background-color", "hsl(225, 21%, 49%)");
    }
  );
  $(".equals-key").css({
    backgroundColor: "hsl(6, 63%, 50%)",
    color: "hsl(30, 25%, 89%)",
  });
  $(".equals-key").hover(
    function () {
      $(this).css("background-color", "hsl(6, 70%, 34%)");
    },
    function () {
      $(this).css("background-color", "hsl(6, 63%, 50%)");
    }
  );
}

toggleBtn1.addEventListener("click", function () {
  DarkTheme();
});

function LightThema() {
  $(body).css("backgroundColor", " hsl(0, 0%, 90%)");
  $(".content-head").css("color", "hsl(60, 10%, 19%)");
  $(".theme-toggle").css("backgroundColor", "hsl(0, 5%, 81%)");
  $(".toggle-hide").css(" backgroundColor", "hsl(0, 5%, 81%)");
  $(".toggle-btn").css("backgroundColor", "hsl(25, 98%, 40%)");
  $("#theme-1").css("backgroundColor", "hsl(0, 5%, 81%)");
  $("#theme-3").css("backgroundColor", "hsl(0, 5%, 81%)");
  $(".calculate-screen").css({
    backgroundColor: "hsl(0, 0%, 93%)",
    color: "hsl(60, 10%, 19%)",
  });
  $(".calculate-keypad").css("backgroundColor", "hsl(0, 5%, 81%)");
  $(".key-item").css({
    color: "hsl(221, 14%, 31%)",
    backgroundColor: "hsl(30,25%,89%)",
  });
  $(".key-item").hover(
    function () {
      $(this).css("background-color", "hsl(0, 0%, 100%)");
    },
    function () {
      $(this).css("background-color", "hsl(30,25%,89%)");
    }
  );
  $(".key-item-delete").css("backgroundColor", "hsl(185, 42%, 37%)");

  $(".key-item-delete").hover(
    function () {
      $(this).css("background-color", "hsl(185, 58%, 25%)");
    },
    function () {
      $(this).css("background-color", "hsl(185, 42%, 37%)");
    }
  );
  $(".reset-key").css("backgroundColor", "hsl(185, 42%, 37%)");
  $(".reset-key").hover(
    function () {
      $(this).css("background-color", "hsl(185, 58%, 25%)");
    },
    function () {
      $(this).css("background-color", "hsl(185, 42%, 37%)");
    }
  );
  $(".equals-key").css({
    backgroundColor: "hsl(25, 98%, 40%)",
    color: "hsl(0, 0%, 100%)",
  });
  $(".equals-key").hover(
    function () {
      $(this).css("background-color", " hsl(25, 99%, 27%)");
    },
    function () {
      $(this).css("background-color", " hsl(25, 98%, 40%)");
    }
  );
  $(".attribution").css("color", "hsl(60, 10%, 19%)");
}

toggleBtn2.addEventListener("click", function () {
  LightThema();
});

function GradienThema() {
  $(body).css("backgroundColor", "hsl(268, 75%, 9%)");
  $(".content-head").css("color", "hsl(52, 100%, 62%)");
  $(".theme-toggle").css("backgroundColor", " hsl(268, 71%, 12%)");
  $(".toggle-hide").css(" backgroundColor", " hsl(268, 71%, 12%)");
  $(".toggle-btn").css("backgroundColor", "hsl(176, 100%, 44%)");
  $("#theme-1").css("backgroundColor", "hsl(268, 71%, 12%)");
  $("#theme-2").css("backgroundColor", "hsl(268, 71%, 12%)");
  $(".calculate-screen").css({
    backgroundColor: "hsl(268, 71%, 12%)",
    color: "hsl(52, 100%, 62%)",
  });
  $(".calculate-keypad").css("backgroundColor", "hsl(268, 71%, 12%)");
  $(".key-item").css({
    color: "hsl(52, 100%, 62%)",
    backgroundColor: "hsl(268, 47%, 21%)",
  });
  $(".key-item").hover(
    function () {
      $(this).css("background-color", "hsl(285, 91%, 52%)");
    },
    function () {
      $(this).css("background-color", " hsl(268, 47%, 21%)");
    }
  );
  $(".key-item-delete").css("backgroundColor", "hsl(281, 89%, 26%)");
  $(".key-item-delete").hover(
    function () {
      $(this).css("background-color", "hsl(285, 91%, 52%)");
    },
    function () {
      $(this).css("background-color", "hsl(281, 89%, 26%)");
    }
  );
  $(".reset-key").css("backgroundColor", "hsl(281, 89%, 26%)");
  $(".reset-key").hover(
    function () {
      $(this).css("background-color", "hsl(285, 91%, 52%)");
    },
    function () {
      $(this).css("background-color", "hsl(281, 89%, 26%)");
    }
  );
  $(".equals-key").css({
    backgroundColor: "hsl(176, 100%, 44%)",
    color: "hsl(198, 20%, 13%)",
  });
  $(".equals-key").hover(
    function () {
      $(this).css("background-color", "hsl(177, 92%, 70%)");
    },
    function () {
      $(this).css("background-color", "hsl(176, 100%, 44%)");
    }
  );
}

toggleBtn3.addEventListener("click", function () {
  GradienThema();
});

$(document).ready(function () {
  let resultContent = $(".operation-result");
  let firstNumContent = $(".first-num");
  let secondNumContent = $(".second-num");
  let operationContent = $(".operation-content");

  let firstNumber = "";
  let secondNumber = "";
  let operation = "";
  let result = "";
  let nextStep = false;

  function addNumber(num) {
    if (nextStep) {
      secondNumber += num;
      secondNumContent.fadeIn();
      secondNumContent.html(secondNumber);

      console.log("2ci:", secondNumber);
    } else {
      firstNumber += num;
      firstNumContent.fadeIn();
      firstNumContent.html(firstNumber);
      console.log("1ci:", firstNumber);
    }
  }

  function chooseOperation(opr) {
    operation += opr;
    nextStep = true;
    operationContent.fadeIn();
    operationContent.html(operation);
    if(operation==""){
      
    } operationContent.fadeIn();
    operationContent.html(operation);
  }

  function resultEqual() {
    switch (operation) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "/":
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
        break;
      case "x":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    }

    result = result.toString();
    firstNumber = result;
    firstNumContent.fadeIn();
    firstNumContent.html(result);
    operation = "";
    secondNumber = "";

    $(secondNumContent).css("display", "none");
    $(operationContent).css("display", "none");
  }

  function clearContent() {
    firstNumber = "";
    secondNumber = "";
    result = "";
    operation = "";
    nextStep = false;

    firstNumContent.fadeOut();
    secondNumContent.fadeOut();
    resultContent.fadeOut();
    operationContent.fadeOut();
  }

  function deleteKey() {
    if (result != 0) {
      result = result.substring(0, result.length - 1);
      console.log(result);
    } else if (firstNumber != "" && secondNumber != "") {
      secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    } else if (operation != "") {
      operation = operation.substring(0, operation.length - 1);
    } else {
      if (secondNumber.length === 0) {
        firstNumber = firstNumber.substring(0, firstNumber.length - 1);
      } else {
        if (result == 0) {
          firstNumber = "";
          secondNumber = "";
          nextStep = false;
          operation = "";
          result = "";
        }
      }
    }

    firstNumContent.html(firstNumber);
    secondNumContent.html(secondNumber);
    resultContent.html(result);
    operationContent.html(operation);
  }

  $(document).on(
    "click",
    ".key-item p, .key-item-delete p, .reset, .equal",
    function () {
      let keyBtn = $(this);
      let keyBtnVal = keyBtn.html();
      // console.log(keyBtnVal);

      if (keyBtn.hasClass("number")) {
        addNumber(keyBtnVal);
      } else if (keyBtn.hasClass("operation")) {
        chooseOperation(keyBtnVal);
        console.log("operation:", operation);
      } else if (keyBtn.hasClass("equal")) {
        resultEqual();
        console.log(typeof result, result);
      } else if (keyBtn.hasClass("reset")) {
        clearContent();
      } else {
        deleteKey();
        console.log("del:", keyBtnVal);
      }
    }
  );
});
