import React from "react";
import Controls from "./Controls";
import Value from "./Value";
import './Counter.css'




class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };
    static propTypes = {
        // статика описываться до стейта 
    }

    state = {
        value: this.props.initialValue,
    };
    
    hendeleIncrement = () => {
        this.setState(prevState => ({
           value: prevState.value + 1, 
        }));
    };
    
    hendeleDecrement = () => {
        this.setState(prevState => ({
           value: prevState.value - 1, 
        }));
    };
    

    render() { 
        const { value } = this.state;
        
        return (
        <div className="Counter">
                <Value value={value} />
                <Controls
                    onIncrement={this.hendeleIncrement}
                    onDecrement={this.hendeleDecrement}
                />          

        </div>
    );

    }
    
};




export default Counter;