import React, {useState, useEffect} from "react";
import Axios from "axios";
import {ListGroup, ListGroupItem} from "reactstrap";


const Repos = ({reops_url}) => {
    const [repos, setRepos] = useState([]);
    const fetchReops = async () => {
        const {data} = await Axios.get(reops_url);
        setRepos(data);
    }
    useEffect(() => {
        fetchReops();
    }, [reops_url])

    return (
        <ListGroup>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-primary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repos;