import React, { Fragment, useState } from 'react'
const Message = () => {

    let [msg,setMsg]  = useState("Hello");
    let updateHandler = ()=>{
        setMsg("GM")
    }
  return <Fragment>
            <h3>Message component</h3>
            <h3>Message Value:{msg}</h3>
            <button onClick={updateHandler}>GM</button>
            <button onClick={updateHandler}>GA</button>
            <button onClick={updateHandler}>GE</button>
            <button onClick={updateHandler}>GN</button>
        </Fragment>
}

export default Message; 