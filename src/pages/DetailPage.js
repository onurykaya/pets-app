import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {fullPath} from '../constants';
import queryString from 'query-string';
import NotFoundPage from './NotFoundPage';



export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            details: {},
            yukleniyor: true
        }
    }

    componentDidMount() {
    const id = queryString.parse(this.props.location.search).id;
    axios.get(`${fullPath}/${id}`)
      .then(res => {
        this.setState({
          details: res.data,
          yukleniyor: false
        });
      })
      .catch(err => {
        console.error(err.message);
        this.setState({
          yukleniyor: false
        });
      });
  }

    render() {
        const { name, breed, image, description, age } = this.state.details;
        const Pet = (
        <div className="col-lg-6 col-md-4 my-4 mx-auto">
            <div className="card h-100">
            <img className="card-img-top" src={image} alt="" style={{ height: "292px" }} />
            <div className="card-body">
                <h4 className="card-title">
                    {name}
                <div>
                    <span className="badge badge-primary" style={{ fontSize: "12px" }}>{breed}</span>
                </div>
                <div>
                    <span className="badge badge-warning" style={{ fontSize: "12px" }}>{age}</span>
                </div>
                </h4>
                <p className="card-text">
                    {description}
                </p>
            </div>
            <div className="card-footer">
                <div className="btn btn-success">Favorilere Ekle</div>
            </div>
            </div>
             <button type="button" className="btn btn-success btn-lg btn-block my-4"><Link to="/"><span style={{color: "white"}}>Back to Home Page</span></Link></button>
        </div>
        );

        
        
        const yukleniyor = (
        <div>Yukleniyor</div>
        );

        if(this.state.yukleniyor){
        return yukleniyor;
        }
        if(this.state.details.name){
        return Pet;
        } else {
        return <NotFoundPage />
        }
    }
}

