import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const[input,setInput] = useState("");
    const[recentPrompt,setRecentPrompt] = useState("");
    const[prevPrompts,setPrevPrompts] = useState([]);
    const[showResult,setShowResult] = useState(false);
    const[loading, setLoading] = useState(false);
    const[resultData,setResultData] = useState("");

    const delayPara =(index,nextWord) =>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        },75*index) 
        
    }


    const onSent = async(prompt) =>{

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        

       const response = await run(input);
       let responseArray = response.split("**");
       let NewResponse ;
       for ( let i =0;i<responseArray.length; i++){
         if(i == 0 || i%2 !==1){
            NewResponse += responseArray[i];
         }
         else{
            NewResponse += "<b>" + responseArray[i] + "</b>"
         }
       }

       let NewResponse2 = NewResponse.split("*").join("<br>")
       let newResponseArray = NewResponse2.split(" ");
       for (let i=0; i< newResponseArray.length;i++)
       {
        const nextWord = newResponseArray[i];
        delayPara(i,nextWord+" ");
       }
       setLoading(false)
       setInput("")
    }
 


    const contextValue ={

        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,




    }
    return(
        <Context.Provider value ={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
 
export default ContextProvider; 