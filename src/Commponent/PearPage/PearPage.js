import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import './PearPage.scss'

const PearPage = () => {
    const {id} = useParams();
    const [developer, setDeveloper] = useState(null);

    useEffect (()=>{
        axios.get('/data.json')
        .then(response => {
            const dev = response.data.find(d => d.id === parseInt(id));
            setDeveloper(dev);
        })
        .catch(error => {
            console.error ("We have a trouble", error);
        })
    },[id]);

    return (
        <div className="pear-page">
            <h1>{developer.name}</h1>
               <img src={developer.image} alt={developer.name} className="pear-image"> </img> 
               <p>{developer.story}</p>
        </div>
    )
};



