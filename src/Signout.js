import React from "react";
import { useMsal } from "@azure/msal-react";

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign out using Redirect</button>
    );
}