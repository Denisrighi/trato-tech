import styles from "./Busca.module.scss";

export default function Busca() {
  return (
    <div className={styles.busca}>
      <input
        className={styles.input}
        type="text"
        placeholder="O que você procura?"
      />
    </div>
  );
}
