import classNames from 'classnames';
import styles from './style.module.css';

type ListItemProps = {
  label: string;
  handleClick: () => void;
  iconType?: 'table' | 'query';
  isActive?: boolean;
};

const TableIcon = () => {
  return (
    <span
      className={classNames({
        [styles['icon--table']]: true,
        [styles['list-item--icon']]: true
      })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 8h16V5H4v3zm10 11v-9h-4v9h4zm2 0h4v-9h-4v9zm-8 0v-9H4v9h4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"></path>
      </svg>
    </span>
  );
};

const QueryIcon = () => {
  return (
    <span
      className={classNames({
        [styles['icon--query']]: true,
        [styles['list-item--icon']]: true
      })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 4H3v2h18V4zm0 7H8v2h13v-2zm0 7H8v2h13v-2zM5 11H3v9h2v-9z"></path>
      </svg>
    </span>
  );
};

export const ListItem = (props: ListItemProps) => {
  const { label, handleClick, iconType, isActive } = props;

  const getIconType = () => {
    if (iconType === 'table') {
      return <TableIcon />;
    } else if (iconType === 'query') {
      return <QueryIcon />;
    }

    return '';
  };

  return (
    <>
      <li
        className={classNames({
          [styles['list-item']]: true,
          [styles['is-active']]: isActive
        })}
        onClick={handleClick}
        role="button"
        tabIndex={1}
      >
        {getIconType()}
        <span className={styles['list-item--text']}>{label}</span>
      </li>
    </>
  );
};
