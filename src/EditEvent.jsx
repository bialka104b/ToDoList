import React from 'react';
import './EditEvent.css';
import {isValidNumberInput} from './utils.js';
import PropTypes from 'prop-types';
import {parseInputAsNumber} from './utils.js';

const EditEvent = (props) => {
    return (
        <div className="edit-event">
            <div className="edit-event__input-group">
                <label htmlFor="name">name</label>
                <input 
                type="text" 
                id="name" 
                name="name"
                value={props.name}
                onChange={e => props.onInputChage({ [e.target.name]: e.target.value})}
                />
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="hour">hour</label>
                <input 
                type="tel" 
                id="hour" 
                name="hour"
                value={props.hour === -1 ? '':props.hour}
                onKeyPress={e => isValidNumberInput(e)}
                onChange={e => props.onInputChage({ [e.target.name]: e.target.value})}
                />
            </div>
            <div className="edit-event__input-group">
                <label htmlFor="minute">minute</label>
                <input 
                type="tel" 
                id="minute" 
                name="minute"
                value={props.minute === -1 ? '':props.minute}
                onKeyPress={e => isValidNumberInput(e)}
                onChange={e => props.onInputChage({ [e.target.name]: e.target.value})}
                />
            </div>
            <button onClick={()=>props.onSave()}>Ok</button>
            <button>Cancel</button>
        </div>
    )
};
EditEvent.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
    onSave: PropTypes.func,
    onInputChage: PropTypes.func,

}

export default EditEvent;