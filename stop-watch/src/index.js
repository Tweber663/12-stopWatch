import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import styles from './styles/global.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={styles.cont}>
    <App/>
    </div>
);

