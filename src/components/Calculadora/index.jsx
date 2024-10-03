import { useState, useEffect } from "react";
import styles from './Calculadora.module.css';

const Calculadora = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [estadoImc, setEstadoImc] = useState('não calculado');
    const [erroImc, setErroImc] = useState(true);
    const [erroMsg, setErroMsg] = useState('Preencha todos os campos para calcular o seu IMC.');

    const [tabelaVisivel, setTabelaVisivel] = useState(false);

    function calculaImc() {
        return (
            (peso / (altura / 100 * altura / 100)).toFixed(1)
        )
    }

    useEffect(() => {
        if ((peso == 0 && altura == 0) || (peso == '') || (altura == '') || (imc == 'NaN')) {
            setErroImc(true);
            setErroMsg('Preencha todos os campos para calcular o seu IMC.');
            return;
        } else if (altura < 30) {
            setErroImc(true);
            setErroMsg('Atenção: a altura deve ser preenchida em centímetros.');
            return;
        }

        setErroImc(false);
        setImc(calculaImc());

    }, [peso, altura]);

    useEffect(() => {
        let novoEstado = '';
        
        if (imc <= 16.9) {
            novoEstado = 'Muito abaixo do peso';
        } else if (imc <= 18.4) {
            novoEstado = 'Abaixo do peso';
        } else if (imc <= 24.9) {
            novoEstado = 'Peso Ideal';
        } else if (imc <= 29.9) {
            novoEstado = 'Acima do peso';
        } else if (imc <= 34.9) {
            novoEstado = 'Obesidade grau I';
        } else if (imc <= 39.9) {
            novoEstado = 'Obesidade grau II';
        } else if (imc >= 40) {
            novoEstado = 'Obesidade grau III';
        }
        setEstadoImc(novoEstado);
    }, [imc]);

    return (
        <>
            <section className={styles.calculadora}>
                
                <form className={styles.form}>
                    <p>Coloque seus dados para calculo do seu IMC:</p>

                    <div className={styles.formGrid}>
                        <label className={styles.formLabel} for="peso">Peso (kg)</label>
                        <input onKeyUp={(e) =>  setPeso(parseInt(e.target.value))}
                            className={styles.formInput} type="number" id="peso" />

                        <label className={styles.formLabel} for="altura">Altura (cm)</label>
                        <input onKeyUp={(e) =>  setAltura(parseInt(e.target.value))}
                            className={styles.formInput} type="number" id="altura" />

                    </div>
                </form>

                <div className={styles.result}>
                    {erroImc ? (
                        <p>{erroMsg}</p>
                    ) : (
                        <>
                            <p>O seu IMC é de: 
                                <span className={styles.resultImc}>{imc}</span> : <span className={styles.resultImc}>{estadoImc}</span>
                                <span onClick={() => setTabelaVisivel(!tabelaVisivel)} className={styles.imcTabela} title="Faixas de IMC">🔎</span>
                            </p>
                        </>
                    )}
                </div>

                {tabelaVisivel && (
                    <ul className={styles.tabela}>
                        <li className={styles.linha}>
                            <p className={styles.titulo}> IMC (kg/m2)</p>
                            <p className={styles.titulo}>Classificação</p>
                        </li>

                        <li className={styles.linha}>
                            <p>Menor que 16,9</p>
                            <p>muito abaixo do peso</p>
                        </li>
                        <li className={styles.linha}>
                            <p>De 17 a 18,4</p>
                            <p>abaixo do peso</p>
                        </li>
                        <li className={styles.linha}>
                            <p>De 18,5 a 24,9</p>
                            <p>peso normal</p>
                        </li>
                        <li className={styles.linha}>
                            <p>De 25 a 29,9</p>
                            <p>acima do peso</p>
                        </li>
                        <li className={styles.linha}>
                            <p>De 30 a 34,9</p>
                            <p>Obesidade grau I</p>
                        </li>
                        <li className={styles.linha}>
                            <p>De 35 a 40</p>
                            <p>Obesidade grau II</p>
                        </li>
                        <li className={styles.linha}>
                            <p>maior que 40</p>
                            <p>Obesidade grau III</p>
                        </li>
                    </ul>
                )}
            </section>
        
        </>
    )
}

export default Calculadora;