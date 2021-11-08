import classes from "../styles/Illustration.module.css";

const Illustration = ({ illustration }) => {
	return (
		<>
			<div className={classes.illustration}>
				<img src={illustration} alt='Signup' />
			</div>
		</>
	);
};

export default Illustration;