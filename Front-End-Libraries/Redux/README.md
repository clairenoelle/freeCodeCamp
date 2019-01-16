# Combine Multiple Reducers

There are counterReducer() and authReducer() functions provided in the code editor, along with a Redux store. Finish writing the rootReducer() function using the Redux.combineReducers() method. Assign counterReducer to a key called count and authReducer to a key called auth.



# Copy an Object with Object.assign

The Redux state and actions were modified to handle an object for the state. Edit the code to return a new state object for actions with type ONLINE, which set the status property to the string online. Try to use Object.assign() to complete the challenge.



# Create a Redux Store

The Redux store is an object which holds and manages application state. There is a method called createStore() on the Redux object, which you use to create the Redux store. This method takes a reducer function as a required argument. The reducer function is covered in a later challenge, and is already defined for you in the code editor. It simply takes state as an argument and returns state.

Declare a store variable and assign it to the createStore() method, passing in the reducer as an argument.



# Define a Redux Action

Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give it a property type set to the string 'LOGIN'.



# Define an Action Creator

Define a function named actionCreator() that returns the action object when called.



# Dispatch an Action Event

The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().



# Get State from the Redux Store

The code from the previous challenge is re-written more concisely in the code editor. Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.



# Handle an Action in the Store

The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.



# Never Mutate State

There is a store and reducer in the code editor for managing to-do items. Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state. There are a few ways to accomplish this with standard JavaScript or ES6. See if you can find a way to return a new array with the item from action.todo appended to the end.



# Register a Store Listener

Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method. You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.



# Remove an Item from an Array

The reducer and action creator were modified to remove an item from an array based on the index of the item. Finish writing the reducer so a new state array is returned with the item at the specific index removed.



# Send Action Data to the Store

There's a basic notesReducer() and an addNoteText() action creator defined in the code editor. Finish the body of the addNoteText() function so that it returns an action object. The object should include a type property with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. When you call the action creator, you'll pass in specific note information that you can access for the object.

Next, finish writing the switch statement in the notesReducer(). You need to add a case that handles the addNoteText() actions. This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.

The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. That's all it takes to send action-specific data to the store and use it when you update store state.



# Use a Switch Statement to Handle Multiple Actions

The code editor has a store, actions, and action creators set up for you. Fill in the reducer function to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond to different action events. This is a standard pattern in writing Redux reducers. The switch statement should switch over action.type and return the appropriate authentication state.



# Use const for Action Types

Declare LOGIN and LOGOUT as const values and assign them to the strings 'LOGIN' and 'LOGOUT', respectively. Then, edit the authReducer() and the action creators to reference these constants instead of string values.



# Use Middleware to Handle Asynchronous Actions

Write both dispatches in the handleAsync() action creator. Dispatch requestingData() before the setTimeout() (the simulated API call). Then, after you receive the (pretend) data, dispatch the receivedData() action, passing in this data. Now you know how to handle asynchronous actions in Redux. Everything else continues to behave as before.



# Use the Spread Operator on Arrays

Use the spread operator to return a new copy of state when a to-do is added.



# Write a Counter with Redux

In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held in the store. Good luck building your first Redux app!



