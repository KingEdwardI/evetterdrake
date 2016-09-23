# Lottery Sim (with Ajax!)

## Specification

Build a webpage which does the following:

* The user starts with $10 in virtual money.
* The user enters 4 distinct numbers between 1 and 10, inclusive. Then they press a button which costs them $2
* Normal random numbers aren't good enough for us! Let's use random.org's random number generator, found at
	https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new
 which generates a random number between 1 and 10. Make AJAX calls to that address to generate four random distinct numbers.
* The user wins $4 if they match 2 numbers, $8 if they match three numbers, and $40 if they match all four.

## Details

1. Players cannot go into debt. Make sure the player has the money to pay for the lottery ticket. Display an error message if the user has run out of money.
2. Players should be able to play the same numbers over and over, but can change them if they want.
3. There is no upper limit to the amount you can win.
4. Make sure the user has entered valid numbers before they are allowed to play. Display an error message if the user has entered an invalid number.
5. Display an error message if the user has entered two of the same number

## Above and Beyond

1. Make the page beautiful
2. Allow the player to purchase more than one "ticket" before rolling the numbers.
3. Display an animation when the player rolls new numbers.
4. Use localstorage to keep track of the current high score.


## Hint

There are many ways for the user to input some numbers, here are two examples:

Inputs

    <input id="num1" />
	...
	var num1 = document.getElementById("num1").value;

Inputs with JQuery

	<input id="num1" />
	...
	var num1 = $('#num1').val();

Prompt

	var numbers = prompt("Enter your numbers");

