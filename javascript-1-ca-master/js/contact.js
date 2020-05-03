    const name = document.querySelector("#name");
    const nameError = document.querySelector("#nameError");

    function checkInput(value) {
      const nameValue = name.value;

      if (nameValue > 0) {
        nameError.style.display = "none";
      } else {
        nameError.style.display = "block";
      }
    }

    const answer = document.querySelector("#answer");
    const answerError = document.querySelector("#answerError");

    answer.addEventListener("keyup", checkLength);

    function checkLength(event) {
      const valueLength = answer.length;

      if (valueLength >= 10) {
        answerError.style.display = "none";
      } else {
        answerError.style.display = "block";
      }
    }

    function validateEmail(email) {
      const regEx = /\S+@\S+\.\S+/;
      return regEx.test(email);

      const email = document.querySelector("#email");
      const emailError = document.querySelector("#emailError");
      const invalidEmailError = document.querySelector("#invalidEmailError");

      const emailValue = email.value;

      if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
      }

      if (validateEmail(emailValue) === true) {
        invalidEmailError.style.display = "none";
      } else {
        invalidEmailError.style.display = "block";
      }
    }

    const address = document.querySelector("#address");
    const addressError = document.querySelector("#addressError");

    answer.addEventListener("keyup", checkLength);

    function checkLength(event) {
      const valueLength = address.length;

      if (valueLength >= 15) {
        answerError.style.display = "none";
      } else {
        answerError.style.display = "block";
      }
    }
