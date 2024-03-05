import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/rightbar.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Disponible Ahora</span>
          <h3 className={styles.title}>Planes de entrenamiento segun nivel</h3>
          <span className={styles.subtitle}>Aumenta tu productividad</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Ver más
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Próximamente</span>
          <h3 className={styles.title}>
            ¡Lleva un seguimiento del entrenamiento, planes , ciclos , pesos y
            dieta!
          </h3>
          <span className={styles.subtitle}>Aumenta tu productividad</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Más control
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
