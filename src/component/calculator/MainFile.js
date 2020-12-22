import React from 'react'
import {add , minus , div , mult} from './CalFunc'

function MainFile(){
    return(
        <React.Fragment>
        <ul>
            <li>The sum of two number is : {add(100,20)}</li>
            <li>The Minus of two number is : {minus(10,20)}</li>
            <li>The Divsion of two number is : {div(521,3)}</li>
            <li>The Multiplication of two number is : {mult(10,20)}</li>
        </ul>

        </React.Fragment>
    )
}

export default MainFile