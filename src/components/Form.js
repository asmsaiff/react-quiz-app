import classes from "../styles/Form.module.css";

export default function Form({cssClass, children}) {
	return (
		<>
			<form className={`${cssClass} ${classes.form}`} action='#!'>
				{children}
			</form>
		</>
	);
};
