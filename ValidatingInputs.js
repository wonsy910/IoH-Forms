function validatingInputs() {
  let textInputs = document.querySelectorAll("input[type=text]");
  let dateInputs = document.querySelectorAll("input[type=date]");
  let emailInputs = document.querySelectorAll("input[type=email]");
  let selectInputs = document.querySelectorAll("select");
  let checkBox = document.querySelectorAll("input[type=checkbox]");
  let radioBox = document.querySelectorAll("input[type=radio]");
  let textarea = document.querySelectorAll("textarea");

  for(let i = 0; i < textInputs.length; i++) {
    if(textInputs[i].value === "") {
        return false;
    }
    else {
        return true;
    }
  }
}
