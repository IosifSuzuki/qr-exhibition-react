import "./PreviewImage.css"

export default function PreviewImage(props) {
    const src = props.src
    const style = {
        width: props.width || '100%',
        height: props.height || 'auto',
    };
    return (
        <img
            style={style}
            src={src}
        />
    )
}