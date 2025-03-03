import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'


const Main = () => {


  const {onSent,recentPrompt,showResult,loading,resultData, setInput ,input} = useContext(Context);

  return (
   <>
   <div className="main">
     <div className="nav">
      <p>Gemini</p>
      <img src ={assets.user_icon} alt=""/> 
      </div>
      <div className="main-container">

        {!showResult?<>
         <div className="greet">
          <p><span>Hello,Devs</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.bulb_icon} alt="" />
          </div>          
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.message_icon} alt="" />
          </div>          
          <div className="card">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <img src={assets.code_icon} alt="" />
          </div>          
        </div>
        </>
        :<div className='result'>
          <div className="result-title">
            <img src ={assets.user_icon}></img>
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
          </div>
          </div>}
       
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" onChange={(e)=>setInput(e.target.value)} value = {input} placeholder='Enter a prompt here'/>
            <div className="ashu">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick ={() => onSent()} src={assets.send_icon}alt="" />
            </div>
          </div>
          <p className="bottom-info">Gemini may display blah blah</p>
        </div>
      </div>
  </div>
    </>
  )
}

export default Main
