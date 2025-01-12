import './LanguageItem.css';

export default function LanguageItem(props) {
    const language = props.children
    const langCode = props.langCode
    const borderColor = props.borderColor
    const backgroundColor = props.backgroundColor
    const onLanguageClick = props.onLanguageClick
    const style = {
        "background": backgroundColor,
        "borderColor": borderColor,
    }
    return (
        <li
            key={langCode}
            onClick={() => {onLanguageClick(langCode)}}
            className="language-item"
            style={style}
        >
            {language}
        </li>
    )
}