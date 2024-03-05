import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Usuarios Totales</span>
        <span className={styles.number}>10.200</span>
        <span className={styles.detail}>
          <span className={styles.positive}>10%</span> que el mes pasado
        </span>
      </div>
    </div>
  );
};

export default Card;
