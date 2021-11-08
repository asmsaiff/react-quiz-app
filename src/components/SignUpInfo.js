import classes from '../styles/SignUpInfo.module.css'

export default function SignUpInfo() {
    return (
		<div class={classes.info}>
			Already have an account? <a href='login.html'>Login</a> instead.
		</div>
	);
}