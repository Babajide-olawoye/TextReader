import { useEffect, useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'
import useStateRef from 'react-usestateref';
import random from '../texts/Random.txt'
import random2 from '../texts/Random2.txt'
import './SpeechStyle.css'
function Speech() {
    const [inputtText, setInputText, inputtTextRef] = useStateRef("")
    const { speak } = useSpeechSynthesis();



    const read = (text) => {
        fetch(text)
            .then(res => res.text())
            .then(res => speak({text : res}));
    }

    return (
        <div className="center">
            <div>
                <textarea
                    rows={10}
                    cols={100}
                    onChange={(e) =>
                        setInputText(e.target.value)
                    }
                >
                </textarea>
            </div>
            <div>
                <button onClick={() => speak({ text: inputtTextRef.current })}>Read Text</button>
            </div>
            <div>
                <button onClick={()=>read(random2)}>Read 2nd Random text file</button>
            </div>

            <div>
                <button onClick={() => read(random)}>Read Text 1 from file</button>
           </div>
           <div>
            {/* <input type={'file'} /> */}
           </div>
        </div>
    )
}

export default Speech