// function that validates the input code for each step
function codeValidator(step){
  var codeInput = document.getElementById("answer").value;
  if (step == 1) {
    if (codeInput == 2390) {
      window.location = "step1_completed.html";
    } else {
      alert("FEL KOD");
      closeAnswerBox();
    }
  } else if (step == 2) {
    if (codeInput == 4802) {
      window.location = "step2_completed.html";
    } else {
      alert("FEL KOD");
      closeAnswerBox();
    }
  } else if (step == 3) {
    if (codeInput == 5) {
      window.location = "step3_completed.html";
    } else {
      alert("FEL KOD");
      closeAnswerBox();
    }
  } else if (step == 4) {
    if (codeInput == 1055) {
      window.location = "step4_completed.html";
    } else {
      alert("FEL KOD");
      closeAnswerBox();
    }
  } else if (step == 5) {
    if (codeInput == 1212) {
      window.location = "step5_completed.html";
    } else {
      alert("FEL KOD");
      closeAnswerBox();
    }
  } else if (step == 6) {
    if (codeInput == 8930) {
      window.location = "step6_completed.html";
    } else {
      alert("FEL KOD");
      closeAnswerBox();
    }
  } else if (step == 7) {
    if (codeInput == 7777) {
      window.location = "step7_completed.html";
    } else {
      alert("FEL KOD");
      closeAnswerBox();
    }
  }
}

function completed(step){
  if (step == 0) {
    window.location = "step1.html";
  } else if (step == 1) {
    window.location = "step2.html";
  } else   if (step == 2) {
      window.location = "step3.html";
  } else   if (step == 3) {
      window.location = "step4.html";
  } else   if (step == 4) {
      window.location = "step5.html";
  } else   if (step == 5) {
      window.location = "step6.html";
  } else   if (step == 6) {
      window.location = "step7.html";
  } else   if (step == 7) {
      window.location = "step8.html";
  }
}
function showClueBox(step) {
  closeAnswerBox();
  document.getElementsByClassName("clueBox")[0].style.display = "block";
  if (step == 3) {
    document.getElementsByClassName("question3")[0].style.display = "none";
  }
}

function showAnswerBox(step) {
  closeClueBox();
  document.getElementsByClassName("answerBox")[0].style.display = "block";
  if (step == 3) {
    document.getElementsByClassName("question3")[0].style.display = "none";
  }
}

function closeClueBox(step) {
  document.getElementsByClassName("clueBox")[0].style.display = "none";
  if (step == 3) {
    document.getElementsByClassName("question3")[0].style.display = "block";
  }
}

function closeAnswerBox(step) {
  document.getElementsByClassName("answerBox")[0].style.display = "none";
  if (step == 3) {
    document.getElementsByClassName("question3")[0].style.display = "block";
  }
}
