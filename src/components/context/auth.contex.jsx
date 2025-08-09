import { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';

export const AuthContext = createContext({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: ""
});

export const AuthWrapper = (props) => {
    const [user, setUser] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
    })
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
        //  giong cai duoi
        // < AuthContext >
        //     <RouterProvider router={router} /> 
        // </AuthContext >

    )
}