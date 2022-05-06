import { useEffect, useState } from 'react';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            setError(error.message);
          });
    };

    const createAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            }).catch((error) => {
                setError(error.message);
            });
    };

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user)
                const user = result.user
                setUser(user);
                navigate("/home");
            }).catch((error) => {
                setError(error.message);
            })
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [user])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
            navigate("/login")
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        error,
        user,
        signInWithGoogle,
        logout,
        createAccount,
        signInWithEmail
    }
};

export default useFirebase;