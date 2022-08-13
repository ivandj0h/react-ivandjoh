import React from 'react'

import styles from './App.module.css';

function ItenaryComponent() {
    const success = true;
    return (
        <div>
            {success ? <h5 className={styles.success}>Success</h5> : <h5 className={styles.error}>Failure</h5>}
        </div>
    )
}

export default ItenaryComponent;