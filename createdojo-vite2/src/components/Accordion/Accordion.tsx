import React, {useState} from 'react';

export const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="accordion-item">
            <div
                className="accordion-title"
                onClick={() => setIsActive((prevIsActive) => !prevIsActive)}
            >
                <div>{title}</div>
                <div>{isActive ? "-" : "+"}</div>
            </div>
            {isActive && content}
        </div>
    )
}