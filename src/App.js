import React from 'react';
import './App.css';

import Form from './Form';

function App() {
  return (
    <div className="App">
      <div>
        <p>Try to predict the age of the person's name you type in.</p>
      </div>
      <h3>Search A Name</h3>
      <Form />
      <div>
        {/* //information display...name, age, count */}
      </div>
      <div>
        <p>Were you right??</p>
      </div>
    </div>
  );
}

export default App;

// URL for api --> https://api.agify.io/?name=meelad

// Step 1. - understand the data structure of your api.
  // search by name type of api and return the name, age, and count info
// Step 2. - set up your schema to determine what data you want to display
  // my form needs a search bar for name search - first name only -
  // button for the search bar
  // should have a description to describe agify and what it does.
  // a place to return the information.
// Step 3. - Build out the DOM