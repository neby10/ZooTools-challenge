import React from "react";

function SeeLeaderboardButton({buttonText}) {

    const buttonStyle = {
        backgroundColor: "var(--color-accessory-background)",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        fontSize: "12px",
    }

    return (
        <button 
            style={buttonStyle}
            onClick={() => alert(buttonText + " button was clicked")}>
                {buttonText}
            </button>
    )
}

export default SeeLeaderboardButton;