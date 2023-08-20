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

function Uploadcomponent() {
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

  const handleScan = async (e) => {
    e.preventDefault()
    setLoadingscan(true);
    console.log('scan in progress')
    // alert('scan in progress please wait until message shows up onscreen')
    const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/scan', {
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
    
    setmastercsvDisabled(false);
  }
  const handlexml = async (e) => {
    e.preventDefault()
    setLoadinggeneratexml(true);
    console.log('scan in progress')
    // alert('scan in progress please wait until message shows up onscreen')
    const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/scansoup', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
    },
      
    })
    if (response) generatemastercxmlsetStatus(response.statusText)
    setLoadinggeneratexml(false);
    setdownloadxmlDisabled(false);
    setmastercsvDisabled(true);
    setdeleteDisabled(false);
    setmasterxmlDisabled(true);
    
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
    console.log(response)
    // console.log(smartcontract)
    setLoadingextract(false);
    setscanDisabled(false);
    setextractDisabled(true);
  }
  const handlemastercsv = async (e) => {
    e.preventDefault()
    setLoadinggenerate(true);
    console.log('extract in progress')
    // alert('Extraction is in progress please wait until message shows up onscreen')
    const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/mastercsv', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
    },
    })
    if (response) generatemastercsvsetStatus(response.statusText)
    setLoadinggenerate(false);
    setscanDisabled(true);
    setmastercsvDisabled(true)
    setdownloadcsvDisabled(false);
    setdownloadmastercsvDisabled(false);
    setmasterxmlDisabled(false)
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
      <Modal show={show} onHide={handleClose} backdrop={backdrop ? "static" : false}>
        <Modal.Header >
          <Modal.Title>Please click agree before proceeding</Modal.Title>
        </Modal.Header>
        <Modal.Body><b>The source code does not contain debugging, test code or testing tools. Ideally, the source code should be production code.</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Agree
          </Button>
        </Modal.Footer>
      </Modal>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        <Link to="/" className="navbar-brand"> Medtronic - Fusion Lab </Link>
        <Link to="/" className="navbar-brand"> SBOM UI </Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          {/* <li className="navbar-item">
          <Link to="/createapp" className="nav-link"> Create App</Link>
          </li> */}
          {/* <li className="navbar-item">
          <Link to="/upload" className="nav-link"> Upload</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link"> Create Work Space</Link>
          </li> */}
          <li className="navbar-brand">
          <button class="btn btn-primary" onClick = {handleContact}>Contact us</button>
          </li> 
          </ul>
        </div>
      </nav>
    <div className='Uploadcomponent' class = 'container' style={{border: 'solid RGB(16,16,235)', padding: '15px',width:'95%', marginTop:'1%', marginBottom:'1%', borderWidth:'0.1px', borderRadius:'25px'}}>
      
      
      <form onSubmit={handleSubmit}>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 1:</span> Application only accepts zip file, Upload the zip file and click submit, Rename zip folder name as SourceCode.zip, .git file should be removed before uploading.</label></h4>
        <input class='form-control' name='file' type="file" accept=".zip" onChange={handleFileChange} required ></input>
        <button type='submit'  class="btn btn-primary" disabled={issubmitDisabled} style={{margin: '0.5rem 0 0 0' }} required >{loadingupload ? <>Loading....</> : <>Submit</>}</button><span data-tip="on clicking submit the source code is added in server"><AiOutlineInfoCircle /></span> <ReactTooltip />
      </form>
      {status && <h3 style={{color: "RGB(16,16,235)"}}> {status} upload is complete Extract the folder </h3>}
      <div>
        <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 2:</span> Extract the folder</label></h4>
        <button class="btn btn-primary" onClick={handleExtract} disabled={isextractDisabled} required>{loadingextract ? <>Loading....</> : <>Extract</>}</button><span data-tip="Zip folder gets extracted for further processing"><AiOutlineInfoCircle /></span> <ReactTooltip />
        {extractstatus && <h3 style={{color: "RGB(16,16,235)"}}> {extractstatus} Extraction complete, proceed to scan</h3>}
      </div>
      <div></div>
      <div>
        <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 3:</span> Scan the code</label></h4>
        <button class="btn btn-primary" onClick={handleScan} disabled={isscanDisabled} required>{loadingscan ? <>Loading....</> : <>Scan</>}</button ><span data-tip="scan button scans the source code using dependency check"><AiOutlineInfoCircle /></span> <ReactTooltip />
        {scanstatus && <h3 style={{color: "RGB(16,16,235)"}}> {scanstatus} Scan complete, proceed to Download</h3>}
      </div>
      <div>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 4:</span> Download Report</label></h4>
      {/* <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/download"
      target="_blank" 
      >
    <button class="btn btn-primary" required>Download</button><span data-tip="click download to download the report generated"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a> */}
    <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/downloadhtml"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadhtmlDisabled} required>Download Report in .html</button><span data-tip="click download to download the report generated in HTML format"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
    <div>
        <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 5:</span>Generate report in csv format </label></h4>
        <button class="btn btn-primary" disabled={ismastercsvDisabled} onClick={handlemastercsv} required>{loadinggenerate ? <>Loading....</> : <>Generate</>}</button><span data-tip="generates required csv file"><AiOutlineInfoCircle /></span> <ReactTooltip />
        {generatemastercsvstatus && <h3 style={{color: "RGB(16,16,235)"}}> {generatemastercsvstatus} Soup list is generated</h3>}
      </div>

    {/* <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/downloadcsv"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadcsvDisabled} style={{marginLeft:'1%'}} required>Download Report in .csv</button><span data-tip="click download to download the report generated in CSV format"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
    <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/downloadxml"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadxmlDisabled} style={{marginLeft:'1%'}} required>Download Report in .xml</button><span data-tip="click download to download the report generated in XML format"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a> */}
    <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 6:</span> Download report in csv format </label></h4>
    <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/downloadmastercsv"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadcsvDisabled} required>Download master csv</button><span data-tip="click download to download the csv file"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
    <div>
        <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 7:</span>Generate report in xml format </label></h4>
        <button class="btn btn-primary" disabled={ismasterxmlDisabled} onClick={handlexml} required>{loadinggeneratexml ? <>Loading....</> : <>Generate</>}</button><span data-tip="generates required xml file"><AiOutlineInfoCircle /></span> <ReactTooltip />
        {generatemasterxmlstatus && <h3 style={{color: "RGB(16,16,235)"}}> {generatemasterxmlstatus} .xml report is generated, proceed to download</h3>}
      </div>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 8:</span> Download report in xml format </label></h4>
      <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/downloadxml"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadxmlDisabled} required>Download xml format Report</button><span data-tip="click download to download the csv file"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
    <div>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 9:</span> Delete the SourceCode before leaving application</label></h4>
      <button class="btn btn-primary" disabled={isdeleteDisabled} onClick={handleDelete} required>{loadingdelete ? <>Loading....</> : <>Delete</>}</button><span data-tip="Deletes the Source Code from the server"><AiOutlineInfoCircle /></span> <ReactTooltip />
      {deletestatus && <h3 style={{color: "RGB(16,16,235)"}} > {deletestatus} Deletion Complete</h3>}
    </div>
    <div >
    <Link to="/" className="nav-link"><button class="btn btn-primary"  style={{margin: '1% 0 0 40%' }}> Back to Home page</button></Link>
    </div>
    {/* <div>
      <button onClick={(e) => download(e)}>Download</button>
    </div> */}
      {/* <Link to="/createapp" className="nav-link">proceed</Link> */}
      </div>
    </div>
    </div>
    
    
    
  )
}

export default Uploadcomponent
