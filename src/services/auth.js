import { Auth } from 'aws-amplify';
import React from 'react';

export const logout = async () => {
        try {
            await Auth.signOut();
            window.location.reload();
        } catch (error) {
            alert("Não foi possível realizar o logout. Tente novamente");
        }
};
