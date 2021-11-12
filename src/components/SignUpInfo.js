import { Link } from 'react-router-dom';
import classes from '../styles/SignUpInfo.module.css'

export default function SignUpInfo() {
    return (
		<div class={classes.info}>
			Already have an account? <Link to='/login'>Login</Link> instead.
		</div>
	);
}