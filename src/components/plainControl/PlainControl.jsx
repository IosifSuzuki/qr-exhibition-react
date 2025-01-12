import "./PlainControl.css"

export default function PlainControl(props) {
    const onClick = props.onClick
    const id = props.id
    const text = props.children
    const width = props.width

    let backgroundColor
    let foregroundColor
    if (props.hasOwnProperty("backgroundColor")) {
        backgroundColor = props.backgroundColor
    } else {
        backgroundColor = "#F5EF81"
    }
    if (props.hasOwnProperty("foregroundColor")) {
        foregroundColor = props.foregroundColor
    } else {
        foregroundColor = "#17151E"
    }

    const style = {
        backgroundColor: backgroundColor,
        color: foregroundColor,
        width: width
    }
    return (
        <button
            onClick={() => {onClick(id)}}
            style={style}
            className="plain-control"
        >
            {text}
        </button>
    );
}