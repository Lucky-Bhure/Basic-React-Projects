import React from 'react'
import "./Converter.css"

const Converter = () => {
    return (
        <div className='converter'>
            <div className='container'>
                <div className='written'>
                    <p className='value'>From</p>
                    <input className='val'  type="number" name="from" id="" />
                </div>
                <div className='currenyType'>
                    <p className='type'>Currency Type</p>
                    <input className='val' type="text" />
                </div>
            </div>
            <button className='swap'>Swap</button>
            <div className='container'>
                <div className='written'>
                    <p className='value'>To</p>
                    <input className='val' type="number" name="from" id="" readOnly />
                </div>
                <div className='currenyType'>
                    <p className='type'>Currency Type</p>
                    <input className='val' type="" />
                </div>
            </div>
            <button className='btn-converter'>Convert <swap id="from">1</swap> to <swap id="to">2</swap></button>
        </div>
    )
}

export default Converter
