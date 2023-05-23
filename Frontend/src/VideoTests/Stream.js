import React,{useState,useEffect} from 'react'
import Media from './Media'
const Stream = (props) => {
    let [media, setMedia] = useState({postedBy: {}})
    const read = async (params, signal) => {
        try {
            let response = await fetch('http://localhost:4000/VideoStreamTest/media/'+props.id, {
                method: 'GET',
                signal: signal
            })
            return await response.json()
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        read({mediaId: '6214b64cf03ac65a0951f29f'}, signal).then((data) => {
            console.log(data);
          if (data && data.error) {
            console.log(data.error)
          } else {
            setMedia(data)
          }
        })
        return function cleanup(){
          abortController.abort()
        }
      }, [props.id])
  return (
    <div>
        <Media media={media}/>
    </div>
  )
}

export default Stream