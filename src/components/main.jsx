import React from 'react'
import dolar from '../images/Picture1.png'
import mobile from '../images/Picture 2.png'
import cube from '../images/Picture 4.png'
import pilar from '../images/Picture 5.png'
import stairs from '../images/Picture 6.png'
import eye from '../images/Picture 7.png'
 

const main = () => {
  return (
    <>
    <img className='dolar' src={dolar} ></img>
    <img className='cube' src={cube}></img>
    <img className='pilar' src={pilar}></img>
    <img className='stairs' src={stairs}></img>
    <img className='eye' src={eye}></img>
      <div className="menu">
        <h1 className="txt">sign in</h1>
        <h1 className="txt">legal</h1>
        <h1 className="txt">lisence</h1>
        <h1 className="txt">security</h1>
        <h1 className="txt">careers</h1>
        <h1 className="txt">press</h1>
        <h1 className="txt">support</h1>
        <h1 className="txt">status</h1>
        <h1 className="txt">codeblog</h1>
      </div>
      <div>
        <p className="cashtext">CASH</p>
        <img src={mobile} className='mobileimg'></img>
        <p className="apptext">APP</p>
      </div>
    </>
  );
}

export default main