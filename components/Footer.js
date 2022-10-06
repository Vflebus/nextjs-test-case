import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addNotificationAction } from '../store/reducers/notificationsReducer'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
    const dispatch = useDispatch();

    const sendNotif = () => {
        dispatch(addNotificationAction({
            type: 'success',
            message: 'Cc'
        }));
    }
    return (
        <>
            <button onClick={sendNotif}>TestNotif</button>
            <nav className={styles.navLinks}>
                <Link href="/">Table test case</Link> |
                <Link href="/form">Form test case</Link> |
                <Link href="/animals">Http test case</Link>
            </nav>
        </>
    )
}