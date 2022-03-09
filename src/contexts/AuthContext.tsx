import { createContext, ReactNode, useReducer } from "react";
import { authReducer, AuthState } from "../reducers/AuthReducer";
import { AuthActionType } from '../reducers/type';

const {TOGGLE_AUTH} = AuthActionType

interface AuthContextProps {
    children: ReactNode
}

interface AuthContextDefault{
    authInfo: AuthState,
    toggleAuth: (userName: string) => void
}

const AuthDefault = {
    isAuthenticated: false,
    userName: ''
}

export const AuthContext = createContext<AuthContextDefault>({
    authInfo: AuthDefault,
    toggleAuth: () => {}
})

const AuthContextProvider = ({children}: AuthContextProps) => {
    const [authInfo, dispatch] = useReducer(authReducer, AuthDefault)

    const toggleAuth = (userName: string) => dispatch({type: TOGGLE_AUTH, payload: userName})

    const authContextData = {
        authInfo, 
        toggleAuth
    }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    ) 

}

export default AuthContextProvider