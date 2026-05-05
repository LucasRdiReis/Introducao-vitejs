import { Link } from "react-router";
import styles from "./index.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1>Aula React com VITE JS</h1>
      <div className={styles.containerItens}>
        <h2>Exemplos</h2>
        <Link to="/exemplo/1">Exemplo 1 - componente base</Link>
        <Link to="/exemplo/2">Exemplo 2 - uso de estilização com module</Link>
        <Link to="/exemplo/3">Exemplo 3 - status</Link>
        <Link to="/exemplo/4">Exemplo 4</Link>
        <Link to="/exemplo/5">Exemplo 5</Link>
        <Link to="/exemplo/6">Exemplo 6</Link>
        <Link to="/exemplo/7">Exemplo 7</Link>
        <Link to="/exemplo/8">Exemplo 8</Link>
        <Link to="/exemplo/9">Exemplo 9</Link>
        <Link to="/exemplo/10">Exemplo 10</Link>
        <Link to="/exemplo/11">Exemplo 11</Link>
        <Link to="/exemplo/12">Exemplo 12</Link>
        <Link to="/exemplo/13">Exemplo 13</Link>
        <Link to="/exemplo/14">Exemplo 14</Link>
      </div>
      <div className={styles.containerItens}>
        <h2>Atividades</h2>
        <Link to="/atividade/1">Atividade 1</Link>
        <Link to="/atividade/2">Atividade 2</Link>
        <Link to="/atividade/3">Atividade 3</Link>
        <Link to="/atividade/4">Atividade 4</Link>
      </div>
    </div>
  );
}

export default Home;
