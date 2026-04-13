import { useState } from "react";

import styles from "./index.module.css";

export default function Atividade02() {
  const [num, setNum] = useState(0);

  function handleIncrementa() {
    setNum(num + 1);
  }

  function handleSubstract() {
    setNum(num - 1);
  }

  return (
    <div className={styles.container}>
      <h1>Atividade 2 - Contador</h1>
      <h2>Um contador que consegue aumentar e diminuir um numero</h2>
      <div className={styles.dire}>
        <label onClick={() => handleSubstract()} className={styles.botao}>
          -1
        </label>
        <label className={styles.texto}>{`Contador: ${num}`}</label>
        <label onClick={() => handleIncrementa()} className={styles.botao}>
          +1
        </label>
      </div>
    </div>
  );
}
