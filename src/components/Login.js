import classes from '../styles/Login.module.css'
import Illustration from "./Illustration";
import loginImage from "../assets/images/login.svg";
import Form from "./Form";
import TextInput from "./FormInput/TextInput";
import Button from "./FormInput/Button";
import SignUpInfo from "./SignUpInfo";

export default function Login() {
	return (
		<>
			<div className={classes.column}>
				<Illustration illustration={loginImage} />
				<Form cssClass="login">
					<TextInput
						type='text'
						placeholder='Enter email'
						IconLabel='alternate_email'
					/>
					<TextInput
						type='password'
						placeholder='Enter password'
						IconLabel='lock'
					/>
					<Button label='Submit now' />
					<SignUpInfo />
				</Form>
			</div>
		</>
	);
}
