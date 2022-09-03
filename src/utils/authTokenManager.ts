const setToken = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
};

const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem('refreshToken', refreshToken);
};

const setIsAuthorized = (isAuthorized: boolean) => {
    localStorage.setItem('isAuthorized', isAuthorized.toString());
};

const getIsAuthorized = () => {
    const ls = localStorage.getItem('isAuthorized');
    if (ls === 'false') return false;
    else if (ls === 'true') return true;
    return false;
};

const onLogin = (
    accessToken: string,
    refreshToken: string,
    isAuthorized: boolean
) => {
    setToken(accessToken);
    setIsAuthorized(isAuthorized);
    setRefreshToken(refreshToken);
};

const clearToken = () => {
    localStorage.removeItem('accessToken');
};

const clearRefreshToken = () => {
    localStorage.removeItem('refreshToken');
};

const clearIsAuthorized = () => {
    localStorage.removeItem('isAuthorized');
};

const onLogout = () => {
    clearIsAuthorized();
    clearRefreshToken();
    clearToken();
};

export {
    clearIsAuthorized,
    clearToken,
    onLogin,
    setIsAuthorized,
    setToken,
    onLogout,
    clearRefreshToken,
    setRefreshToken,
    getIsAuthorized,
};
