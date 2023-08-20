import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../bootstrap.min.css'
import ReactTooltip from 'react-tooltip';
import { AiOutlineInfoCircle } from 'react-icons/ai';



function  CreateSyftWorkspace() {
  const [deletestatus, deletesetStatus] = useState('')

  const handleContact = async (e) => {
    e.preventDefault()
    alert("contact DL MEIC CV CRM Cybersecurity through mail <dl.MEICCVCRMCybersecurity@medtronic.com>")
  }
  
  const handleDelete = async (e) => {
        e.preventDefault()
        console.log('delete in progress')
        alert('work space created, click proceed to continue')
        const response = await fetch('http://mspm7awebd0001.cfrf.medtronic.com:5000/delete', {
          method: 'GET',
        })
        if (response) deletesetStatus(response.statusText)
    }

    return(
     <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        <Link to="/" className="navbar-brand">Medtronic - Fusion Lab </Link>
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
       <div>
       <h4><label style={{margin: '0 0 0 25%' }}>Download Application guide document</label></h4>
      <a 
      href="http://mspm7awebd0001.cfrf.medtronic.com:5000/docdownload"
      target="_blank" 
      >
    <button class="btn btn-success" style={{margin: '0 0 1rem 35%' }} required >Download</button><span data-tip="click download to download application guide"><AiOutlineInfoCircle /></span> <ReactTooltip />
    </a>
        </div>   
      
    <div class = 'container' style={{border: 'solid RGB(16,16,235)',borderWidth:'0.1px', borderRadius:'25px', padding: '10px', width: '80%' }} >
    <h4><label><span style={{color: "RGB(16,16,235)"}}>Step 1:</span> Lets create work space</label></h4>
        <button class="btn btn-primary" onClick={handleDelete}>Create</button><span data-tip="Creates space to add source code"><AiOutlineInfoCircle /></span> <ReactTooltip />
        <div>
        {/* <video controls width="70%">
      
      <source src="C:/SBOM_DEMO/SBOM_OCT/backend/demo.mp4" type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video> */}
            <h4> <span style={{color: "RGB(16,16,235)"}}>Step 2:</span> click 'proceed' to continue </h4>
        <Link to="/uploadSyft" className="nav-link"><button class="btn btn-primary" >Proceed</button></Link> 
      </div>
    </div>
</div>
      
    )
    
}
    
export default CreateSyftWorkspace