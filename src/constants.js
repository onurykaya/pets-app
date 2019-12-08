import axios from 'axios';

const rootApiURL = "http://5dd7af92505c590014d3b4ac.mockapi.io/";

const petsPath = "pets";

export const fullPath = rootApiURL + petsPath;

export const getPets = () => {
    return axios.get(fullPath)
        .then(res => res.data)
};

export const breedOptions = [
    "Cavalier King Charles Spaniel",
    "Golden Retriever",
    "Beagle",
    "French Bulldog"
];