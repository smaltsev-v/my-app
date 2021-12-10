// Свойство 'type'модет быть только 'success', 'warning' или 'error'
//     < html >
//     <p role='alert' class="Alert">текст</p>
import PropTypes from 'prop-types'
import s from './Alert.module.css'




function Alert({ text, type  }) {
   
    return (
        <p role='alert' className={s[type]}>
            { text}
        </p>
    );
}
Alert.prototype = {
    text: PropTypes.string.isRequired,
    typy: PropTypes.oneOf(['success', 'warning', 'error']).isRequired
    
}
export default Alert;