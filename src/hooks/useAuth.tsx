import {
    useState,
    useContext,
    createContext,
    ReactNode,
} from 'react';

// import { auth, db } from '../lib/firebase';


const authContext = createContext({ user: {} });
const { Provider } = authContext;

export function AuthProvider(props: { children: ReactNode }): JSX.Element {
    const auth = useAuthProvider();
    return <Provider value={auth}>{props.children}</Provider>;
}

export const useAuth: any = () => {
    return useContext(authContext);
};

const useAuthProvider = () => {
    const [user, setUser] = useState(null);

    const signIn = async () => {
        try {
            const currentUser = {uid: 1, name: 'John'}
            console.log(currentUser);
            setUser(currentUser)
            return currentUser
        } catch (error) {
            console.log(error)
            return error
        }

    };

    const signOut = async () => setUser(null);

    return {
        user,
        signIn,
        signOut,
    };
};