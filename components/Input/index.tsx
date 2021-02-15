import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react'

interface Props {
    name: string;
    label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({name, label, ...rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(()=> {
        registerField({
            name: fieldName,
            path: 'value',
            ref: inputRef.current
        })
    }, [fieldName, registerField])

    return (
        <div className='flex flex-col mt-4'>
            { label && <label className='text-purple-700 font-bold' htmlFor={fieldName}>{label}</label> }
            <input
                className='mt-1 h-12 border border-gray-300 rounded-lg p-2 text-purple-800' 
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
            />
            { error && <span>{error}</span> }
        </div>
    )
}


export default Input