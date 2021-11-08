import classes from '../../styles/FormInput/Button.module.css'

export default function Button({label}) {
    return (
        <button class={classes.button}>
            <span>{label}</span>
        </button>
	);
}