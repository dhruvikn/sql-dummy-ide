import styles from './style.module.css';

type ParseMdProps = {
  md: string;
};

export const ParseMd = (props: ParseMdProps) => {
  return (
    <>
      <div className={styles['parseMd-container']}>ParseMd Container</div>
    </>
  );
};
