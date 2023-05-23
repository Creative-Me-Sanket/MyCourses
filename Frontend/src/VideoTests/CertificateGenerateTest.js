import React,{useState} from 'react'

const CertificateGenerateTest = () => {
    const [data,setData] = useState({
        name:"",
        courseName:"",
        date:""
    }) 
    const generateCertificate = async() => {
        try {
            console.log(data);
            let response = await fetch('http://localhost:4000/GenerateCertificate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(data)
            })
            console.log(await response.json())
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div>
        <br/>
        <input type="text" name="name" onChange={(e)=>{setData({...data,name:e.target.value})}}></input>
        <input type="text" name="courseName" onChange={(e)=>{setData({...data,courseName:e.target.value})}}></input>
        <input type="date" name="date" onChange={(e)=>{setData({...data,date:e.target.value})}}></input>
        <button type="submit" onClick={generateCertificate}>Generate</button>
    </div>
  )
}

export default CertificateGenerateTest