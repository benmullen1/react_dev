import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => { 
        console.log("no longer logged in")
    }
});

export default AuthContext;