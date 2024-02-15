
import { useState } from 'react';
import './App.css';
import Playlist from './components/Playlist';
import VideoPlayer from './components/VideoPlayer';
import Header from './components/Header';

function App() {
  const [current , setCurrent] = useState(2)
  return (
    <>
    <Header />
    <div className='flex mt-3'>
    <VideoPlayer current={current}/>
    <Playlist current = {current} setCurrent={setCurrent}/>
    </div>
    </>
    
    
  );
}

export default App;
