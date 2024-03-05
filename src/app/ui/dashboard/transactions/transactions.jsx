import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ultimas transacciones</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Estado</td>
            <td>Fecha</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/perfil.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Miguel
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendiente
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/perfil.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Carlos
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Pagado</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/perfil.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Juan
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelado
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/perfil.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Pepe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendiente
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
