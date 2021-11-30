import React, { createContext } from 'react';
import useFirebase from './useFirebase';

export const AuthContext=createContext()
const AuthProvider = ({childernt}) => {
    const allData=useFirebase()
    return (
        <AuthContext.Provider value={allData}>
             {childernt}
        </AuthContext.Provider>
    );
};

export default AuthProvider;