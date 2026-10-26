import ButtonExample from "./ButtonExample";

export default function ConditionalButtons({ loggedIn }) {
  const text = loggedIn ? "Logout" : "Login";
  const className = loggedIn ? "logout-button" : "login-button";

    function handleClick() {
        if (loggedIn){
            alert("You logged out!");
        } else {
            alert("You logged in!");
        }
    }

    return(
        <ButtonExample
        className={className}
        text={text}
        onClick={handleClick}
        />
    );
}
