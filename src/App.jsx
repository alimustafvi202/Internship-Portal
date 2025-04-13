import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Student/Header';
import Profile from './components/Student/Profile'; // Create this component for the profile page
import Dashboard from './components/Student/Dashboard';
import Tasks from "./components/Student/Tasks";
import PendingTasks from './components/Student/PendingTasks';
import ChatApp from './components/Student/ChatApp';
import TDashboard from './components/Teacher/Dashboard';
import AssignTask from './components/Teacher/Task';
import Chat from './components/Teacher/ChatApp';
import Students from './components/Teacher/Students';
function App() {
  return (
    <Router>
      <div> 
        <Routes>
          {/* Define routes for different paths */}
          <Route path='/'element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile />} />
          <Route path='/tasks'element={<Tasks/>}/>
          <Route path='/pendingtasks'element={<PendingTasks/>}/>
          <Route path='/chating'element={<ChatApp/>}/>
          <Route path='/teacher'element={<TDashboard/>}/>
          <Route path='/assigntasks'element={<AssignTask/>}/>
          <Route path='/chat'element={<Chat/>}/>
          <Route path='/students'element={<Students/>}/>
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
