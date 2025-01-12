export default function ErrorMessage(props) {
    return (
        <h3 className="error-message">
            {props.children}
        </h3>
    );
}