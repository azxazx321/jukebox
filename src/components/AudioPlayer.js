import React, { useEffect, useRef, useState } from 'react'

export default function AudioPlayer(props) {
    let [status, setStatus] = useState('paused')
    const [url,setUrl] = useState('')
    const [audioElement, setAudioElement] = useState(null)
  
    const audioElementRef = useRef(null);


    let loadMusic = (props) =>{
        setUrl(props.audioURL)
        const a = new Audio(props.audioURL)
        setAudioElement(a)
        console.log(url,audioElement)
        audioElementRef.current = a
        
    }

   
    let pauseMusic = () => {
        console.log('pauseMusic1',)
       
        console.log(url,status,audioElement)
        if (status !== 'paused' && audioElement) {
            audioElement.pause()
            setStatus('paused')
        } else return

        
    }

    let playMusic = () => {
        console.log('playMusic1',audioElement,url)
        if(status === 'paused' && audioElement) {
            console.log('play music')
            audioElement.play()
            setStatus('playing')
        } else return
        

    }

    useEffect(() => {
        console.log(props,'initial')
        loadMusic(props)
        
      
        return ()=> {
            console.log('unmount',audioElement)
            audioElementRef.current.pause()
        };
    }, [])

    useEffect(()=>{
        console.log('props',props)
        pauseMusic()
        loadMusic(props)

        

    },[props.audioURL])

    useEffect(()=>{
        playMusic()

    },[url])

   
    
  return (
    
    <div>
        <p>Playing{url}</p>
        <button onClick={()=>{pauseMusic()}}>Pause</button>
        <button  style={{display: status === 'paused' ? 'block' : 'none' }} onClick={()=>{playMusic()}}>Play</button>
    </div>
  )
}
