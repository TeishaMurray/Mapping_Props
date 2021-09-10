import React from 'react'
import Score from './Score'

const Students = (props) => {
    //we define props by passing props as a parameter
    console.log(props)
    console.log(props.scores)
    const scoreList = props.student.scores.map( (score) => <Score scoreData={score} />)
    return (
        <div>
            <h2>Student Name: {props.student.name}</h2>
            <p>Student Bio: {props.student.bio}</p>
            {scoreList}
        </div>
    )
}

export default Students