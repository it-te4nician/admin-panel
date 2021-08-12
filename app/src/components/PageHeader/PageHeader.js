import styles from './PageHeader.module.css'


export const MainHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_text}>Список заказов</div>
            <div className={styles.header_button}>
                <span className={styles.custom_iconfont_sun}>Светлая тема</span>
            </div>
        </div>
    );
}