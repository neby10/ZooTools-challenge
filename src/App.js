import './App.css';
import LeaderboardPanel from './components/LeaderboardPanel';
import OverviewPanel from './components/OverviewPanel';
import TimeFrameSelector from './components/TimeFrameSelector';
import BarChartPanel from './components/BarChartPanel';
import userLeaderboard from './dummy_data/userLeaderboard.json';
import signupLocation from './dummy_data/signupLocation.json';
import traffic from './dummy_data/traffic.json';
import insights from './dummy_data/insights.json';
import behaviour from './dummy_data/behavior.json';
import bar_chart from './dummy_data/bar_chart.json';

function App() {

  const timeFrames = ["1h", "24h", "30d", "60d"];

  const appStyle = {
    textAlign: "center",
    width: "84%",
    margin: "20px auto",
  }

  const appHeaderStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }

  const leaderboardPanelContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridGap: "30px",
  }

  return (
    <div style={appStyle}>
      <div style={appHeaderStyle} className="section">
        <h1>Summer referral competition</h1>
        <TimeFrameSelector lengths={timeFrames} />
      </div>
      <BarChartPanel items={bar_chart.items} />
      <OverviewPanel 
        title={insights.title}
        caption={insights.caption}
        items={insights.items} />
      <div style={leaderboardPanelContainerStyle} className='section'>
        <LeaderboardPanel
          title={traffic.title} 
          columns={traffic.columns} 
          buttonText={traffic.button_text} 
          data={traffic.data} />
        <LeaderboardPanel 
          title={traffic.title} 
          columns={traffic.columns} 
          buttonText={traffic.button_text} 
          data={traffic.data} />
        <LeaderboardPanel
          title={signupLocation.title} 
          columns={signupLocation.columns} 
          buttonText={signupLocation.button_text} 
          data={signupLocation.data} />
        <LeaderboardPanel
          title={behaviour.title} 
          columns={behaviour.columns} 
          buttonText={behaviour.button_text} 
          data={behaviour.data} />
      </div>
    </div>
  );
}

export default App;
