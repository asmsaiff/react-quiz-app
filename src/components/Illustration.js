import classes from "../styles/Illustration.module.css";
import SignUpImage from "../assets/images/signup.svg";

const Illustration = () => {
    return (
		<>
			<div className={classes.illustration}>
				<img src={SignUpImage} alt='Signup' />
			</div>
		</>
	);
}

export default Illustration;