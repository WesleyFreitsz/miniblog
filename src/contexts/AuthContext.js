import { useContext, createContext } from "react";


// Cria o contexto
const AuthContext = createContext();

// Provider que envolve os componentes e fornece o valor
export function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook para acessar o valor do contexto
export function useAuth() {
  return useContext(AuthContext);
}
