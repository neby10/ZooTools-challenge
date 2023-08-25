import React from 'react';
import SeeLeaderboardButton from './SeeLeaderboardButton';

function UserLeaderboardPanel({ title, columns, buttonText, data }) {

    const userLeaderboardPanelStyle = {
        width: "100%",
        backgroundColor: "var(--color-layered-background)",
    }

    const userLeaderboardPanelHeaderStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "15px 30px",
    }

    const userLeaderboardPanelFooterStyle = {
        display: "flex",
        justifyContent: "flex-start",
        margin: "15px 30px",
    }

    const titleStyle = {
        fontSize: "20px",
        fontWeight: "bold",
    }

    const leaderboardItemStyle = {
        // display: "flex",
        // flexDirection: "row",
        // fontSize: "18px",
        // justifyContent: "space-between",
        // margin: "10px 30px",
    }

    const textStyle = {
        fontSize: "12px",
        textAlign: "left",
    }

    return (
        <div style={userLeaderboardPanelStyle} className='my-box-shadow'>
            <div style={userLeaderboardPanelHeaderStyle}>
                <div style={titleStyle}>{title}</div>
            </div>
            <table style={{width: "100%", borderCollapse: "separate", borderSpacing: "25px"}}>
                <thead>
                    <tr>
                        <td style={textStyle}>{columns[0]}</td>
                        <td style={textStyle}>{columns[1]}</td>
                        <td style={textStyle}>{columns[2]}</td>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((dataObject, index) => (
                        <tr key={index}>
                            <td style={textStyle}>{dataObject.email}</td>
                            <td style={textStyle}>{dataObject.friends_invited.toLocaleString()}</td>
                            <td style={textStyle}>{dataObject.country}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <div>
            </div>
            <div style={userLeaderboardPanelFooterStyle} >
                <SeeLeaderboardButton buttonText={buttonText} />
            </div>
        </div>
    )
}

export default UserLeaderboardPanel;