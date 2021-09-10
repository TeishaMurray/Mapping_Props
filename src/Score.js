import React from 'react' 

const Scores = (props) => {
       
    return (
        <div>
            <p>Score: {props.scoreData.score}</p>
            Date: {props.scoreData.date}
        </div>
    )

}

export default Scores