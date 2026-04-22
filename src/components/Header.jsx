import React from "react";
import { styles } from "../style";

const Header = ({status}) => {
    return (
        <div style={styles.header}>
            {status === 'won' ? <span style={{color: "green"}}>ALL CLEARED</span>
            : status === 'lost' ? <span style={{color: "red"}}>GAME OVER</span>:
            "LET'S PLAY!"}
        </div>
    );
};

export default Header;