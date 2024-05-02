import styles from '../styles/bodyContainer.module.css';

type BodyContainerProps = {
  children: React.ReactNode;
};

export const BodyContainer = (props: BodyContainerProps) => {
  const { children } = props;

  return (
    <>
      <div className={styles['body-container-container']}>{children}</div>
    </>
  );
};
