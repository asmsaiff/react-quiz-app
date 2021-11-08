import Illustration from './Illustration'
import Form from './Form'
import TextInput from './FormInput/TextInput';
import CheckBox from './FormInput/CheckBox';
import Button from './FormInput/Button';
import SignUpInfo from './SignUpInfo';
// import classes from "../styles/Signup.module.css";
import SignUpImage from "../assets/images/signup.svg";

const SignUp = () => {
    return (
		<>
			<h1>Create an account</h1>
			<div class='column'>
				<Illustration illustration={SignUpImage} />
				<Form cssClass='signup'>
					<TextInput
						type='text'
						placeholder='Enter name'
						IconLabel='person'
					/>
					<TextInput
						type='email'
						placeholder='Enter email'
						IconLabel='alternate_email'
					/>
					<TextInput
						type='password'
						placeholder='Enter password'
						IconLabel='lock'
					/>
					<TextInput
						type='password'
						placeholder='Confirm password'
						IconLabel='lock_clock'
					/>

					<CheckBox
						type='checkbox'
						label='I agree to the Terms & Conditions'
					/>
					<Button label='Submit Now' />
					<SignUpInfo />
				</Form>
			</div>
		</>
	);
}

export default SignUp