import React, { Component } from "react";
import './Dropdown.css'

class DropDown extends Component {
    state = {
        visible: false,

    };
    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
     }


   
        
    render() {
        const { visible } = this.state  // Диструктаризация  в рендере 
        
        return (
            <div className="Dropdown">
                <button
                    type="button"
                    className="Dropdown__toggle"
                    onClick={this.toggle}>
                    {visible ? 'Скрыть': 'Показать' }
                </button>
                {visible && (
                     <div className="Dropdown__menu">
                    Выпадающие меню
                </div>
                )} 
               
            </div>
        );
     }
}
 
export default DropDown; 
