const getIsAuthenticated = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

export default { getIsAuthenticated, getUsername };
