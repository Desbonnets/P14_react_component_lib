import React from 'react';


const TextInput = ({label, placeholder}) => {

    return <div>
        <label>{label}</label>
        <input type="text" name={label} placeholder={placeholder} ></input>
    </div>
}

export default TextInput