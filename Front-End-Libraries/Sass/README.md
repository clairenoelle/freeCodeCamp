# Apply a Style Until a Condition is Met with @while

Use @while to create a series of classes with different font-sizes.

There should be 10 different classes from text-1 to text-10. Then set font-size to 5px multiplied by the current index number. Make sure to avoid an infinite loop!



# Create Reusable CSS with Mixins

Write a mixin for border-radius and give it a $radius parameter. It should use all the vendor prefixes from the example. Then use the border-radius mixin to give the #awesome element a border radius of 15px.



# Extend One Set of CSS Styles to Another Element

Make a class .info-important that extends .info and also has a background-color set to magenta.


# Nest CSS with Sass

Use the nesting technique shown above to re-organize the CSS rules for both children of .blog-post element. For testing purposes, the h1 should come before the p element.



# Split Your Styles into Smaller Chunks with Partials

Write an @import statement to import a partial named _ variables.scss into the main.scss file.



# Store Data with Sass Variables

Create a variable $text-color and set it to red. Then change the value of the color property for the .blog-post and h2 to the $text-color variable.



# Use @each to Map Over Items in a List

Write an @each directive that goes through a list: blue, black, red and assigns each variable to a .color-bg class, where the "color" part changes for each item.

Each class should set the background-color the respective color.



# Use @if and @else to Add Logic To Your Styles

Create a mixin called border-stroke that takes a parameter $val. The mixin should check for the following conditions using @if, @else if, and @else:

light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
none - no border



# Use @for to Create a Sass Loop

Write a @for directive that takes a variable $j that goes from 1 to 6.

It should create 5 classes called .text-1 to .text-5 where each has a font-size set to 10px multiplied by the index.
