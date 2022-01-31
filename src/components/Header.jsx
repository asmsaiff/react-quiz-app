import React, { Component } from 'react';
import { RiTimeLine } from "react-icons/ri";

export class Header extends Component {
	state = {
		examName: 'No Exam Scheduled',
		examTime: '---',
		fullMarks: '---',
		passMarks: '---',
	};

	setExamInfo = (props) => {
		this.setState({
			examName: props.examName,
			examTime: props.examTime,
			fullMarks: props.fullMarks,
			passMarks: props.passMarks,
		});
	};

	render() {
		return (
			<>
				<h1 className='inter font-extrabold text-primary text-5xl text-center'>
					{this.state.examName}
				</h1>

				<div className='flex text-center justify-center mt-4 divide-x divide-gray-500'>
					<div className='flex pr-4'>
						<RiTimeLine className='text-primary self-center mr-2' />
						<span className='text-sm'>
							Total Marks: {this.state.fullMarks}
						</span>
					</div>
					<div className='flex px-4'>
						<RiTimeLine className='text-primary self-center mr-2' />
						<span className='text-sm'>
							Pass Marks: {this.state.passMarks}
						</span>
					</div>
					<div className='flex pl-4'>
						<RiTimeLine className='text-primary self-center mr-2' />
						<span className='text-sm'>
							Time: {this.state.examTime}
						</span>
					</div>
				</div>
			</>
		);
	}
}

export default Header;