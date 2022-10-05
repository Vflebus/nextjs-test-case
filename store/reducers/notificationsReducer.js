import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notifications: [
        {
            type: "success",
            message: "successfully loaded Raccoon !",
        },
    ],
    fonctionne: true
};

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,

  reducers: {
    addNotificationAction: (state, action) => {
      state.notifications.push(action.payload)
    },
    removeNotificationAction: (state) => {
        state.notifications.pop();
    }
  },

})

// Action creators are generated for each case reducer function
export const { addNotificationAction, removeNotificationAction } = notificationSlice.actions

export default notificationSlice.reducer