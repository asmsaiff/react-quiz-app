import React, { Component } from 'react';
import { CgArrowRight } from "react-icons/cg";

export class QuestionNav extends Component {
    state = {
        totalQuestion: '---',
        currentQuestionNum: '---',
        nextButton: ''
    }

    handleQuestionNav = (props) => {
        this.setState({
			totalQuestion: props.totalQuestion,
			currentQuestionNum: props.currentQuestionNum,
			nextButton: props.nextButton,
		});
    }

    render() {
        return (
			<>
				<div className='flex justify-between items-center h-44'>
					<div>
						<h2 className='text-sm text-secondary'>
							Question
                            <span className='text-5xl text-primary'>{this.state.currentQuestionNum}</span> out
                            of <span className='text-5xl text-primary'>{this.state.totalQuestion}</span>
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