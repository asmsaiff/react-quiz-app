import React, { Component } from 'react';
import { BiLogInCircle } from 'react-icons/bi'

export class Question extends Component {
    render() {
        return (
			<>
				<section className='space-y-6'>
					<div className='flex text-4xl text-primary space-x-4'>
						<span className=' paris font-bold'>Q.</span>
						<span>What is JavaScript</span>
					</div>
					<div className='flex text-4xl text-primary space-x-4'>
						<span className=' paris font-bold'>A.</span>
						<span></span>
					</div>

					<div className='flex flex-col space-y-4'>
						<button className='flex bg-third items-center gap-4 py-3 px-6 text-xl'>
							<BiLogInCircle className="text-primary"/>
							<span>JavaScript is a scripting language</span>
						</button>
						<button className='flex bg-third items-center gap-4 py-3 px-6 text-xl'>
							<BiLogInCircle className="text-primary"/>
							<span>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</span>
						</button>
						<button className='flex bg-third items-center gap-4 py-3 px-6 text-xl'>
							<BiLogInCircle className="text-primary"/>
							<span>JavaScript is a scripting language</span>
						</button>
						<button className='flex bg-third items-center gap-4 py-3 px-6 text-xl'>
							<BiLogInCircle className="text-primary"/>
							<span>JavaScript is a scripting language</span>
						</button>
					</div>
				</section>
			</>
		);
    }
}

export default Question;
