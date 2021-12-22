import React, { Component } from 'react';
import './ColorPicker.css'

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 3,
    };


    setActiveIdex = index => {         // регистрация ввыбора по клику 
        this.setState({ activeOptionIdx: index });
        

    }




    makeOptionClassName = index => {                 // доюовляет класс для выбора елемнта 
        const optionClasses = ['ColorPicker__option'];

        if (index === this.state.activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active');
        }
        
        return optionClasses.join(' ');

    };

    render() { 
        const { activeOptionIdx } = this.state; // Диструкторизация чтоб не использовать this.state
        const { options } = this.props;        // Диструкторизация чтоб не использовать this.props
        const {label } = options[activeOptionIdx];  // поиск активного элемента  показвает активыйн (выбраный цыет )

        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker__title">Color Picker</h2>
                <p>Выбран цвет:{ label} </p>
                <div>
                    {options.map(({ label, color }, index) => {
                        const optionClassName = this.makeOptionClassName(index);


                        return (
                            <button
                                key={label}
                                className={optionClassName}
                                style={{ backgroundColor: color }}
                                onClick={() => this.setActiveIdex(index)}
                            ></button>
                        );
                    
                    })}
                </div>
            </div>

        );
    }

 }




export default ColorPicker;
