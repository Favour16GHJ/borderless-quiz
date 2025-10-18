      // TODO 1: Declare & assign variables pointing to the corresponding element(s)
      // statement should be the "statement" div
      // optionButtons should be all the elements within the "options" div
      // explanation should be the "explanation" div

      const statement = document.getElementById("statement");
      const optionButtons = document.getElementById("options").children;
      const explanation = document.getElementById("explanation");
      console.log(optionButtons);

      // TODO 2: Declare & assign a variable called fact
      // Its value should be an object with a statement, true/false answer, and explanation

      const fact = {
        statement : "Variables are JavaScript's containers ",
        answer: true,
        explanation:
          "Variables in JavaScript are seen as placeholders for values, expressions etc.",
      };

      // TODO 3: Set the text of the statement element to the fact's statement

      statement.textContent = fact.statement;

      // TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
      // disable(button) should set the button element's attribute "disabled" to the value ""
      // enable(button) should remove the attribute "disabled" from the button element

      function disable(button) {
        button.setAttribute("disabled", "");
      }
      function enable(button) {
        button.removeAttribute("disabled");
      }

      // Check if working
      // disable(optionButtons[0])

      // Trial One
      // for (let i = 0; i < optionButtons.length; i++) {
      //   let trueButton = optionButtons[0]
      //   let falseButton = optionButtons[1]
      //   if (trueButton) {
      //     trueButton.setAttribute("disabled", "")
      //   };
      //   console.log(trueButton);
      // }

      // TODO 5: Declare an isCorrect function that compares a guess to the right answer
      // isCorrect(guess) should return true if the guess matches the fact's answer

      function isCorrect(guess) {
        if (guess === fact.answer) {
          return true;
        } else {
          return false;
        }
      }
      // TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
      // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

      for (let i = 0; i < optionButtons.length; i++) {
        document.addEventListener("click", function () {
          explanation.textContent = fact.explanation;

          // TODO 7: Within the event handler function,
          // Use a for loop to disable all the option buttons

          for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].setAttribute("disabled", "");
          }

          // TODO 8: Within the event handler function,
          // Get the guessed value from the clicked button
          // Use a conditional to compare the guess to the fact's answer
          // and add the "correct"/"incorrect" class as appropriate

          let guessedValue = event.target.value;
          // if (guessedValue === "true") {
          //   return true;
          // } else {
          //   return false;
          // }

          if (isCorrect(guessedValue)) {
            // console.log("Yay")
            event.target.classList.add("correct");
          } else {
            event.target.classList.add("incorrect");
          }
        });
      }

