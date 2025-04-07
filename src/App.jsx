import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile'; // Create this component for the profile page
import Dashboard from './components/Dashboard';
import Tasks from "./components/Tasks";
import PendingTasks from './components/PendingTasks';
import ChatApp from './components/ChatApp';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          {/* Define routes for different paths */}
          <Route path='/'element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path='/tasks'element={<Tasks/>}/>
          <Route path='/pendingtasks'element={<PendingTasks/>}/>
          <Route path='/chating'element={<ChatApp/>}/>
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
