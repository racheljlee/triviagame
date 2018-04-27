# triviagame

The theme I picked for my trivia game project was `Adventure Time`, a hilarious, absurd, and quirky cartoon show enjoyed by people of all ages. It's a silly show with cute and funny characters and so many memorable lines.

I only picked `10 questions` for the user to answer.

`HTML Steps`

Using bootstrap, I put all of my content inside a `div class="container"` and separated relevant sections by `div class="rows"`:
    -header div containing the title
    -starter div containing a "Start Game" button and a fun image to be triggered
    -timer div containing a 100 second timer
    -questions div containing all 10 questions in the format of input radio buttons.
    -ender div containing a "Submit Game" button to end the trivia and populate results
    -results div containing the user's final score

`Javascript & jQuery Steps`
1. First I stored all of the html elements I needed access to in variables to make it easier to refer back to them when I needed them.

2. Then I created 2 variables, `totalScore` and `timer` which contains number values. By setting the totalScore variable to 0, it serves as the initial user score at the start of the game. 0 is the starting point. The timer was set to the value 100 because I wanted to give the user 100 seconds to complete the game.

3. I also inserted the timer into the appropriate div to display the timer countdown on the screen for the user.

4. I also had to initially hide many of the divs at the point in time when the page loads first. This is because I wanted to toggle certain divs to show after certain event listeners took place. For instance, when you first load the game, all of the content divs are hidden except for the title div and the start button div.

5. I then coded an event listener for when the user clicks on the "Start Game" button so that on click, it triggers the image above to animate (to indicate that the game is embarking on its adventure!) and also shows the previously hidden divs for the timer, questions, and submit button.

6. Then I had to code the timer to work. I had to declare a `run function` that would run an `intervalId` with the value of `setInterval(decrement, 1000)` which causes the timer of 100 seconds that I had set previously to decrement each second. Then I had to declare a `decrement function` to perform specific tasks when the timer reached 0 seconds. I used an `if/else statement`. I set the condition of the `if statement` for `timer === 0` so that if the timer reaches 0 before all the questions are answered, then I would stop the interval decrementing further (by using `clearInterval(intervalId)`) so that it did not countdown into the negatives. I also had it so that when the timer reached 0, it would hide the divs containing the questions and the submit button so that the user cannot continue answering the questions. It then replaces the html content of the timer div by removing the timer and inserting a message saying, "TIME'S UP!" The `else statement`'s logic was that if the timer has yet to reach 0 then the timer will continue to decrement and display it in the timer div. (Although I'm not sure if this else statement is even necessary?)

7. I then had to code an event listener function for when the user clicks on the answer inputs for each question. I first had to create a variable for `value` which was set to the value of the `this`, which was whatever the user clicked on--the answer inputs. Setting this variable to the `val()` function allows the code to pull the value attributes of the data inputs that the user picks. In the html document, I made sure to set the correct answers to `value="1"` to make it easy to compare the correct answers from the wrong answers. Wrong answers did not even have a set value attribute. By minimizing the amount of value attributes to just one type of answer: correct ones, I only had to write a simple `if statement` with the condition of `value === "1"` so that the code knows to only recognize inputs with the value attribute matching that specific condition. If it did match the condition, then the `totalScore` for the user goes up by 1. There was no need for an `else statement`because I didn't want anything to happen when the user picked an incorrect answer. Picking an incorrect answer would mean picking an input without any value attribute which would not add anything to the `totalScore`. At this point, I figured that the "goal" of the user would be to pick enough correct answers to add up to the maximum total number you could get: 10. Then I simply affixed the `totalScore` to display in the div that will show how many correct answers were submitted (which will be shown later).

8. Last but not least, I had to wrap up the game so that when the user finished answering all the questions before the timer was up, they could submit the answers and generate a page that would tell them the results of their fruitful efforts aka their final score. To do this, I attached the submit button to an event listener function for `on click` so that when the user submits their answers, it will hide the timer, questions, and also the submit button itself. It will then reveal the div containing the game's results which was hidden initially from the start of the page loading. I also added a `clearInterval(intervalId)` so that the timer would stop upon the user submitting their answers. At this point, I was basically done with the core tasks of this homework project, but I thought it was a bit boring the way it was so I decided to add some fun gifs that would show according to what kind of score the user achieved. Using `if/else and else if statements` I made conditions for when the totalScore was a certain range, and according to said range, a specific gif and message would populate and display to the user.