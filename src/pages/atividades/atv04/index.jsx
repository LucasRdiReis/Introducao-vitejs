import { useState } from "react";
import styles from "./index.module.css";

export default function Exemplo05() {
  const [nume, setNume] = useState("");
  const [prod, setProd] = useState("");
  const [produtos, setProdutos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setProdutos([...produtos, { nume, prod }]);
  };

  return (
    <div className={styles.container}>
      <h1>Atividade 4 - Formulário</h1>

      <form onSubmit={handleSubmit} className={styles.formulario}>
        <label htmlFor="nume" className={styles.tex}>
          insira o numero de produtos e oproduto que dezeja comporar
        </label>
        <div className={styles.inpdiv}>
          <input
            id="nume"
            type="number"
            placeholder="quantidade"
            className={styles.bt1}
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />

          <input
            id="prod"
            type="text"
            placeholder="produto"
            className={styles.bt2}
            value={prod}
            onChange={(e) => setProd(e.target.value)}
          />

          <button type="submit">Adicionar Produto</button>
        </div>
      </form>

      <h2>Lista</h2>
      {produtos.map((item, index) => (
        <p className={styles.pro} key={index}>
          {item.nume} - {item.prod}
        </p>
      ))}
    </div>
  );
}
