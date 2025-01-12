import PlainControl from "../../components/plainControl/PlainControl";
import "./Welcome.css"
import {useNavigate, useLocation} from "react-router-dom";
import Divider from "../../components/divider/Divider";
import {useLocale} from "../../context";
import {getExhibitionsByID} from "../../services/api/Exhibition";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

export default function Welcome() {
    const navigate = useNavigate();
    const state = useLocation().state
    const { strings } = useLocale();
    const existExhibitionByID = getExhibitionsByID(state.id)
    let mainContent
    if (!state.hasOwnProperty("id")) {
        mainContent = <ErrorMessage>{strings["wrong_parameters"]}</ErrorMessage>
    } else if (!existExhibitionByID) {
        mainContent = <ErrorMessage>{strings["exhibition_not_exists"]}</ErrorMessage>
    } else {
        function nextHandle() {
            navigate("/languages", {state: state})
        }
        mainContent = (
            <>
                <h1 className="welcome-title">{strings["select_your_language"].toUpperCase()}</h1>
                <Divider height={'100px'}/>
                <div>
                    <PlainControl onClick={nextHandle}>
                        {strings["next"].toUpperCase()}
                    </PlainControl>
                </div>
            </>
        );
    }
    return (
        <div className="horizontal-padding-container full-viewport-height center-container">
            {mainContent}
        </div>
    )
}