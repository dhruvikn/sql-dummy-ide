import styles from './style.module.css';

type ListItemProps = {
  label: string;
  handleClick: () => void;
  iconType?: 'table' | 'query';
};

const TableIcon = () => {
  return (
    <span className={styles['icon-table']}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 8h16V5H4v3zm10 11v-9h-4v9h4zm2 0h4v-9h-4v9zm-8 0v-9H4v9h4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1z"></path>
      </svg>
    </span>
  );
};

const QueryIcon = () => {
  return (
    <span className={styles['icon-query']}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 4H3v2h18V4zm0 7H8v2h13v-2zm0 7H8v2h13v-2zM5 11H3v9h2v-9z"></path>
      </svg>
    </span>
  );
};

export const ListItem = (props: ListItemProps) => {
  const { label, handleClick, iconType } = props;

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
      <li className={styles['list-item']} onClick={handleClick}>
        {getIconType()}
        {label}
      </li>
    </>
  );
};
