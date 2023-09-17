import { useState } from "react"


const User = () => {
    const [count, setCount] = useState(0)
    let increase = ()=> {
        setCount(
            count+1
        )
    }
    return (
        <div className="user-card">
            <h1>Count:{count} </h1>
            <button onClick={increase}>Increase</button>
            <h2>Name : Akshay</h2>
            <h3>Location : Dehradun</h3>
            <h4>Contact : @ankur</h4>
        </div>
    )
}

export default User