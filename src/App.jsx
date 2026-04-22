import { useRef, useEffect, useState } from 'react'
import Header from './components/Header'
import { styles } from './style'
import Control from './components/Control'
import GameBoard from './components/GameBoard'

const App = () => {
  const [status, setStatus] = useState('idle')
  const [points, setPoints] = useState(5)
  const [time, setTime] = useState(0)
  const [circles, setCircles] = useState([])
  const [nextNumber, setNextNumber] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const timeRef = useRef(null);
  const autoPlayRef = useRef(null);
  const startTimeRef = useRef(null);


  const handleRestart = () => {
    const generated = Array.from({ length: points }, (_, i) => ({
      id: i + 1,
      x: Math.random() * 85 + 5,
      y: Math.random() * 85 + 5,
      isFading: false, isHidden: false
    })).sort((a, b)=> b.id - a.id);
    setCircles(generated);
    setNextNumber(1);
    setStatus('playing');
    setTime(0);
    setIsAutoPlaying(false);
    startTimeRef.current = Date.now();
  }

  const handleCircleClick = (id) => {
    if (status !== 'playing') return
    if (id === nextNumber) {
      setCircles(prev => prev.map(c => c.id === id ? { ...c, isFading: true } : c))
      setNextNumber(prev => prev + 1)

      setTimeout(() => {
        setCircles(prev => prev.map(c => c.id === id ? { ...c, isHidden: true } : c))
        if (id === points) setStatus('won')
      }, 1000);
    }else {
        setStatus('lost')
      }
    }

  useEffect(() => {
    if (status === 'playing') {
      timeRef.current = setInterval(() => {
        setTime((Date.now() - startTimeRef.current) / 1000);
      }, 100);
    } else {
      clearInterval(timeRef.current);
    }
    return () => clearInterval(timeRef.current);
  }, [status]);

//auto play effect
  useEffect(() => {
    if (isAutoPlaying && status === 'playing') {
      autoPlayRef.current = setTimeout(() => {
        handleCircleClick(nextNumber);
      }, 1000);
    } else {
      clearTimeout(autoPlayRef.current);
    }
    return () => clearTimeout(autoPlayRef.current);
  }, [isAutoPlaying, status, nextNumber]);
  return (
    <div style={styles.container}>
      <Header status={status} />
      <Control points={points} setPoints={setPoints}
       time={time} status={status} 
       handleRestart={handleRestart}
       isAutoPlaying={isAutoPlaying} setIsAutoPlaying={setIsAutoPlaying} />
      <GameBoard circles={circles} handleCircleClick={handleCircleClick} status={status} nextNumber={nextNumber} points={points} />
    </div>
  )
}

export default App
