// import { useNavigate } from 'react-router-dom';
import "./Languages.css"
import {fetchLanguagesWithCodes} from "../../services/api/Languages"
import LanguageItem from "../../components/languageItem/LanguageItem";
import {useNavigate, useLocation} from "react-router-dom";
import {useLocale} from "../../context";
import {getExhibitionsByID, getExhibitionsLanguageCodesByID} from "../../services/api/Exhibition";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

let languageBackgrounds = {
    "en": "#F38D2B",
    "fr": "#019441",
    "de": "#E74538",
    "es": "#FFD92F",
}

let languageBorderColor = {
    "en": "#60A162",
    "fr": "#30A088",
    "de": "#138B46",
    "es": "#FAC73D",
}
export default function Languages() {
    const navigate = useNavigate();
    const state = useLocation().state
    const {strings} = useLocale()
    const {changeLocale} = useLocale()
    const existExhibitionByID = getExhibitionsByID(state.id)
    let mainContent
    if (!state.hasOwnProperty("id")) {
        mainContent = <ErrorMessage>{strings["wrong_parameters"]}</ErrorMessage>
    } else if (!existExhibitionByID) {
        mainContent = <ErrorMessage>{strings["exhibition_not_exists"]}</ErrorMessage>
    } else {
        function onLanguageClick(langCode) {
            changeLocale(langCode)
            navigate("/play", {
                state: {
                    ...state,
                    langCode: langCode,
                }
            })
        }
        const langCodes = getExhibitionsLanguageCodesByID(state.id)
        const languages = fetchLanguagesWithCodes(langCodes)
        mainContent = languages.map(({code, name}) => {
            return (
                <LanguageItem
                    key={code}
                    backgroundColor={languageBackgrounds[code]}
                    borderColor={languageBorderColor[code]}
                    langCode={code}
                    onLanguageClick={onLanguageClick}
                >
                    {name.toUpperCase()}
                </LanguageItem>
            )
        })
    }
    return (
        <div className="center-container">
            <ul className="default-ul languages-ul">
                {mainContent}
            </ul>
        </div>
    )
}