import classes from '../../styles/FormInput/TextInput.module.css'

export default function TextInput({type, placeholder, IconLabel, ...rest}) {
    return (
        <div className={classes.textInput}>
            <input type={type} placeholder={placeholder} />
            <span className='material-icons-outlined'> {IconLabel} </span>
        </div>
    )
}