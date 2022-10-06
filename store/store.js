import { configureStore } from '@reduxjs/toolkit'
import notificationsReducer from './reducers/notificationsReducer'
import pandaReducer from './reducers/pandaReducer'
import raccoonReducer from './reducers/raccoonReducer'

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    panda: pandaReducer,
    raccoon: raccoonReducer
  },
})