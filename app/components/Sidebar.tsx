import styles from '../styles/sidebar.module.css';

export const Sidebar = () => {
  return (
    <>
      <div className={styles['sidebar-container']}>
        <h2>Saved Queries</h2>

        <ul></ul>
      </div>
    </>
  );
};
