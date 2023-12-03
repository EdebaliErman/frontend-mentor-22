import React from 'react'

function Card({ pragraph, name, job, img }) {
    
    const url=process.env.PUBLIC_URL+"./Assets/"

    return (
        <div>
            <div>
                <p>{pragraph}</p>
                <h4>
                    <span>{name}</span>
                    {job}
                </h4>
            </div>
            <div>
        <img src={url+img} alt=''/>
            </div>
        </div>
    )
}

export default Card
