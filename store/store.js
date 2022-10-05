import { configureStore } from '@reduxjs/toolkit'
import notificationsReducer from './reducers/notificationsReducer'
import pandaReducer from './reducers/pandaReducer'

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    panda: pandaReducer
  },
})