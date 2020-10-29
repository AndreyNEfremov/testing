import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'

it ('shows a comment box', () => {
    const div = document.createElement('div'); //create HTML code inside this div inside JSDOM
    ReactDOM.render(<App />, div); //render the App inside the div
    // looks inside the div to checks if the CommentBox is there
    // console.log(div.innerHTML) //just visual for us, for understand, no needn't
    expect(div.innerHTML).toContain('Comment Box');
    ReactDOM.unmountComponentAtNode(div) //cleanup div after test run
});