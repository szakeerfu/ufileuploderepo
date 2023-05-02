import React from 'react'
import   { useRef } from 'react'
import './Refassment.css'

const Refassment = () => {

    const inputFileRef = useRef(null);

    const handleClick = () => {
        inputFileRef.current.click()
        }

        return (
            <div className='input'>
                <input style={{ display: "none" }}
                    type='file'
                    ref={inputFileRef}
                    onChange={e => console.log(e.target.value)}

                />
                <button onClick={handleClick}>Uplode File</button>
            </div>
        )
    }

    export default Refassment