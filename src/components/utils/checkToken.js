const checkToken = (setError, logout) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const exp = payload.exp;
        console.log("exp " + exp);
        const currentTime = Math.floor(Date.now() / 1000);
        console.log("cur " + currentTime);
        if (currentTime > exp) {
            setError("token expired");
            console.log("token expired");
            logout();
        }
    }
};

export default checkToken;