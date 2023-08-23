import './App.css';
import LeaderboardPanel from './components/LeaderboardPanel';
import OverviewPanel from './components/OverviewPanel';
import TimeFrameSelector from './components/TimeFrameSelector';
import VisualChartPanel from './components/VisualChartPanel';
import userLeaderboard from './dummy_data/userLeaderboard.json';
import signupLocation from './dummy_data/signupLocation.json';
import traffic from './dummy_data/traffic.json';
import insights from './dummy_data/insights.json';
import behaviour from './dummy_data/behavior.json';

function App() {

  const timeFrames = ["1h", "24h", "30d", "60d"];

  return (
    <div className="App">
      <div className="App-header">
        <h1>Summer referral competition</h1>
        <TimeFrameSelector lengths={timeFrames} />
      </div>
      <VisualChartPanel />
      <OverviewPanel 
        title={insights.title}
        caption={insights.caption}
        items={insights.items} />
      <div className='LeaderboardPanel-container'>
        <LeaderboardPanel />
        <LeaderboardPanel />
      </div>
      <div className='LeaderboardPanel-container'>
        <LeaderboardPanel />
        <LeaderboardPanel />
      </div>
    </div>
  );
}

export default App;
