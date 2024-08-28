import React from "react"
import Logo from "./../assets/logos/logo-big.svg";
import "./../css/Cadastrar.css";

const Cadastrar = ({FormData, setFormData, handleRegister}) => {
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    return (
        <>
            <main className="cadastrar-container">
                <div className="cadastrar-formulario">
                    <img className="cadastrar-logo" src={Logo} alt="Logo"/>
                    <div className="cadastrar-input-container">
                        <label htmlFor="cadastrar-email">E-mail: </label>
                        <input 
                            id="cadastrar-email" 
                            type="email" 
                            value={FormData["cadastrar-email"] || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="cadastrar-input-container">
                        <label htmlFor="cadastrar-senha">Senha: </label>
                        <input 
                            id="cadastrar-senha" 
                            type="password"
                            value={FormData["cadastrar-senha"] || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="cadastrar-input-container">
                        <label htmlFor="confirmar-senha">Confirmar a Senha: </label>
                        <input 
                            id="confirmar-senha" 
                            type="password" 
                            value={FormData["confirmar-senha"] || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="cadastrar-botao-container">
                        <button onClick={handleRegister}>CADASTRAR</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cadastrar;