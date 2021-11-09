import '../styles/App.css'
import Layout from "./Layout";
import HomePage from './pages/Home';
import Quiz from './pages/Quiz';
// import Videos from './Videos';

function App() {
    return (
        <Layout>
            <HomePage />
            {/* <Videos /> */}
            <Quiz />
        </Layout>
    );
}

export default App