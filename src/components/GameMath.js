import React, { useState } from 'react';
function GameMath() {
    const [num, setrendom] = useState(0)
    const [num1, setrendom1] = useState(0)
    const [ans, setans] = useState()
    function check() {
        let n = document.getElementById("innum").value;
        if (n == (num + num1)) {
            console.log('Success!!!')
            document.getElementById('p1').innerHTML = 'Success!!!';
        }
        else if (n !== (num + num1)) {
            console.log('Wrong!!!')
            document.getElementById('p1').innerHTML = 'Wrong!!!';
        }
    }
    return (
        <>
            <div>
                <div>
                    GAME
                    <p>Rendom your number : </p>
                </div>
                <button onClick={() => setrendom(Math.floor(Math.random() * 10))}>Number1</button>
                <button onClick={() => setrendom1(Math.floor(Math.random() * 10))}>Number2</button>
                <div>
                    {num}
                </div>
                <div>
                    +
                </div>
                <div>
                    {num1}
                </div>
                <div>
                    <p id='p1'></p>
                </div>
                <div>
                    <input
                        type='text'
                        name='anser'
                        id='innum'
                    />
                    <button onClick={() => setans(check)}>Check</button>
                </div>
            </div>
        </>

    )
}
export default GameMath; 