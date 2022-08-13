import React from 'react'

import styles from './App.module.css';

function ItenaryComponent() {
    const success = true;
    return (
        <div>
            {success ? <h3 className={styles.success}>Success</h3> : <h3 className={styles.error}>Failure</h3>}
        </div>
    )
}

export default ItenaryComponent