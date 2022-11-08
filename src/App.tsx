import {HashRouter as Router,Routes,Route} from 'react-router-dom'

import JobList from "./Components/JobList/JobList";
import JobPage from './Components/JobPage/JobPage';


function App() {
  return (
    <Router>
      <div className='bg-[#E6E9F2]'>
        <Routes>
          <Route path='/' element={<JobList/>} />
          <Route path='/job/*' element={<JobPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
