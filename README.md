# Welcome to ZooTools Challenge!

## Project Overview
- This frontend app is my code submission for the Software Internship with ZooTools. 

## Scope of Functionality
- This project does not do anything other than display dummy_data and look fresh.

## Installation
- This project was created using create-react-app. There are no additional dependencies.

## Visit
- Deployed on Netlify: [Visit Project]()

## Project Notes
- This site was created with the React library.
- Styling mostly implemented within each component since many styles are component specific. General styling is utilized in App.css.
- Flag images, people icon found at the following website: [Icon Finder](https://www.iconfinder.com/)
- Emblems in insight panel customized using my Canva profile.
- I did not achieve subtle background lines in the BarChartPanel. I wonder if this would be best achieved with a background image or css...
- All data created and stored in dummy_data folder as JSON objects

## Known Bugs
- Not quite a bug but needs noted. Site is not currently responsive for mobile viewing.
- Within the highlighted text divs, if text is too long it will expand to next line
- Behaviour Panel heading is not shifted over slightly like it is in the original design. I am unsure if this was designed to be that way. 

## Component Structure
- App
    - TimeFrameSelector
    - BarChartPanel
        - BarChartItem
    - OverviewPanel
        - InsightItem
    - UserLeaderboardPanel
        - SeeLeaderboardButton
    - LeaderboardPanel
        - SeeLeaderboardButton

## TODO:
- MISC.
    - Buttons
        - make buttons modular by creating a button component??
        - change button background color based on which one is active
    - REVIEW CODE TO SIMPLIFY AND IMPLEMENT BETTER CODE MODULARITY WITH COMPONENTS WHERE NECESSARY
- Finish ReadME
- Deploy to Netlify when Ready
- Share with Jorge **(GitHub Repo Link + Netlify App Link)**