import React, { Component } from 'react';
import '../assets/css/tailwind.css'
import "../assets/css/custom.css";
import Header from './Header';
import QuestionNav from './QuestionNav';

export class App extends Component {
    render() {
        return (
			<>
				<section className='min-h-screen text-lime-50 bg-slate-900 flex items-center'>
					<div className='md:w-10/12 mx-auto'>
                        <Header />
                        <QuestionNav />
					</div>
				</section>
			</>
		);
    }
}

export default App;