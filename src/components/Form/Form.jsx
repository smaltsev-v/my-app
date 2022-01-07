import React, { Component } from "react";
import shorid from 'shortid';



class Form extends Component {
    state = {
        name: '',
        tag: '',
        experience: 'Junior',
        licence: false
    };
    // для генирации уникальных id на impute
 
    nameInputId = shorid.generate();
    tagInputId= shorid.generate();

    handleChange = e => {
    
        const { name, value } = e.currentTarget;
    
        this.setState({
            [name]: value
        });
    
    };

    hendleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            tag: '',
        })
    };

    hendleLicenceChange = e => {
        console.log(e.currentTarget.checked)

        this.setState({ licence: e.currentTarget.checked });
        
    
    };



    render() {
        return (
        <form onSubmit={this.hendleSubmit}>
                <label htmlFor={this.nameInputId } >
            Имя
            <input
             type="text"
             name='name'
             value={this.state.name}
             onChange={this.handleChange}
             id={this.nameInputId }
            />
          </label>
          <label htmlFor={this.tagInputId} >
            Nickname
            <input
              type="text"
              name='tag'
              value={this.state.tag}
              onChange={this.handleChange}
              id={this.tagInputId}
            />
          </label>
          <p>Ваш уровень:</p>
          <label>  
                    <input
                        type="radio"
                        name="experience"
                        value=" Junior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Junior'}
                    />
                    Junior
           </label>    
            <label>
                    <input
                        type="radio"
                        name="experience"
                        value=" Middle"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Middle'}
                    />
                    Middle
            </label>        
            <label>   
                    <input
                        type="radio"
                        name="experience"
                        value=" Senior"
                        onChange={this.handleChange}
                        checked={this.state.experience === 'Senior'}
                    />
                    Senior
            </label>
            <label>
                    <input type="checkbox"
                        name="licence"
                        checked={this.state.licence}
                        onChange={this.hendleLicenceChange}
                    />
                    Cогласен с условием
            </label>
               
            
          <button type='submit' disabled={!this.state.licence}>Отпрвить</button>
          
        </form>
        );
    }
};
 export default Form