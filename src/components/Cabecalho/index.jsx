import { useState } from "react";
import styles from './Cabecalho.module.css';

const Cabecalho = () => {
    let [infoVisivel, setInfoVisivel] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.header__title}>
                    Calculadora de <span onClick={() => setInfoVisivel(!infoVisivel)}
                        className={styles.enhance} title= "O que significa IMC?">IMC</span>
                </h1>

                {infoVisivel && (
                    <div className={styles.header__description}>
                        <p>
                            💡
                        </p>
                        <p>
                            IMC (Índice de Massa Corpórea) é um valor obtido através da formula: IMC= peso / (altura)*2.
                            Este calculo informa se a pessoa esta no seu peso ideal.
                        </p>
                    </div>
                )}
            </header>
        </>
    )
}

export default Cabecalho;