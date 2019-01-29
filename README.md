# Character Generator
Morning review for React covering forms, mapping over data, basic frontend POST and DELETE methods

## Instructions
We are tasked with inputting TV character information into a form which will be submitted to a database.
1. Add name, show, and image values on state all equal to an empty string.
2. Create the form with the name, show, and image input fields. Use a HTML form tag as well as label and input tags.
	- Give the input fields a name attribute equal to their key on state.
	- Make all input fields required and give them onChange event listeners.
	- Make an input with the type submit and value Submit.
3. Add a handleChange method that will handle changes for all input fields.
4. Add a submit method that will fire upon the user pressing enter or when the submit button is clicked.
5. Use this method inside of the form's onSubmit event listener passing in the necessary values to create a character.
6. Map over list of characters in your array and render them on the screen.
	- Map over characters from state and render their name, show, and image. Also add a button with an onClick event listener that passes in the index of the item as a parameter. 
7. Write a delete method to add option of deleting item from characters array. Use this method inside of the onClick from the previous step.