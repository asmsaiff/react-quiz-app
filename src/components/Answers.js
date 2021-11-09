import AnswerCheckBox from "./FormInput/AnswerCheckBox";
import classes from "../styles/Answers.module.css";

export default function Answers() {
    return (
		<div className={classes.answers}>
			<AnswerCheckBox />
			<AnswerCheckBox />
			<AnswerCheckBox />
			<AnswerCheckBox />
			<AnswerCheckBox />
		</div>
	);
}