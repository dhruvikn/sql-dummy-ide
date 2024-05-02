import styles from './style.module.css';

type IDEProps = {
  children: React.ReactNode;
};

export const IDE = (props: IDEProps) => {
  const { children } = props;

  return (
    <>
      <div className={styles['ide-container']}>{children}</div>
    </>
  );
};
