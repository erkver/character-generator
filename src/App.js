// We are tasked with inputting TV character information into a form which will be submitted to a database. 
// 1. Add name, show, image values on state equal to an empty string. Also create a characters value equal to an empty array, this is where we will push our characters.
// 2. Create the form with the name, show, and image input fields. Use a HTML form tag as well as label and input tags. Give the input fields a name attribute equal to their key on state. Make all input fields required, give them onChange event listeners.
// 3. Add a handleChange method that will handle changes for all input fields.
// 4. Add a handleSubmit method that will fire upon the user pressed or when a button is clicked.
// 5. Map over list of characters in your array and render them on the screen.
// 6. Add delete method to add option of deleting item from characters array.

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      show: '',
      image:'',
      characters: []
    }
  }

  handleChange = e => {
    // e.target.name looks for the given HTML name attribute on your input tag. By putting it in square brakets we are able to dynamically change the key equal to what each input's name is. 
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e, name, show, image) => {
    // Destructure characters from state;
    const { characters } = this.state;
    // Create a copy of the array
    let characterCopy = characters.slice();
    // Prevents form tag from trying to redirect user
    e.preventDefault();
    // Push in an object with the name, show, and image values
    // The below is the same as characterCopy.push({name: name, show: show, image: image})
    characterCopy.push({name, show, image});
    // Update state equal to your array copy and clear your input fields.
    this.setState({characters: characterCopy, name: "", show: "", image: ""});
  }

  handleDelete = i => {
    // Destructure characters from state;
    const { characters } = this.state;
    // Create a copy of the array
    let charCopy = characters.slice();
    // Delete object from characters array at given index. Index is given to us from our map function.
    charCopy.splice(i, 1);
    // Update state with new array
    this.setState({characters: charCopy});
  }

  render() {
    // Destructure values off of state
    const { name, show, image, characters } = this.state;
    // console.log(this.state);
    // Map over characters from state and render their name, show, and image. Also add a button with an onClick event listener that passes in the index of the item as a parameter. When using map, you'll always need a key and you'll need an parent container to wrap content.
    let characterList = characters.map((e, i) => (
      <div key={i}>
        <p>{e.name}</p>
        <p>{e.show}</p>
        <img src={e.image} alt={e.name} />
        <button onClick={i => this.handleDelete(i)}>X</button>
      </div>
    ))
    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e, name, show, image)}>
          <label>Name:</label>
          <input 
            required
            type="text"
            name="name"
            value={name}
            onChange={e => this.handleChange(e)}
          />
          <label>Show:</label>
          <input
            required
            type="text"
            name="show"
            value={show}
            onChange={e => this.handleChange(e)}
          />
          <label>Image:</label>
          <input
            required
            type="text"
            name="image"
            value={image}
            onChange={e => this.handleChange(e)}
          />
          {/* By giving the input type="submit" this triggers the onSubmit event listener defined in the form tag */}
          <input type="submit" value="Submit" />
        </form>
        {characterList}
      </div>
    );
  }
}

export default App;
