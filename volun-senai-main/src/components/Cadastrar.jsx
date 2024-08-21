import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./../css/Cadastrar.css";

const Cadastrar = () => {
    return (
        <>
            <main className="cadastrar-container">
                <div className="cadastrar-formulario">
                    <p>Insira os dados</p>
                    <div className="cadastrar-email-container">
                        <label htmlFor="cadastrar-email">E-mail: </label>
                        <input id="cadastrar-email" type="email"/>
                        <label htmlFor="cadastrar-senha">Senha: </label>
                        <input id="cadastrar-senha" type="password"/>
                        <label htmlFor="confirmar-senha">Confirmar a Senha: </label>
                        <input id="confirmar-senha" type="password"/>
                    </div>
                    <div className="cadastrar-botão-container">
                        <button onClick={"cadastrar-email"}>CADASTRAR</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cadastrar;