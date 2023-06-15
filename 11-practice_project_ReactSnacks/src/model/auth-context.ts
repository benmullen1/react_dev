import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    username: "",
    logout: () => {},
    login: (username:string, password:string) => {}
});

export default AuthContext;