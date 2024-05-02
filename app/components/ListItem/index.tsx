import styles from './style.module.css';

type ListItemProps = {
  label: string;
  handleClick: () => void;
};

export const ListItem = (props: ListItemProps) => {
  const { label, handleClick } = props;

  return (
    <>
      <li onClick={handleClick}>{label}</li>
    </>
  );
};
