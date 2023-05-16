import { useState } from "react"
import "./singup.css"
import axios from "axios";
import { useStateContext } from "../../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

export default function Singup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const {setToken, setUser} = useStateContext();

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert("Senha e Confirmar senha devem ser iguais");
        } else {
            const dataSingup = {
                name: name,
                email: email,
                password: password
            }
    
            axios.post("http://127.0.0.1:8000/api/singup", dataSingup)
                .then(response => {
                    setUser(response.data.user);
                    setToken(response.data.token);
                    navigate("/home", { replace: true });
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        <div className="container">
            <header className="headerSingup">
                <h1 className="title">Crie sua Conta - Laravel E-Commerce</h1>
            </header>

            <div className="containerSingup">
                <div className="formSingup">
                    <h3>Informe seus dados para criar sua conta</h3>

                    <div className="inputContainer">
                        <label>Nome</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={name} 
                            onChange={(evt) => {
                                setName(evt.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="inputContainer">
                        <label>E-mail</label>
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            onChange={(evt) => {
                                setEmail(evt.target.value);
                            }}
                            required
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
                            required
                        />
                    </div>
                    <div className="inputContainer">
                        <label>Confirmar Senha</label>
                        <input 
                            type="password" 
                            name="password" 
                            value={confirmPassword} 
                            onChange={(evt) => {
                                setConfirmPassword(evt.target.value);
                            }}
                            required
                        />
                    </div>

                    <button className="buttonSubmit" onClick={() => { handleSubmit()}}>
                        <p>Criar Conta</p>
                    </button>

                    <p className="formLoginFooter">Ja tem uma conta? <a href="/login">Realize login</a></p>
                </div>
            </div>
        </div>
    )
}