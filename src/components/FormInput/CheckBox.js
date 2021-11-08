import classes from '../../styles/FormInput/CheckBox.module.css'

export default function CheckBox({ type, label }) {
    return (
		<label>
			<input type={type} />
            <span className={classes.label}>{label}</span>
		</label>
	);
}