import '../styles/App.css'
import Layout from "./Layout";
import HomePage from './pages/Home';
import Videos from './Videos';

function App() {
    return (
        <Layout>
            <HomePage />
            <Videos />
        </Layout>
    );
}

export default App