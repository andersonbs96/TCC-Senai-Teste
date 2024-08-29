import React, { useState } from "react";

const DadosPessoal = () => {
    const [DadosPagina, setDadosPagina] = useState(1);

    const proxPasso = () => {
        setDadosPagina(DadosPagina + 1)
    }

    const antPasso = () => {
        setDadosPagina(DadosPagina - 1)
    }

    const PassoPagina = () => {
        switch (DadosPagina) {
            case 1:
                return (
                    <div>
                        <h3>Passo 1</h3>
                        <div>
                            <label htmlFor="dados-nome">Nome</label>
                            <input id="dados-nome"/>
                            <label htmlFor="dados-sobrenome">Sobrenome</label>
                            <input id="dados-sobrenome"/>
                        </div>
                        <div>
                            <label htmlFor="dados-cpf">CPF</label>
                            <input id="dados-cpf" />
                    </div>
                        <div>
                            <label htmlFor="dados-data-nasc">Data de Nascimento</label>
                            <input id="dados-data-nasc" />
                        </div>
                        <div>
                            <label htmlFor="dados-ddd">DDD</label>
                            <input id="dados-ddd" />
                            <label htmlFor="dados-telefone">Telefone</label>
                            <input id="dados-telefone" />
                        </div>
                        <div>
                            <button onClick={proxPasso}>Próximo</button>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3>Passo 2</h3>
                        <div>
                            <label htmlFor="dados-cep">CEP</label>
                            <input id=""/>
                            <button onClick={buscarCEP}></button>
                        </div>
                        <div>
                            <label htmlFor="dados-endereco">Endereço</label>
                            <input id="dados-endereco"/>
                            <label htmlFor="dados-numero">Numero</label>
                            <input id="dados-numero"/>
                        </div>
                        <div>
                            <label htmlFor="dados-bairro">Bairro</label>
                            <input id="dados-bairro"/>
                        </div>
                        <div>
                            <label htmlFor="dados-cidade">Cidade</label>
                            <input id="dados-cidade" />
                            <label htmlFor="dados-estado">UF</label>
                            <select id="dados-estado">
                                <option>-- Selecione o estado --</option>
                            </select>
                        </div>
                        <div>
                            <button onClick={antPasso}>Voltar</button>
                            <button onClick={proxPasso}>Cadastrar</button>
                        </div>
                    </div>
                );
            default: 
                return null;
            }
        }
    return (
        <>
            <div>{PassoPagina()}</div>
        </>
    );
}

export default DadosPessoal;