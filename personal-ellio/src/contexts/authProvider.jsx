import { createContext, useReducer, useEffect } from "react";
import auth from "../config/firebase.config";
import {
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updatePassword,
  updateEmail,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";

const initialState = {
  isLogin: false,
  initialized: false,
  user: null,
  userFolder: null,
  errorMessage: null,
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";
const INITIALIZE = "INITIALIZE";
const UPDATE_USER = "UPDATE_USER";
const ERROR = "ERROR";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...action.payload,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...action.payload,
        isLogin: false,
      };
    case INITIALIZE:
      return {
        ...action.payload,
        initialized: true,
      };
    case UPDATE_USER:
      return {
        ...state,
        userFolder: action.payload,
      };
    case ERROR:
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(initialState);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            ...initialState,
            initialized: true,
          },
        });
      } else {
        dispatch({
          type: INITIALIZE,
          payload: {
            ...initialState,
          },
        });
      }
    });
  }, []);

  const login = async (userEmail, pass) => {
    try {
      await signInWithEmailAndPassword(auth, userEmail, pass);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          ...state,
          checkLogin: true,
          authorize: true,
          errorMessage: "",
        },
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
      console.log(error);
    }
  };

  const logout = () => {
    signOut(auth);
    dispatch({
      type: LOGOUT,
      payload: {
        ...initialState,
        initialized: true,
      },
    });
  };

  const createUser = async (newEmail, newPass) => {
    try {
      await createUserWithEmailAndPassword(auth, newEmail, newPass);
      return true;
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
      return false;
    }
  };

  const changePass = async (newPass) => {
    try {
      await updatePassword(auth.currentUser, newPass);
      return true;
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
      return false;
    }
  };

  const changeEmail = async (newEmail) => {
    try {
      await updateEmail(auth.currentUser, newEmail);
      return true;
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
      return false;
    }
  };

  const verified = async (callback) => {
    try {
      await sendEmailVerification(auth.currentUser);
      callback();
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
      console.log(error.code);
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, logout, createUser, changePass, changeEmail, verified }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
