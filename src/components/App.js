import '../styles/App.css'
import Layout from "./Layout";
import Result from './pages/Result';
import Quiz from './pages/Quiz';
import Videos from './Videos';
import SignUp from "./SignUp";
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
    return (
		<>
			<Router>
				<Layout>
					<Routes>
						<Route exact path='/' element={<Videos />} />
						<Route exact path='/signup' element={<SignUp />} />
						<Route exact path='/login' element={<Login />} />
						<Route exact path='/quiz' element={<Quiz />} />
						<Route exact path='/result' element={<Result />} />
					</Routes>
				</Layout>
			</Router>
		</>
	);
}

export default App