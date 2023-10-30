import { useState } from 'react';


export default function LoginPage({getAuthorized}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleChange = (event) => {
        if (event.target.name === "Name") {
            setName(event.target.value)
        }
        else if (event.target.name === "Email") {
            setEmail(event.target.value)
        }
    }

    return (
        <div>
            <form>
                <input name="Name" value={name} onChange={(event) => handleChange(event)}/>
                <input name="Email" value={email} onChange={(event) => handleChange(event)}/>
                <button onClick={() => getAuthorized(name, email)} type="submit">Login</button>
            </form>
        </div>
    )
}