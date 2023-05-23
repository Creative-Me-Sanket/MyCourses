import React,{useState} from 'react'

const Upload = () => {
    const [values, setValues] = useState({
        video: '',
    })
    const create = async (media) => {
        console.log('Create Called');
        try {
          let response = await fetch('http://localhost:4000/VideoCreateTest', { 
          method: 'POST',
          body: media
        })    
          return await response.json()
        } catch(err) {
          console.log(err)
        }
    }
    const handleChange = name => event => {
        const value = name === 'video'
          ? event.target.files[0]
          : event.target.value
        setValues({...values, [name]: value })
      }
    const clickSubmit = () => {
        console.log("called");
        let mediaData = new FormData()
        values.video && mediaData.append('video', values.video)
        create(mediaData).then((data) => {
            if (data.error) {
              console.log(data);
            } else {
                console.log(data);
            }
          })
      }
  return (
    <div>
        <input accept="video/*" onChange={handleChange('video')} type="file" id="image" name="image" required></input>
        <button onClick={clickSubmit}>Submit</button>
    </div>
  )
}
export default Upload