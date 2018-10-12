# Use Responsive Design with Bootstrap Fluid Containers

To get started, we should nest all of our HTML (except the link tag and the style element) in a div element with the class container-fluid.



# Make Images Mobile Responsive

First, add a new image below the existing one. Set its src attribute to https://bit.ly/fcc-running-cats.

It would be great if this image could be exactly the width of our phone's screen.

Fortunately, with Bootstrap, all we need to do is add the img-responsive class to your image. Do this, and the image should perfectly fit the width of your page.



# Center Text with Bootstrap

Now that we're using Bootstrap, we can center our heading element to make it look better. All we need to do is add the class text-center to our h2 element.

Remember that you can add several classes to the same element by separating each of them with a space, like this:

<h2 class="red-text text-center">your text</h2>



# Create a Bootstrap Button

Bootstrap has its own styles for button elements, which look much better than the plain HTML ones.

Create a new button element below your large kitten photo. Give it the btn and btn-default classes, as well as the text of "Like".



# Create a Block Element Bootstrap Button

Add Bootstrap's btn-block class to your Bootstrap button.



# Taste the Bootstrap Button Color Rainbow

Replace Bootstrap's btn-default class by btn-primary in your button.

Note that this button will still need the btn and btn-block classes.



# Call out Optional Actions with btn-info

Create a new block-level Bootstrap button below your "Like" button with the text "Info", and add Bootstrap's btn-info and btn-block classes to it.

Note that these buttons still need the btn and btn-block classes.



# Warn Your Users of a Dangerous Action with btn-danger

Create a button with the text "Delete" and give it the class btn-danger.

Note that these buttons still need the btn and btn-block classes.



# Use the Bootstrap Grid to Put Elements Side By Side

Put the Like, Info and Delete buttons side-by-side by nesting all three of them within one <div class="row"> element, then each of them within a <div class="col-xs-4"> element.

The row class is applied to a div, and the buttons themselves can be nested within it.



# Ditch Custom CSS for Bootstrap

Delete the .red-text, p, and .smaller-image CSS declarations from your style element so that the only declarations left in your style element are h2 and thick-green-border.

Then delete the p element that contains a dead link. Then remove the red-text class from your h2 element and replace it with the text-primary Bootstrap class.

Finally, remove the "smaller-image" class from your first img element and replace it with the img-responsive class.



# 
