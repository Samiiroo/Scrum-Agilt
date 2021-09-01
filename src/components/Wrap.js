import React from 'react'
import '../scss/components/_faq.scss'

const Wrap = (props) => {
    return (
        <div className='showcase'>
            <div className='title'><h2>Vanliga frågor</h2></div>
            {props.children}
        </div>
    )
}

export default Wrap;