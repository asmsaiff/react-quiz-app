import React, { Component } from 'react';
import '../assets/css/tailwind.css'
import "../assets/css/custom.css";
import { BiLogInCircle } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import {CgArrowRight} from 'react-icons/cg'
import { questions } from "../data/Questions";

export class App extends Component {
	state = {
		examName: "WordPress Basic",
		examTime: "10 Minutes",
		fullMarks: "10",
		passMarks: "8",
		currentQuestion: 0,
		score: 0,
		showScore: false,
		totalQuestion: questions.length,
		nextButton: "",
	};

	setExamInfo = (props) => {
		this.setState({
			examName: props.examName,
			examTime: props.examTime,
			fullMarks: props.fullMarks,
			passMarks: props.passMarks,
		});
	};

	handleQuestionNav = (props) => {
		this.setState({
			currentQuestionNum: props.currentQuestionNum,
			nextButton: props.nextButton,
		});
	};

	handleAnswerBtnClick = (isCorrect) => {
		if (isCorrect === true) {
			this.setState({ score: this.state.score + 2 });
		}
		
		const nextQuestion = this.state.currentQuestion + 1;

		if (nextQuestion < questions.length) {
			this.setState({
				currentQuestion: nextQuestion,
			});
		} else {
			this.setState({ showScore : true });
		}
	};

	navigateQuestion = () => {
		const nextQuestion = this.state.currentQuestion + 1;
		if (nextQuestion < questions.length) {
			this.setState({
				currentQuestion: nextQuestion,
			});
		}
	}

	render() {
		return (
			<>
				<section className='min-h-screen text-lime-50 bg-slate-900 flex items-center py-12 px-4'>
					{!this.state.showScore ? (
						<div className='md:w-10/12 mx-auto'>
							{/* Header */}
							<h1 className='inter font-extrabold text-primary text-3xl lg:text-5xl text-center'>
								{this.state.examName}
							</h1>

							<div className='flex flex-col sm:flex-row text-center justify-center mt-4 sm:divide-x divide-gray-500 space-y-2 sm:space-y-0'>
								<div className='flex sm:pr-4'>
									<RiTimeLine className='text-primary self-center mr-2' />
									<span className='text-sm'>
										Total Marks: {this.state.fullMarks}
									</span>
								</div>
								<div className='flex sm:px-4'>
									<RiTimeLine className='text-primary self-center mr-2' />
									<span className='text-sm'>
										Pass Marks: {this.state.passMarks}
									</span>
								</div>
								<div className='flex sm:pl-4'>
									<RiTimeLine className='text-primary self-center mr-2' />
									<span className='text-sm'>
										Time: {this.state.examTime}
									</span>
								</div>
							</div>

							{/* Question Navigation */}
							<div className='flex justify-between items-center mt-8 mb-6'>
								<div>
									<h2 className='text-sm text-secondary'>
										Question
										<span className='text-4xl md:text-5xl text-primary'>
											{this.state.currentQuestion + 1}
										</span>{" "}
										out of{" "}
										<span className='text-4xl md:text-5xl text-primary'>
											{this.state.totalQuestion}
										</span>
									</h2>
								</div>
								<button
									onClick={this.navigateQuestion}
									className='text-2xl font-extrabold flex items-center gap-2 text-primary border-bottom'
								>
									<span>Next</span>
									<CgArrowRight />
								</button>
							</div>

							{/* Question */}
							<div className='space-y-6'>
								<div className='flex text-xl sm:text-4xl text-primary space-x-4'>
									<span className='paris font-bold'>Q.</span>
									<span>
										{
											questions[
												this.state.currentQuestion
											].questionText
										}
									</span>
								</div>
								<div className='flex text-xl sm:text-4xl text-primary space-x-4'>
									<span className='paris font-bold'>A.</span>
									<span></span>
								</div>

								<div className='flex flex-col space-y-4'>
									{questions[
										this.state.currentQuestion
									].options.map((ansOptions) => {
										return (
											<button
												onClick={() => {
													this.handleAnswerBtnClick(
														ansOptions.isCorrect,
													);
												}}
												className='flex bg-third items-center text-left gap-4 py-3 px-2 sm:px-6 text-sm md:text-xl ans'
											>
												<BiLogInCircle className='question-icon text-primary' />
												<span>{ansOptions.option}</span>
											</button>
										);
									})}
								</div>
							</div>
						</div>
					) : (
						<div className='md:w-10/12 mx-auto text-center space-y-6'>
							{/* Header */}
							<h1 className='inter font-extrabold text-primary text-3xl lg:text-5xl'>
								Thanks for your participation!
							</h1>
							<h3 className='text-secondary'>
								Your score is :
								<span className='text-primary text-4xl md:text-5xl mx-2'>
									{this.state.score}
								</span>
								Out of
								<span className='text-primary text-4xl md:text-5xl mx-2'>
									{this.state.totalQuestion}
								</span>
								questions.
							</h3>
						</div>
					)}
				</section>
			</>
		);
	}
}

export default App;