const setToken = (accessToken) => {
    localStorage.setItem("accessToken", accessToken)
}

const setRefreshToken = (refreshToken) => {
    localStorage.setItem("refreshToken", refreshToken)
}

const setIsAuthorized = (isAuthorized) => {
    localStorage.setItem("isAuthorized", isAuthorized)
}

const getIsAuthorized = () => {
    const ls = localStorage.getItem("isAuthorized")
    if(ls === "false") return false
    else if(ls === "true") return true
    return false
}

const onLogin = (accessToken, refreshToken, isAuthorized) => {
    setToken(accessToken)
    setIsAuthorized(isAuthorized)
    setRefreshToken(refreshToken)
}

const clearToken = () => {
    localStorage.removeItem("accessToken")
}

const clearRefreshToken = () => {
    localStorage.removeItem("refreshToken")
}

const clearIsAuthorized = () => {
    localStorage.removeItem("isAuthorized")
}

const onLogout = () => {
    clearIsAuthorized()
    clearRefreshToken()
    clearToken()
}

export {
    clearIsAuthorized,
    clearToken,
    onLogin,
    setIsAuthorized,
    setToken,
    onLogout,
    clearRefreshToken,
    setRefreshToken,
    getIsAuthorized
}