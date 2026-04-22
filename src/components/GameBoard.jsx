import React from "react";
import { styles } from "../style";

const GameBoard = ({ circles, handleCircleClick, status, nextNumber, points }) => {
    return (
        <div style={styles.board}>
            {circles.map(c => {
                if (c.isHidden) return null;
                return (
                <div 
                    key={c.id}
                    onClick={() => handleCircleClick(c.id)}
                    style={{
                        ...styles.circle,
                        left: `${c.x}%`,
                        top: `${c.y}%`,
                        opacity: c.isFading ? 0 : 1,
                        borderColor: status === 'lost' && nextNumber !== c.id ? 'red' : 'black',
                        zIndex: points - c.id
                    }}
                >
                    {c.id}
                </div>
                );
            })}

        </div>
    );
}

export default GameBoard;
