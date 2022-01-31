import React, { Component } from 'react';
import { CgArrowRight } from "react-icons/cg";

export class QuestionNav extends Component {
    render() {
        return (
			<>
				<div className='flex justify-between items-center h-44'>
					<div>
						<h2>
							Question{" "}
							<span className='text-5xl text-primary'>1</span> out
							of <span className='text-5xl text-primary'>10</span>
						</h2>
					</div>
					<a
						href='#!'
						className='text-2xl font-extrabold flex items-center gap-2 text-primary border-bottom'
					>
						<span>Next</span>
						<CgArrowRight />
					</a>
				</div>
			</>
		);
    }
}

export default QuestionNav;
