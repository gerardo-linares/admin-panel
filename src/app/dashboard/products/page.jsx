import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Buscar producto..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Agregar</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Descripción</td>
            <td>Precio</td>
            <td>Fecha</td>
            <td>Inventario</td>
            <td>Acción</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/perfil.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Remera
              </div>
            </td>
            <td>Desc</td>
            <td>$12000</td>
            <td>03.10.2024</td>
            <td>34</td>
            <td>
              <div className={`${styles.buttons}`}>
                <Link href="">
                  <button className={`${styles.button} ${styles.view}`}>
                    Ver
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Borrar
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default ProductsPage;
