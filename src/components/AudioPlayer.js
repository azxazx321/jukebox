import { getSuggestedQuery } from '@testing-library/react'
import React, { useEffect, useState } from 'react'

export default function AudioPlayer(props) {
    let [status, setStatus] = useState('paused')
    const [url,setUrl] = useState(props.audioURL)
    const [audioElement, setAudioElement] = useState(new Audio(url))
    //audioElement.autoplay = true


   
    let pauseMusic = () => {
        console.log('pauseMusic')
       
        console.log(status)
        if (status !== 'paused') {
            audioElement.pause()
            setStatus('paused')
        } else return
        
    }

    let playMusic = () => {
        console.log('playMusic')
        if(status === 'paused') {
            console.log('play music')
            audioElement.play()
            setStatus('playing')
        } else return
        

    }

    useEffect(() => {

        playMusic();
        return ()=> {
            pauseMusic()
        };
    }, [])

    useEffect(() => {
        pauseMusic()
        setUrl(props.audioURL);
        console.log('first')
      }, [props.audioURL]);
    
      useEffect(() => {
        setAudioElement(new Audio(url));
        console.log('second')
      }, [url]);

    
  return (
    
    <div>
        <p>Playing{url}</p>
        <button onClick={()=>{pauseMusic()}}>Pause</button>
        <button  style={{display: status === 'paused' ? 'block' : 'none' }} onClick={()=>{playMusic()}}>Play</button>
    </div>
  )
}
