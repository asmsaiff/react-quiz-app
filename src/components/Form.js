import classes from "../styles/Form.module.css";

const Form = ({children}) => {
	return (
		<>
			<form className={`${classes.signup} ${classes.form}`} action='#!'>
				{children}
			</form>
		</>
	);
};

export default Form;
