import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
			<>
				<div className='flex justify-between'>
					<div className='text-center'>
						<h2>Question</h2>
						<h1>1</h1>
						<p>of 10</p>
					</div>
					<div>Question No</div>
					<div className='text-center'>
						<h2>Question</h2>
						<h1>1</h1>
						<p>of 10</p>
					</div>
				</div>
			</>
		);
    }
}

export default Header;
