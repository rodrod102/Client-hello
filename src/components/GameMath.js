import React, { useState } from 'react';
function GameMath() {
    const [count, setcount] = useState(0);
    return (
        <>
            <div>
                <div>
                    GAME
                </div>
                <button onClick={() => setcount(count + 1)}>เพิ่มค่า</button>
            </div>
        </>

    )
}
export default GameMath; 