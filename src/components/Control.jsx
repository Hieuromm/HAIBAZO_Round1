import React from "react";
import { styles } from "../style";

const Control = ({ points, setPoints, time, status, handleRestart , isAutoPlaying, setIsAutoPlaying }) => {
    return (
        <>
        <div style={styles.controls}>
            <div style={styles.row}>
                <label>Points:</label>
                <input
                    type="number"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    style={styles.input} disabled={status !== 'playing'}
                />
            </div>
            <div style={styles.row}>
                <label>Time {time}:</label>
            </div>
            <div style={styles.buttonGroup}>
                <button onClick={handleRestart} style={styles.btnRestart}>
                    {status === 'playing' ? 'Restart' : 'Play'}
                </button>
                <button 
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)} 
                    style={isAutoPlaying ? styles.btnAutoActive : styles.btnAuto}
                    disabled={status !== 'playing'}
                >
                    {isAutoPlaying ? 'Stop Auto' : 'Auto Play'}
                </button>

            </div>
        </div>
        </>
    );
}

export default Control;