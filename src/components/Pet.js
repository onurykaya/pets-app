import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';




const Pet = (props) => {

    const owner = "Onur";
    const addToFavorites = (pet) => {
        console.log(id)
        axios.post('http://5dd7af92505c590014d3b4ac.mockapi.io/favorites', {
            pet,
            owner
        })
        
    }



    const {name, image, age, description, breed, id} = props;
    return (
        <div className="col-lg-6 col-md-4 mb-4">
            <div className="card h-100">
                <Link to={`/detailpage?id=${id}`}><img className="card-img-top" src={image} alt="" style={{ height: "292px" }} /></Link>
                <div className="card-body">
                    <h4 className="card-title">
                        <Link to={`/detailpage?id=${id}`}>{name}</Link>
                        <div>
                            <span className="badge badge-primary" style={{fontSize: "12px"}}>{breed}</span>
                        </div>
                        <div>
                            <span className="badge badge-warning" style={{fontSize: "12px"}}>{age}</span>
                        </div>
                    </h4>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="btn btn-success"
                        onClick= {()=>{
                            addToFavorites(props);
                        }}

                    >Favorilere Ekle</div>
                </div>
            </div>
        </div>
    );
}

export default Pet;
