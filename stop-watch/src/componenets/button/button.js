import styles from './button.module.scss'

const Button = ({func, children}) => {
    return (
      <button className={styles.button} onClick={func}>{children}</button>
    );
  };

export default Button;