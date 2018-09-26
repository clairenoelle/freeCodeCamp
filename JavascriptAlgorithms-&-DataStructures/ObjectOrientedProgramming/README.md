# Add Methods After Inheritance

Add all necessary code so the Dog object inherits from Animal and the Dog's prototype constructor is set to Dog. Then add a bark() method to the Dog object so that beagle can both eat() and bark(). The bark() method should print "Woof!" to the console.



# Change the Prototype to a New Object

Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.



# Create a Basic JavaScript Object

Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.



# Create a Method on an Object

Using the dog object, give it a method called sayLegs. The method should return the sentence "This dog has 4 legs."



# Define a Constructor Function

Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.



# Extend Constructors to Receive Arguments

Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.



# Inherit Behaviors from a Supertype

Use Object.create to make two instances of Animal named duck and beagle.



# Iterate Over All Properties

Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties of Dog to the array prototypeProps.



# Make Code More Reusable with the this Keyword

Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.



# Override Inherited Methods

Override the fly() method for Penguin so that it returns "Alas, this is a flightless bird."



# Remember to Set the Constructor Property when Changing the Prototype

Define the constructor property on the Dog prototype.



# Reset an Inherited Constructor Property

Fix the code so duck.constructor and beagle.constructor return their respective constructors.



# Set the Child's Prototype to an Instance of the Parent

Modify the code so that instances of Dog inherit from Animal.



# Understand Own Properties

Add the own properties of canary to the array ownProps.



# Understand the Constructor Property

Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.



# Understand the Immediately Invoked Function Expression (IIFE)

Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function expression (IIFE).



# Understand the Prototype Chain

Modify the code to show the correct prototype chain.



# Understand Where an Object’s Prototype Comes From

Use isPrototypeOf to check the prototype of beagle.



# Use a Constructor to Create Objects

Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.



# Use a Mixin to Add Common Behavior Between Unrelated Objects

Create a mixin named glideMixin that defines a method named glide. Then use the glideMixin to give both bird and boat the ability to glide.



# Use an IIFE to Create a Module

Create a module named funModule to wrap the two mixins isCuteMixin and singMixin. funModule should return an object.



# Use Closure to Protect Properties Within an Object from Being Modified Externally

Change how weight is declared in the Bird function so it is a private variable. Then, create a method getWeight that returns the value of weight.



# Use Dot Notation to Access the Properties of an Object

Print both properties of the dog object below to your console.



# Use Inheritance So You Don't Repeat Yourself

The eat method is repeated in both Cat and Bear. Edit the code in the spirit of DRY by moving the eat method to the Animal supertype.



# Use Prototype Properties to Reduce Duplicate Code

Add a numLegs property to the prototype of Dog.



# Verify an Object's Constructor with instanceof

Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.
