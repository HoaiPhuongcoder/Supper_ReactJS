import styles from "./mainLayout.module.scss";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.mainLayout}>
      <div className={styles.sidenav}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default MainLayout;
