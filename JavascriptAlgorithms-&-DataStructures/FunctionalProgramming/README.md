# Learn About Functional Programming

The members of freeCodeCamp happen to love tea.

In the code editor, the prepareTea and getTea functions are already defined for you. Call the getTea function to get 40 cups of tea for the team, and store them in the tea4TeamFCC variable.



# Understand Functional Programming Terminology

Prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. Note that the getTea function has been modified so it now takes a function as the first argument.

Note: The data (the number of cups of tea) is supplied as the last argument. We'll discuss this more in later lessons.



# Avoid Mutations and Side Effects Using Functional Programming

Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.



# Pass Arguments to Avoid External Dependence in a Function

Let's update the incrementer function to clearly declare its dependencies.

Write the incrementer function so it takes an argument, and then increases the value by one.



# Refactor Global Variables Out of Functions

Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array. The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.



# Use the map Method to Extract Data from an Array

The watchList array holds objects with information on several movies. Use map to pull the title and rating from watchList and save the new array in the rating variable. The code in the editor currently uses a for loop to do this, replace the loop functionality with your map expression.



# Implement map on a Prototype

Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.



# Use the filter Method to Extract Data from an Array

The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map to return a new array of objects with only title and rating keys, but where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may want to convert them into numbers to perform mathematical operations on them.



# Implement the filter Method on a Prototype

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You may use a for loop or the Array.prototype.forEach() method.



# Return Part of an Array Using the slice Method

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.



# Remove Elements from an Array Using slice Instead of splice

Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

Do not mutate the original array provided to the function.



# Combine Two Arrays Using the concat Method

Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.



# Add Elements to the End of an Array Using concat Instead of push

Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.



# Use the reduce Method to Analyze Data

The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, but save the final average into the variable averageRating. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.



# 
