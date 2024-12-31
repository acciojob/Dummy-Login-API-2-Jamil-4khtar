import React,{useState} from 'react'


const dummy = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
]

function Form() {
    const [pError, setPError] = useState("")
    const [userError, setUserError] = useState("")
    const [formData, setFormData] = useState({email: "", password: ""})
    const {email, password} = formData

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = dummy.find((item) => item.email === email);
        if (user) {
            if (user.password === password) {
                setPError("");
                setUserError("");
                setTimeout(() => {
                    console.log(user);
                }, 3000);
            } else {
                setPError("Password Incorrect");
                setUserError("");
            }
        } else {
            setUserError("User not found");
            setPError("");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    id='input-email'
                    type='email'
                    value={email}
                    name='email'
                    onChange={handleChange}
                />
                {userError && <p id='user-error'>{userError}</p>}
                <input
                    id='input-password'
                    type='password'
                    value={password}
                    name='password'
                    onChange={handleChange}
                />
                {pError && <p id='password-error'>{pError}</p>}
                <button id='submit-form-btn'>Login</button>
            </form>
        </div>
    )
}

export default Form