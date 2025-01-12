import PlainControl from "../../components/plainControl/PlainControl";
import "./Exhibition.css"
import Divider from "../../components/divider/Divider";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {getExhibitionsByID} from "../../services/api/Exhibition";
import {useLocale} from "../../context";
import PreviewImage from "../../components/previewImage/PreviewImage";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

export default function Exhibition() {
    const navigate = useNavigate();
    const { strings } = useLocale();
    const [searchParams] = useSearchParams();
    const id = parseInt(searchParams.get('id'));
    const langCode = "en"
    const exhibition = getExhibitionsByID(id)
    let mainContent
    if (exhibition) {
        function nextHandle() {
            navigate("/welcome", {
                state: {
                    id: id,
                }
            })
        }
        mainContent = (
            <>
                <h1 className="exhibition-title">{exhibition.title}</h1>
                <h2 className="exhibition-description">{exhibition.description[langCode]}</h2>
                <Divider height={"30px"} />
                <PreviewImage src={exhibition.img} width={'300px'}/>
                <Divider height={"50px"} />
                <div>
                    <PlainControl onClick={nextHandle}>
                        {strings["next"]}
                    </PlainControl>
                </div>
            </>
        )
    } else {
        mainContent = <ErrorMessage>{strings["exhibition_not_exists"]}</ErrorMessage>
    }
    return (
        <div className="center-container horizontal-padding-container">
            {mainContent}
        </div>
    )
}