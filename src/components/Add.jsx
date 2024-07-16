import React from 'react'

const Add = (props) => {
    const {a,b} = props;
    const arr= ['✌','😍','🎈']




  return (
    <div>{a+b}
        {
           arr.length >0 ? 1: 0
        }
        <ul>
            {
                arr.map(item => {
                   return <li>{item}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Add