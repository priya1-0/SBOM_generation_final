import { useState,useEffect } from 'react';
// import Filedownload from 'js-file-download' 
// import { Axios } from 'axios';
// import { Link } from 'react-router-dom';
// import fileDownload from 'js-file-download';
// import {button} from 'bootstrap';
import '../bootstrap.min.css';
import ReactTooltip from 'react-tooltip';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Navbar from './navbar.component';
import BASE_URL from '../util/util'
// import Uploady from "@rpldy/uploady";
// import UploadDropZone from "@rpldy/upload-drop-zone"
// import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Internalcomponent() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [extractstatus, extractsetStatus] = useState('')
  const [generatemastercsvstatus, generatemastercsvsetStatus] = useState('')
  const [scanstatus, scansetStatus] = useState('')
  const [generatemasterxmlstatus, generatemastercxmlsetStatus] = useState('')
  const [deletestatus, deletesetStatus] = useState('')
  const [loadingupload, setLoadingupload] = useState(false);
  const [loadingextract, setLoadingextract] = useState(false);
  const [loadingscan, setLoadingscan] = useState(false);
  const [loadingdelete, setLoadingdelete] = useState(false);
  const [loadinggenerate, setLoadinggenerate] = useState(false);
  const [loadinggeneratexml, setLoadinggeneratexml] = useState(false);
  const [issubmitDisabled, setsubmitDisabled] = useState(false);
  const [isextractDisabled, setextractDisabled] = useState(true);
  const [isscanDisabled, setscanDisabled] = useState(true);
  const [isdeleteDisabled, setdeleteDisabled] = useState(true);
  const [isdownloadhtmlDisabled, setdownloadhtmlDisabled] = useState(true);
  const [isdownloadmastercsvDisabled, setdownloadmastercsvDisabled] = useState(true);
  const [ismastercsvDisabled, setmastercsvDisabled] = useState(true);
  const [isdownloadcsvDisabled, setdownloadcsvDisabled] = useState(true);
  const [ismasterxmlDisabled, setmasterxmlDisabled] = useState(true);
  const [isdownloadxmlDisabled, setdownloadxmlDisabled] = useState(true);
  const [show, setShow] = useState(true);
  const [backdrop, setBackdrop] = useState(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleBackdrop = () => setBackdrop(!backdrop);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadingupload(true);
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/upload', {
      method: 'POST',
      body: formData,  
    })
    if (response) setStatus(response.statusText)
    setLoadingupload(false);
    setsubmitDisabled(true);
    setextractDisabled(false);
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
    var elename = "SourceCode.zip";
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach(e => {
    console.log(e.name);
    if (elename == e.name){
      console.log("upload sucessfull")
      return true;
    }
    else{
      alert("ONLY ZIP FILES ARE ACCEPTED AND FILE NAME SHOULD BE 'SourceCode.zip' ")
      return false;
    }
  });
  }

  const generatemasterlist = async (e) => {
    e.preventDefault()
    setLoadingscan(true);
    console.log('scan in progress')
    // alert('scan in progress please wait until message shows up onscreen')
    const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/generatemasterlist', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
    },
      
    })
    if (response) scansetStatus(response.statusText)
    setLoadingscan(false);
    
    setscanDisabled(true);
    setdownloadhtmlDisabled(false);
    setdeleteDisabled(false);
    setmastercsvDisabled(false);
  }
 
  const handleDelete = async (e) => {
    e.preventDefault()
    setLoadingdelete(true);
    console.log('delete in progress')
    const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/delete', {
      method: 'GET',
      
    })
    if (response) deletesetStatus(response.statusText)
    setLoadingdelete(false);
  }
  // setTimeout(handleDelete, 1500, 'Contact Support');
  const handleContact = async (e) => {
    e.preventDefault()
    alert("contact DL MEIC CV CRM Cybersecurity through mail <dl.MEICCVCRMCybersecurity@medtronic.com>")
  }
  
  const handleExtract = async (e) => {
    e.preventDefault()
    setLoadingextract(true);
    console.log('extract in progress')
    // alert('Extraction is in progress please wait until message shows up onscreen')
    const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/extract', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
    },
    })
    if (response) extractsetStatus(response.statusText)
    setLoadingextract(false);
    setscanDisabled(false);
    setextractDisabled(true);
  }
  

  //Report download
// const download =  (e) => {
//     e.preventDefault()
//     Axios({
//       url:"http://localhost:5000/download",
//       method:"GET",
//       responseType:"blob"
//     }).then((res)=>{
//       fileDownload(res.data,"test.txt")
//     })
// }
  //Report download
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        <Link to="/" className="navbar-brand"> Medtronic - Fusion Lab </Link>
        <Link to="/" className="navbar-brand"> SBOM UI </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-brand">
          <button class="btn btn-primary" onClick = {handleContact}>Contact us</button>
          </li> 
          </ul>
        </div>
      </nav>
      <h3 style={{color: "RGB(16,16,235)", textAlign:'center'}}><b>SBOM generation using Syft tool from Source code </b></h3>
    <div className='Uploadcomponent' class = 'container' style={{border: 'solid RGB(16,16,235)', padding: '15px',width:'95%', marginTop:'1%', marginBottom:'1%', borderWidth:'0.1px', borderRadius:'25px'}}>
      {/* <form onSubmit={handleSubmit}>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 1:</span> Application only accepts zip file, Upload the zip file and click submit, Rename zip folder name as SourceCode.zip, .git file should be removed before uploading.</label></h4>
        <input class='form-control' name='file' type="file" accept=".zip" onChange={handleFileChange} required ></input>
        <button type='submit'  class="btn btn-primary" disabled={issubmitDisabled} style={{margin: '0.5rem 0 0 0' }} required >{loadingupload ? <>Loading....</> : <>Submit</>}</button><span data-tip="on clicking submit the source code is added in server"><AiOutlineInfoCircle /></span> <ReactTooltip />
      </form> */}
      {status && <h3 style={{color: "RGB(16,16,235)"}}> {status} upload is complete Extract the folder </h3>}
      <div>
        <h4><label>Generate Master list for CycloneDX reports</label></h4>
        <button class="btn btn-primary" onClick={generatemasterlist} >{loadingextract ? <>Loading....</> : <>generate</>}</button><span data-tip="generates a master list from all the available CycloneDx reports"><AiOutlineInfoCircle /></span> <ReactTooltip />
        {extractstatus && <h3 style={{color: "RGB(16,16,235)"}}> {extractstatus} Generation complete proceed to download master list</h3>}
      </div>
      <div></div>
      
      <div>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 4:</span> Download Report</label></h4>
    <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/downloadsyft"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadhtmlDisabled} required>Download syft report</button><span data-tip="click download to download the report generated in HTML format"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
   <div>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step HIIIIIIIIIIIIIIIIIIIIIIIIIIIII:</span> Delete the SourceCode before leaving application</label></h4>
      <button class="btn btn-primary" disabled={isdeleteDisabled} onClick={handleDelete} required>{loadingdelete ? <>Loading....</> : <>Delete</>}</button><span data-tip="Deletes the Source Code from the server"><AiOutlineInfoCircle /></span> <ReactTooltip />
      {deletestatus && <h3 style={{color: "RGB(16,16,235)"}} >Deletion Complete</h3>}
    </div>
    <div >
    <Link to="/" className="nav-link"><button class="btn btn-primary"  style={{margin: '1% 0 0 40%' }}> Back to Home page</button></Link>
    </div>
      {/* <Link to="/createapp" className="nav-link">proceed</Link> */}
      </div>
    </div>
    </div>
    
    
    
  )
}

export default Internalcomponent
