import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateAppdetails extends Component {

  constructor(props) {
    super(props);
    this.onChangeApplicationname = this.onChangeApplicationname.bind(this);
    this.onChangeApplicationurl = this.onChangeApplicationurl.bind(this);
    this.onChangeVersion = this.onChangeVersion.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      applicationname: '',
      applicationurl: '',
      version: 0,
      date: new Date(),
      selectedFile: null
    }
  }

  onChangeApplicationname(e) {
    this.setState({
      applicationname: e.target.value
    })
  }
  onChangeApplicationurl(e) {
    this.setState({
      applicationurl: e.target.value
      
    })
  }

  onChangeVersion(e) {
    this.setState({
      version: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const appdetail = {
      applicationname: this.state.applicationname,
      applicationurl: this.state.applicationurl,
      version: this.state.version,
      date: this.state.date
    }
    

    console.log(appdetail);

    axios.post('http://localhost:5000/appdetails/add', appdetail)
      .then(res => console.log(res.data));

    this.setState({
      applicationname: '',
      applicationurl: '',
      version: 0,
      date: new Date(),
    })
    
  }
  

  render() {
    return (
      <div>
        <h3>Add application details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>applicationname: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.applicationname}
                onChange={this.onChangeApplicationname}
                />
          </div>
          <div className="form-group"> 
          <label>applicationsourceco: </label>
          {/* <input  type="text"
              required
              className="form-control"
              value={this.state.applicationurl}
              onChange={this.onChangeApplicationurl}
              /> */}
              <input type="file" webkitdirectory mozdirectory directory 
              className="form-control"
              value={this.state.applicationurl}
              onChange={this.onChangeApplicationurl} />
              
              



        </div>
        <div className="form-group">
          <label>Version: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.version}
              onChange={this.onChangeVersion}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

          <div className="form-group">
            <input type="submit" value="upload" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
