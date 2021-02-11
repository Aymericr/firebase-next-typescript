import React from "react";
import Link from "next/link";
import {useAuth} from "../hooks/useAuth";

export default function Navbar() {
    const {user, signIn, signOut} = useAuth();
    const handleSignOut = () => {
        console.log('Signing out...')
        signOut()
    }
    const handleSignIn = () => {
        console.log('Signing in...')
        signIn()
    }
    return (
        <header>
            <Link href='/'>Home</Link>{' '}
            <Link href='/a-page'>A Page</Link>{' '}
            <Link href='/blog'>Blog</Link>{' '}
            <Link href='/api/posts'>Posts API</Link>{' '}
            {user ?
                <button onClick={handleSignOut}>Sign out</button>
                :
                <button onClick={handleSignIn}>Sign in</button>
            }
        </header>
    );
}
