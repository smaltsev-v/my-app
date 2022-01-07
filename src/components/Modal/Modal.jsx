import React, { Component } from "react";
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.hendalKeyDown);
        
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.hendalKeyDown)
        
    }

    hendalKeyDown = e => {
        if (e.code === 'Escape') {
            console.log('Нажали ESC нужно зарыть модалку');
            this.props.onClose();
        }
    };
    
    hendelBackDropClick = e => {
        console.log('кликнули в backdrop');
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
        <div className="Modal__backdrop" onClick={this.hendelBackDropClick}>
        
            <div className="Modal__content">{this.props.children}</div>

            </div>,
            modalRoot,
        );
    }
}