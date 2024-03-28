import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let timerId;
    if(isRunning){
      timerId = setInterval(()=>{
        setTimer((prevTimer)=>prevTimer+1);
      },1000);
    }
    return ()=>{
      clearInterval(timerId);
    }
  }, [timer, isRunning])

  const formatTime = (secs)=>{
    const mins = Math.floor(secs/60);
    const remainingSec = secs%60;
    return `${mins}:${remainingSec < 10 ? '0' : ''}${remainingSec}`;
  }

  const toggleStart = ()=>{
    setIsRunning(!isRunning);
  }

  const reset = ()=>{
    setTimer(0);
    setIsRunning(false);
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={toggleStart}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
