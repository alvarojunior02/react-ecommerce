import { useState } from "react"
import "./login.css"
import axios from "axios";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setToken, setUser} = useStateContext();

    const navigate = useNavigate();

    const handleSubmit = () => {
        const dataLogin = {
            email: email,
            password: password
        }

        axios.post("http://127.0.0.1:8000/api/login", dataLogin)
            .then(response => {
                setUser(response.data.user);
                setToken(response.data.token);
                navigate("/home", { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="container">
            <header className="headerLogin">
                <h1 className="title">Login - Laravel E-Commerce</h1>
            </header>

            <div className="containerLogin">
                <div className="formLogin">
                    <h3>Informe seus dados para logar</h3>

                    <div className="inputContainer">
                        <label>E-mail</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={(evt) => {
                                setEmail(evt.target.value);
                            }}
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Senha</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={(evt) => {
                                setPassword(evt.target.value);
                            }}
                        />
                    </div>

                    <button className="buttonLoginSubmit" onClick={() => { handleSubmit()}}>
                        <p>Logar</p>
                    </button>
                </div>
            </div>
        </div>
    )
}