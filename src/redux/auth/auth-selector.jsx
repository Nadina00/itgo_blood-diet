export const selectIsLoggind = state => state.auth.isLoggind;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectDailyCalories = state => state.auth.dailyCalories;
export const selectIsLoader = state => state.auth.isLoader
export const selectError = state => state.auth.error