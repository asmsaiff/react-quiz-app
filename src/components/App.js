import '../styles/App.css'
import Layout from "./Layout";
import Quiz from './pages/Quiz';
// import Videos from './Videos';

function App() {
    return (
        <Layout>
            {/* <Videos /> */}
            <Quiz />
        </Layout>
    );
}

export default App