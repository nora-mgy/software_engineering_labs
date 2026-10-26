export default function ButtonExample({className, text, onClick}) {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}
