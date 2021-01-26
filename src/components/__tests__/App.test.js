import App from '../App.js';
// import ReactDOM from 'react-DOM';
import { shallow } from 'enzyme';
import React from 'react';
import CommentBox from '../CommentBox';

// test('shows a comment box', () => {
// 	//automatically uses JSDOM to recreate browser
// 	const div = document.createElement('div');
// 	ReactDOM.render(<App />, div);

// 	// check out component here
// 	expect(div.innerHTML).toContain('Comment Box');

// 	//clean up code
// 	ReactDOM.unmountComponentAtNode(div);
// });
test('shows a comment box', () => {
	const wrapped = shallow(<App />);
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

// enzyme capabilities
// shallow - just the component
// static - plain html given back
// full DOM - children + modify
