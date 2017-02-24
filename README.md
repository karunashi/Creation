# Creation_Game

## Live Link
 - https://karunashi.github.io/week-4-game/
 
## Description on how to use the app
When the game initializes, the player is given four buttons. Each button represents a randomized number that's generated at each round. It's up to the player to memorize what each number gives, and try to make it all add up to the goal, which is defined as "Destiny." The game is designed in the theme of Creation, where the player plays an unknown deity, and adds together four different types of basic elements to create a full world.

## Requirements
- Four buttons with their own randomized numerical value stored, but not printed on screen.
- Goal/Target Number also randomized at the beginning, explicitly printed on screen.
- Win and Loss counters that correspond to the rules, guess right number and get a win, otherwise get a loss for going over the target number.

## Technologies Used
- HTML5: Markup and layout with Bootstrap
- CSS3: Customized style.css that overrides bootstrap after reset.css clears any default browser settings.
- jQuery: jQuery DOM Manipulation + shortened functions for buttons
- JavaScript: Global and local functions embedded in jQuery button functions.

## Code Explaination
This project was much smaller and compressed assignment compared to the previous one, as I opted to utilize jQuery and JavaScript into this assignment. jQuery's simplified approach to certain functions definitely made it easier, although it did take some getting used to with the new syntax ($ for instance). Although most of it is rudimentary at best, I've grasped the concepts, and will hopefully implement more complex jQuery and JavaScript files as I continue to explore the languages I'm learning at an accelerated pace.

For instance, the on click function for jQuery allows for easy adaptation to elements based on ID's or Classes with jQuery's selector. 
'''
 $(".button1").on("click", function() { });
 '''
