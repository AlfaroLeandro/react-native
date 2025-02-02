import { create } from "zustand";

interface AuthEstado {
    status: 'autorizado' | 'no_autorizado' | 'chequeando';
    token?: string;
    usuario?: {
        nombre: string;
        email: string;
    }

    login: (email: string, clave: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthEstado>()( (set) => ({
        status: 'chequeando',
        token: undefined,
        usuario: undefined
    })
)