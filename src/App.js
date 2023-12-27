import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Navbar from './Navbar';
import Mission from './components/Mission';
import WrongPath from './components/WrongPath';
import History from './components/History';
import Compony from './components/Compony';
import Team from './components/Team';
import Members from './components/Members';
import MemberDetail from './components/MemberDetail';
const LazyAboutUs=React.lazy(() => import('./components/AboutUs'))


function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutUs' element={
        <React.Suspense>
        <LazyAboutUs/>
        </React.Suspense>
     }/>
      <Route path='/mission' element={<Mission/>}/>
      <Route path='/history' element={<History/>}>
        <Route path='compony' element={<Compony/>}/>
        <Route path='team' element={<Team/>}/>
      </Route>
      <Route path='/members' element={<Members/>}></Route>
      <Route path='/members/:memberId' element={<MemberDetail/>}></Route>
      <Route path='*' element={<WrongPath/>}/>
     </Routes>
    </div>
  );
}

export default App;
