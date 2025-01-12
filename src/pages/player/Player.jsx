import "./Player.css"
import {useLocation} from "react-router-dom";
import {getExhibitionsByID} from "../../services/api/Exhibition";
import {useLocale} from "../../context";
import AudioPlayer from "../../components/audioPlayer/AudioPlayer";
import PreviewImage from "../../components/previewImage/PreviewImage";
import Divider from "../../components/divider/Divider";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

export default function Player() {
    const state = useLocation().state
    const {strings} = useLocale()
    const existExhibitionByID = getExhibitionsByID(state.id)
    let mainContent
    if (!state.hasOwnProperty("id")) {
        mainContent = <ErrorMessage>{strings["wrong_parameters"]}</ErrorMessage>
    } else if (!existExhibitionByID) {
        mainContent = <ErrorMessage>{strings["exhibition_not_exists"]}</ErrorMessage>
    } else {
        const exhibition = getExhibitionsByID(state.id)
        mainContent = (
            <>
                <h1 className="player-title">{strings["listen"].toUpperCase()}</h1>
                <div>
                    <PreviewImage src={exhibition.img} width={'200px'}/>
                    <Divider height={"40px"} />
                    <AudioPlayer src={exhibition.audio[state.langCode]}/>
                </div>
                <Divider height="100px" />
                <h3 className="player-copyright">{strings["copyright"].toUpperCase()}</h3>
            </>
        )
    }
    return (
        <div className="horizontal-padding-container player-container">
            {mainContent}
        </div>
    )
}