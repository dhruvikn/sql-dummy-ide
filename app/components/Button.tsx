import classNames from 'classnames';
import styles from '../styles/button.module.css';

type ButtonProps = {
  label: string;
  type: 'primary' | 'secondary';
  isLoading?: boolean;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { label, isLoading, onClick, type } = props;

  return (
    <button
      className={classNames({
        [styles['button']]: true,
        [styles[`button--${type}`]]: true
      })}
      onClick={onClick}
      disabled={isLoading}
    >
      {label}
      {!!isLoading ? (
        <>
          &ensp;<div className="loader"></div>
        </>
      ) : (
        ''
      )}
    </button>
  );
};