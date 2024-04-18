import Terminal from "../components/Terminal";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        karthike:$ <span className={styles.help}>type help to start</span>
      </h1>

      <Terminal />
    </div>
  );
}
