# guess-who
GA-WDI Project #1


# Instructions:

When the page loads, each player will be prompted to choose a character.
There are a total of 25 characters, which will be randomly placed on each board.
Once each player has chosen their characters, they will then attempt to guess which character the other player chose.
This is done through deduction.
Each player, on their turn, can hover over any character, and see a list of the traits that character has.
Clicking on a trait will compare that trait with the opposing player's character.
If the selected trait matches a trait possessed by the other player's character, all characters not possessing that trait will be discarded.
Inversely, if the selected trait does not match any of the traits of the other player's character, all characters possessing that trait will be discarded.
Once a player is certain that they know which character the other player has chosen, they may make a guess by clicking on a character's name.
If the player guessed correctly, they win the round.
If the player guessed incorrectly, they forfeit their turn.



# Technologies used:

The gamebaord was constructed using HTML, and styled using CSS. 
The logic and functionality of the game was created using Javascript and Jquery.


# Approach:

Each of the 25 characters is an object, created using a function constructor.
Each object contains the name, traits, and image file location of each character.
A randomizer function was created in Javascript to return a random character object.
The name, traits, and image file location of each character object are assigned to divs in the HTML.
Event listeners were assigned to each div and wipe page.
These event listeners triggered functions to compare the traits of the chosen character object to the traits of the target character object.
The win logic is simply this, 'if an event listener is triggered by the name of a character object, and that name matches the name of the targect character object, the player that triggered the event wins the round'


# Future changes:

The ability for each player to view their chosen character.
A history of all the traits selected by each player per round.
A history of all the incorrect guesses made by each player per round.
Style changes, to make the UI more appealing.
