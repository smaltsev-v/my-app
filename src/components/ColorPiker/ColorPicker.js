import React, { Component } from 'react';
import classNames from 'classnames';
import './ColorPicker.css'

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 3,
    };


    setActiveIdex = index => {         // регистрация ввыбора по клику 
        this.setState({ activeOptionIdx: index });
        

    }




    makeOptionClassName = index => {
        
        // доюовляет класс для выбора елемнта
        
        // return classNames('ColorPicker__option', {
        //     'ColorPicker__option--active': index === this.state.activeOptionIdx,
        // });
        //  console.log(clsx)
        // или так или так 
        // const optionClasses = ['ColorPicker__option'];

        // if (index === this.state.activeOptionIdx) {
        //     optionClasses.push('ColorPicker__option--active');
        // }
        
        // return optionClasses.join(' ');

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
                                className={classNames('ColorPicker__option',
                                    {
                                        'ColorPicker__option--active':
                                            index === this.state.activeOptionIdx,
                                    })}
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
