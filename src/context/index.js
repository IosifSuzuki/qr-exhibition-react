import React from "react";
import {LOCALES, LOCALE_STRINGS} from "./constants";

const initialState = LOCALE_STRINGS[LOCALES.en]

const LocaleContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_LOCALE": {
            return LOCALE_STRINGS[action.payload.code]
        }
        default:
            return state;
    }
}

export const LocaleProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <LocaleContext.Provider value={{state, dispatch}}>
            {children}
        </LocaleContext.Provider>
    )
}

export const useLocale = () => {
    const context = React.useContext(LocaleContext);
    const { state, dispatch } = context;
    const changeLocale = (code) => {
        dispatch({
            type: "CHANGE_LOCALE",
            payload: {
                code,
            }
        });
    };
    return {
        strings: state,
        changeLocale,
    };
};