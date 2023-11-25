import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

export const AuthContext = createContext()
export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const login = user => setUser(user)
    const logout = () => setUser(null)
    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}