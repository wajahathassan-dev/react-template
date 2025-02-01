import { useState } from "react"

export default function Student (){

    // approach 1
    // const [firstName, setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // const [email, setEmail] = useState("")

    // approach 2
    // const [student, setStudent] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: ""
    // })
    
    // approach 3
    // const [student, setStudent] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: ""
    // })

    // const handleInput = e => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setStudent({...student, [name]: value})
    // }

    return (
    <>
        {/* approach 1
        <form className="container my-5">
            <input type="text" value={firstName} 
            onChange={e => setFirstName(e.target.value)}
            placeholder="First Name" className="form-control" />
            <input type="text" value={lastName} 
            onChange={e => setLastName(e.target.value)}
            placeholder="Last Name" className="form-control"/>
            <input type="text" value={email} 
            onChange={e => setEmail(e.target.value)}
            placeholder="Email" className="form-control"/>
            <button className="btn btn-primary mt-3">Create</button>
        </form> */}

        {/* approach 2 */}
        {/* <form className="container my-5">
            <input type="text" value={student.firstName} 
            onChange={e => setStudent({...student, firstName: e.target.value})}
            placeholder="First Name" className="form-control" />
            
            <input type="text" value={student.lastName} 
            onChange={e => setStudent({...student, lastName: e.target.value})}
            placeholder="Last Name" className="form-control"/>
            
            <input type="text" value={student.email} 
            onChange={e => setStudent({...student, email: e.target.value})}
            placeholder="Email" className="form-control"/>
            <button className="btn btn-primary mt-3">Create</button>
        </form> */}

        {/* approach 3 */}
        {/* <form className="container my-5">
            <input type="text" value={student.firstName}
            name="firstName" 
            onChange={e => handleInput(e)}
            placeholder="First Name" className="form-control" />
            
            <input type="text" value={student.lastName}
            name="lastName"
            onChange={e => handleInput(e)}
            placeholder="Last Name" className="form-control"/>
            
            <input type="text" value={student.email} 
            onChange={e => handleInput(e)}
            name="email"
            placeholder="Email" className="form-control"/>
            <button className="btn btn-primary mt-3">Create</button>
        </form> */}
    </>
    )
}