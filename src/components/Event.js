import React,{useState} from 'react'

const Event = () => {
    const [num,setNum] = useState(0);

    const handelClick =()=>{
         setNum( Math.random()*10 );

    }
  return (

    <div onClick={handelClick}>Event {num}</div>
  )
}

export default Event

