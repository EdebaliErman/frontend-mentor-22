import React from 'react'
import "../../Style/Card.css"
function Card({ pragraph, name, job, img }) {

    const url = process.env.PUBLIC_URL + "./Assets/"

    return (
        <div className='Card'>
            <h2>"{pragraph}"</h2>
            <div className='Card-text'>
                <h4>
                    <span>{name}</span>
                    {" " + job}
                </h4>
            </div>

            <img src={url + img} alt='' />

        </div>
    )
}

export default Card
