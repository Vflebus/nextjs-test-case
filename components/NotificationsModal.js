import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotificationAction, removeNotificationAction } from "../store/reducers/notificationsReducer";

const NotificationsModal = () => {

    const dispatch = useDispatch()

    const { notifications } = useSelector(({ notifications }) => notifications);
    const currentNotif = notifications.at(-1);

    const removeNotif = () => {
        dispatch(removeNotificationAction());
    }

    if (notifications.length == 0) return null;
    return (
        <div className="notificationsModal" onClick={removeNotif}>
            <div className={"caption " + currentNotif.type}>
                {currentNotif.message}
            </div>
            {(notifications.length > 1) && (
                <div className="numberOfNotifications">
                    {notifications.length}
                </div>
            )}
        </div>
    )
}

export default NotificationsModal;