import React from 'react';
import styles from './Button.module.css'

type Props = {
    children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
    return (
        <button className={styles.mainButton}>
            {children}
        </button>
    );
};

export default Button;