import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Páginas",
    list: [
      {
        title: "Panel",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Usuarios",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Productos",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transacciones",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analíticas",
    list: [
      {
        title: "Ganancias",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reportes",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Equipos",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Usuario",
    list: [
      {
        title: "Configuración",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ayuda",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/perfil.jpg"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Pepe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Salir
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
