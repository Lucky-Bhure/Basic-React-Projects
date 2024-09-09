import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {

    const [password, setPassword] = useState(" ");
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charatorAllowed, setCharatorAllowed] = useState(false);

    const passwordRef = useRef(null);

    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) {str+="0123456789"};
        if(charatorAllowed) {str+="!@#$%&*"};

        for(let i = 0; i < length; i++) {
            pass += str.charAt(Math.floor(Math.random()*str.length + 1));
        }

        setPassword(pass)

    },[length, numberAllowed, charatorAllowed]);

    useEffect(() => {
        generatePassword();
    },[length, numberAllowed, charatorAllowed]);


    const copyPassword = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current.select();
    }

    return (
        <div className='max-h-fit p-6 gap-2 w-full bg-white m-4 rounded-3xl '>
            <h2 className='text-blue-950 text-2xl font-bold mt-6 mb-8'>Password Generator</h2>
            <div className='flex justify-center mt-3 mb-6'>
                <input type="text" className='text-center w-1/2 text-black bg-transparent  text-lg p-2 rounded-e-none border-2' readOnly value={ password } ref={ passwordRef }/>
                <button className='bg-blue-600 text-lg rounded-s-none' onClick={() => {copyPassword()}}>copy</button>
            </div>
            <div className='mt-3 flex-col mb-4 ' >
                <input type="range" placeholder='length' min={8} max={50} id='length' value={length}  className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
                <label htmlFor="length" className=' text-black text-lg ml-2'>Length : { length }</label>
            </div>
            <div className='text-black text-lg felx'>
                <input type="checkbox" name="number" id='number' onChange={() => {setNumberAllowed((prev) => !prev)}}/>
                <label htmlFor="number" className='ml-4' >Number</label>
                <input type="checkbox" name="" id='specialc' onChange={() => {setCharatorAllowed((prev) => !prev)}} className='ml-4'/>
                <label htmlFor="specialc" className='ml-4'>Special Charactor</label>
            </div>
        </div>
    )
}

export default PasswordGenerator
