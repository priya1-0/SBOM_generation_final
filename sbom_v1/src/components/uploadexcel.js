import { useState, useEffect } from 'react';
import '../bootstrap.min.css';
import ReactTooltip from 'react-tooltip';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Navbar from './navbar.component';
import BASE_URL from '../util/util'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Uploadexcelcomponent() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('');
  const [scanstatus, scansetStatus] = useState('');
  const [deletestatus, deletesetStatus] = useState('');
  const [loadingupload, setLoadingupload] = useState(false);
  const [loadingscan, setLoadingscan] = useState(false);
  const [loadingdelete, setLoadingdelete] = useState(false);
  const [issubmitDisabled, setsubmitDisabled] = useState(false);
  const [isconvertDisabled, setconvertDisabled] = useState(true);
  const [isdeleteDisabled, setdeleteDisabled] = useState(true);
  const [isdownloadjsonDisabled, setdownloadjsonDisabled] = useState(true);
  const [isdownloadxmlDisabled, setdownloadxmlDisabled] = useState(true);
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadingupload(true);
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
      
    })

    if (response) setStatus(response.statusText)
    setLoadingupload(false);
    setsubmitDisabled(true);
    setconvertDisabled(false);
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
    var elename = "SoupList.csv";
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach(e => {
    console.log(e.name);
    if (elename == e.name){
      console.log("upload sucessfull")
      return true;
    }
    else{
      alert("ONLY CSV FILES ARE ACCEPTED AND FILE NAME SHOULD BE 'SoupList.csv' ")
      return false;
    }
  });
  }

  const handleSoupScan = async (e) => {
    e.preventDefault()
    setLoadingscan(true);
    console.log('scan in progress')
    // alert('scan in progress please wait until message shows up onscreen')
    const response = await fetch('http://localhost:5000/scansoup', {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
    },
      
    })
    if (response) scansetStatus(response.statusText)
    setLoadingscan(false);
    setdownloadjsonDisabled(false);
    setdownloadxmlDisabled(false);
    setdeleteDisabled(false);
  }


  const handleSoupDelete = async (e) => {
    e.preventDefault()
    setLoadingdelete(true);
    console.log('delete in progress')
    const response = await fetch('http://localhost:5000/soupdelete', {
      method: 'GET',
      
    })
    if (response) deletesetStatus(response.statusText)
    setLoadingdelete(false);
    setdeleteDisabled(false);
  }

  // setTimeout(handleDelete, 1500, 'Contact Support');
  const handleContact = async (e) => {
    e.preventDefault()
    alert("contact DL MEIC CV CRM Cybersecurity through mail <dl.MEICCVCRMCybersecurity@medtronic.com>")
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
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Download csv template</Modal.Title>
        </Modal.Header>
        <Modal.Body>Download template of csv file. The uploaded csv file should contain all the columns. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
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
    <div>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 1:</span> Download csv file template</label></h4>
      <a 
      href="http://localhost:5000/templatedownload"
      target="_blank" 
      >
    <button class="btn btn-success" required >Download</button><span data-tip="click download to download csv template"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
        </div>
      <form onSubmit={handleSubmit}>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 2:</span> Application only accepts csv file, Upload the csv file and click submit, Rename file name as SoupList.csv</label></h4>
        <input class='form-control' name='file' type="file" onChange={handleFileChange} required ></input>
        <button type='submit'  class="btn btn-primary" disabled={issubmitDisabled} style={{margin: '0.5rem 0 0 0' }} required >{loadingupload ? <>Loading....</> : <>Submit</>}</button><span data-tip="on clicking submit the source code is added in server"><AiOutlineInfoCircle /></span> <ReactTooltip />
      </form>
      {status && <h3 style={{color: "RGB(16,16,235)"}}> {status} upload is complete continue to convert </h3>}      
      <div>
        <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 3:</span>Convertion using cyclone dx </label></h4>
        <button class="btn btn-primary" onClick={handleSoupScan} disabled={isconvertDisabled} required>{loadingscan ? <>Loading....</> : <>Convert</>}</button ><span data-tip="Conversion of soup components into cyclone dx format"><AiOutlineInfoCircle /></span> <ReactTooltip />
        {scanstatus && <h3 style={{color: "RGB(16,16,235)"}}> {scanstatus} conversion is complete proceed to Download</h3>}
      </div>
      <div>
      <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 4:</span> Download converted report</label></h4>
      <a 
      href="http://localhost:5000/downloadcyclonedxxml"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadxmlDisabled}required>Download Report in .xml</button><span data-tip="click download to download the report generated in CSV format"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
    {/* <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/downloadcyclonedxjson"
      target="_blank" 
      >
    <button class="btn btn-primary" disabled={isdownloadjsonDisabled} style={{marginLeft:'1%'}} required>Download Report in .json</button><span data-tip="click download to download the report generated in CSV format"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a> */}
      </div>
      <div>
        <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 5:</span> Delete the csv file before leaving application</label></h4>
      <button class="btn btn-primary"  onClick={handleSoupDelete} disabled={isdeleteDisabled} required>{loadingdelete ? <>Loading....</> : <>Delete</>}</button><span data-tip="Deletes the Source Code from the server"><AiOutlineInfoCircle /></span> <ReactTooltip />
      {deletestatus && <h3 style={{color: "RGB(16,16,235)"}} > {deletestatus} Deletion Complete</h3>}
      </div> 
    <div>
    <Link to="/" className="nav-link"><button class="btn btn-primary"  style={{margin: '1% 0 0 40%' }}> Back to Home page</button></Link>
    </div>
    {/* <div>
      <button onClick={(e) => download(e)}>Download</button>
    </div> */}
      {/* <Link to="/createapp" className="nav-link">proceed</Link> */}  
    </div>
    </div> 
  )
}

export default Uploadexcelcomponent
