import React from 'react';

import CommentBox from '../CommentBox';

import { mount } from 'enzyme';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and a button', () => {
	//32. asserting element existence
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' },
		});
		wrapped.update();
	});

	it('has a text area a user can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('text area is emptied when form is submitted', () => {
		wrapped.find('form').simulate('submit');

		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
