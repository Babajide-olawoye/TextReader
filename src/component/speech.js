import { useEffect, useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'
import useStateRef from 'react-usestateref';
import './SpeechStyle.css'
function Speech() {
    const [inputtText, setInputText, inputtTextRef] = useStateRef("")
    const {speak} = useSpeechSynthesis();



    return (
        <div className="center">
            <textarea 
            rows={10}
            cols={100}
            onChange ={(e) =>
                setInputText(e.target.value)
            }
            >
            </textarea>
            <button onClick={() => speak({text: inputtTextRef.current})}>Read Text</button>
        </div>
    )
}

export default Speech