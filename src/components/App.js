import '../styles/App.css'
import Layout from "./Layout";
import Login from './Login';
import HomePage from './pages/Home';
import SignUp from './SignUp';
import Videos from './Videos';

function App() {
    return (
        <Layout>
            <HomePage />
            <Videos />
            <SignUp />
            <Login />
        </Layout>
    );
}

export default App