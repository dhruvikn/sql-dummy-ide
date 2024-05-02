import styles from './style.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <>
      <div className={styles['header-container']}>
        <h1 className={styles['header--title']}>SQL Dummy IDE</h1>

        <h2 className={styles['header--subtitle']}>
          Crafted with love on&nbsp;
          <Link target="_blank" href="https://github.com/dhruvikn/sql-dummy-ide">
            GitHub
          </Link>
          &nbsp;by&nbsp;
          <Link target="_blank" href="https://linktr.ee/dhruvikn">
            Dhruvik Neharia
          </Link>
        </h2>
      </div>
    </>
  );
};
