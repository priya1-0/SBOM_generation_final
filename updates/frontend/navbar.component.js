import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateWorkspace from "./clear";
import ReactTooltip from 'react-tooltip';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        modalState: true
    };

    this.handleShow = this.handleShow.bind(this);
}

handleShow() {
    this.setState({ modalState: !this.state.modalState });
}  


  handleContact = async (e) => {
    e.preventDefault()
    alert("contact DL MEIC CV CRM Cybersecurity through mail <dl.MEICCVCRMCybersecurity@medtronic.com>")
  }
  render() {
    return (
      
      <div>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        
        <Link to="/" className="navbar-brand"> Medtronic - Fusion Lab</Link>
        <Link to="/" className="navbar-brand"> SBOM UI </Link>        
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-brand">
          <button class="btn btn-primary" onClick = {this.handleContact}>Contact us</button>
          </li> 
          </ul>
        </div>
      </nav>
      <div>
      {/* <div className={"modal fade" + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                        <h4 className="modal-title">Note:</h4>
                    </div>
                <div className="modal-body"><h6><b>The reports generated using this application are from open source tools integrated in the backend. As the accuracy of the results depends on the analyzers these tools use, we recommend to review each report for false positives and suggest to create a final report combining results from each report.</b></h6></div>
                   <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={this.handleShow}>OK</button>  
                      </div>
                </div>
            </div>
       </div> */}
      </div>
      <div className="card" style={{height:'100%', width: '100%'}} >
          <div className="card-header">  
          <div className="card-title"><h4>Disclaimer:</h4> </div>
            <div className="card-body">The reports generated using this application are from open source tools integrated in the backend. As the accuracy of the results depends on the analyzers these tools use, we recommend to review each report for false positives and suggest to create a final report combining results from each report.There are different open source tools integrated in this application, proceed based on requirement and resources available. </div>
          </div>
        </div>
      <div class="card-group"  style={{marginRight:'3%',marginLeft:'2.5%' }}>
      <div className="card" style={{ marginTop:'1%',height:'100%', width: '100%', marginLeft:'0.5%',marginRight:'1%'}} >
          <div className="card-header">  
                                
              <div className="card-title"><h4><b>1. Generate SBOM using dependency check and cyclone Dx tools from Source code</b></h4> </div>
              <div className="card-body">If you want to upload source code for generating SBOM report, click Proceed </div>
              {/* <div className="card-title"><h5>Note:</h5> </div>
              <div className="card-body">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
              <li> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li> 
              <li> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</li>
              </div> */}
              <Link to="/create" className="nav-link"><button class="btn btn-primary">Proceed</button></Link>              
          </div>
        </div>
        <div className="card" style={{ marginTop:'1%',height:'100%', width: '100%', marginLeft:'0.5%'}} >
          <div className="card-header">  
          <div className="card-title"><h4><b>2. Generate SBOM using syft tool from Source Code</b></h4> </div>
              <div className="card-body">If you want to upload Source code for generating SBOM report using syft tool, go ahead and click Proceed </div>
              {/* <div className="card-title"><h5>Note:</h5> </div>
              <div className="card-body">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
              <li> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li> 
              <li> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uquat.</li>
              </div> */}
              <Link to="/createSyft" className="nav-link"><button class="btn btn-primary" >Proceed</button></Link>              
          </div>
        </div>
        </div>
        <div class="card-group" style={{marginRight:'3%',marginLeft:'2.5%'}}>
        <div className="card" style={{ marginTop:'1%',height:'100%', width: '100%', marginLeft:'0.5%',marginRight:'1%'}} >
          <div className="card-header">  

              <div className="card-title"><h4><b>3.Generate SBOM using Microsoft SBOM tool from Source Code </b></h4> </div>
              <div className="card-body">If you want to upload Source code for generating SBOM report using Microsoft SBOM tool, click Proceed  </div>
              {/* <div className="card-title"><h5>Note:</h5> </div>
              <div className="card-body"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
              <li> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li> 
              <li> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </div> */}
              <Link to="/createMsSbom" className="nav-link"><button class="btn btn-primary" >Proceed</button></Link>              
          </div>
        </div>
        <div className="card" style={{ marginTop:'1%',height:'100%', width: '100%', marginLeft:'0.5%'}} >
          <div className="card-header">       
              <div className="card-title"><h4><b>4. Generate SBOM using Cyclone Dx from Soup list</b></h4> </div>
              <div className="card-body">If you want to upload SOUP file for generating SBOM report,using cyclone dx tool you can click Proceed </div>
              {/* <div className="card-title"><h5>Note:</h5> </div>
              <div className="card-body"><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
              <li> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li> 
              <li> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              </div>   */}
              <Link to="/createSoup" className="nav-link"><button class="btn btn-primary" >Proceed</button></Link>              
          </div>
        </div>
      </div>
      <div/>
      </div>
    );
  }
}
