import React from 'react';
import {Pet} from "../components";
import {getPets} from "../constants";
import {stringContains} from "../helpers";

const PetsToShow =6;

class PetList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            _pets: [],
            pets: [],
            yukleniyor: true,
            currentCount: 0
            
        }
    }

    componentDidMount() {
       getPets ().then((data) => {
            this.setState({
                _pets: data,
                pets: data,
                yukleniyor: false,
                
            })
        })
        window.onscroll=this.scrollHandler;
        window.addEventListener("scroll", this.scrollHandler);
    }



    componentDidUpdate(prevProps) {
        if(prevProps.activeFilter !== this.props.activeFilter){
            this.filterPets();
        }
        if(prevProps.searchValue !== this.props.searchValue){
            this.filterPets();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollHandler);
    }

    scrollHandler=(e)=>{
        console.log("Scroll oldu")
        if(window.innerHeight + window.scrollY -2 >= document.body.offsetHeight){
            this.setState({
                currentCount: this.state.currentCount +1
            });

        }
    }

    filterPets = () => {
        if(!this.props.activeFilter){
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return stringContains(pet.name, this.props.searchValue)
                }) 
               
            });
        }else{
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return pet.breed === this.props.activeFilter;
                }).filter((filteredPet) => {
                    return stringContains(filteredPet.name, this.props.searchValue)
                })
                
            });
        }
    }

    render(){
        const Yukleniyor = <div>Yukleniyor</div>;
        const EmptyPets = <div>Bulunamadı</div>;
        const Pets =  [<h3>Gösterilen Pet Sayısı: {this.state.pets.length} </h3>,
        <div className="row">
            {
                    this.state.pets.slice(0, (this.state.currentCount + 1)*PetsToShow).map((pet) => {
                    return <Pet key={pet.id} {...pet} />
                })
            }
        </div>];

        
        if(this.state.yukleniyor){
            return Yukleniyor;
        }else if(this.state.pets.length === 0){
            return EmptyPets
        }else{
            return Pets;
        }
    }
}


export default PetList;
