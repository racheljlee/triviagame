# triviagame

The theme I picked for my trivia game project was `Adventure Time`, a hilarious, absurd, and quirky cartoon show enjoyed by people of all ages. It's a silly show with cute and funny characters and so many memorable lines.

I only picked `10 questions` for the user to answer.

`HTML Steps`
Using bootstrap, I put all of my content inside a <div class="container"> and separated relevant sections by <div class="rows">:
    -header div containing the title
    -starter div containing a "Start Game" button and a fun image to be triggered
    -timer div containing a 100 second timer
    -questions div containing all 10 questions in the format of input radio buttons.
    -ender div containing a "Submit Game" button to end the trivia and populate results
    -results div containing the user's final score

`Javascript & jQuery Steps`
1. First I stored all of the html elements I needed access to in variables to make it easier to refer back to them when I needed them.
2. Then I created 2 variables, `totalScore` and `timer` which contains number values. By setting the totalScore variable to 0, it served as the initial user score at the start of the game. 0 is the starting point. The timer was set to the value 100 because I wanted to give the user 100 seconds to complete the game.
3. I also inserted the timer into the appropriate div to display the timer countdown on the screen for the user.
4. I also had to initially hide many of the divs at the point in time when the page loads first. This is because I wanted to toggle certain divs to show after certain event listeners took place. For instance, when you first load the game, all of the content divs are hidden except for the title div and the start button div.
5. I then coded an event listener for when the user clicks on the "Start Game" button so that on click, it triggers the image above to animate (to indicate that the game is embarking on its adventure!) and also shows the previous hidden divs for the timer, questions, and submit button.
6. Then I had to code the timer to work. I had to declare a `run function` that would run an `intervalId` with the value of `setInterval(decrement, 1000)` which causes the timer of 100 seconds that I had set previously to decrement each second. Then I had to declare a `decrement function` to perform specific tasks when the timer reached 0 seconds. I used an `if/else statement`. I set the condition of the if statement for `timer === 0` so that if the timer reaches 0 before all the questions are answered, then I would stop the interval decrementing further (by using `clearInterval(intervalId)`) so that it did not countdown into the negatives. I also had it so that when the timer reached 0, it would hide the divs containing the questions and the submit button so that the user cannot continue answering the questions. It then replaces the html content of 