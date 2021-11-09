import classes from "../../styles/FormInput/AnswerCheckBox.module.css";

export default function AnswerCheckBox() {
    return (
		<>
			<label class={classes.answer} for='option9'>
				<input type='checkbox' id='option9' />A New Hope 1
			</label>
		</>
	);
}