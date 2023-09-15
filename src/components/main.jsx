import React from "react";
import dolar from "../images/Picture1.png";
import mobile from "../images/Picture 2.png";
import cube from "../images/Picture 4.png";
import pilar from "../images/Picture 5.png";
import stairs from "../images/Picture 6.png";
import eye from "../images/Picture 7.png";
import bigstair from "../images/Picture 8.png";
import sm1 from "../images/sm 1.png";
import sm2 from "../images/sm 2.png";
import sm3 from "../images/sm 3.png";
import sm4 from "../images/sm 4.png";
import sm5 from "../images/sm 5.png";
import sm6 from "../images/sm 6.png";

const main = () => {
  return (
    <>
      <img className="dolar" src={dolar}></img>
      <img className="cube" src={cube}></img>
      <img className="pilar" src={pilar}></img>
      <img className="stairs" src={stairs}></img>
      <img className="eye" src={eye}></img>
      <img className="bigstair" src={bigstair} />
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
        <img src={mobile} className="mobileimg"></img>
        <p className="apptext">APP</p>
        <img src={sm1} className="sm1" />
        <img src={sm2} className="sm2" />
        <img src={sm3} className="sm3" />
      </div>
      <div className="pilartext">
        <p>
          Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See
          <br />
          our BrokerCheck. Investing involves risk; you may lose money. Bitcoin
          <br />
          trading offered by Cash App. Cash App Investing does not trade bitcoin
          <br />
          and Cash App is not a member of FINRA or SIPC. Cash App facilitates
          <br />
          banking services through Sutton Bank and Lincoln Savings Bank, Members
          FDIC.
        </p>
      </div>
      <div className="apple">
        <img src={sm4} className="sm4" />
        <p className="appletext">App Store</p>
      </div>
      <div className="googleplay">
        <img src={sm5} className="sm5" />
        <p className="googletext">Google Play</p>
      </div>
      <img src={sm6} className="downarrow"></img>
    </>
  );
};

export default main;
