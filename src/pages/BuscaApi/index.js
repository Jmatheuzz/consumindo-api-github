/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {FiSearch, FiFilter} from 'react-icons/fi';
import { Div, Form, Data } from "./styled";
import axios from '../../services/axios';
import { toast } from "react-toastify";
import {get} from 'lodash';
import Loading from "../../components/Loading";

export default function buscaAPI(){
    const [repos, setRepos] = useState([]);
    const [filterOn, setFilterOn] = useState(false);
    const [loadingOn, setLoadingOn] = useState(false);

    
    function handleSubtmit(e){
        setLoadingOn(true);
        const orgName = document.querySelector('.org');
        const inputFilter = document.querySelector('.input-filter');
        
        e.preventDefault();

        async function getData(){
            const response = await axios.get(`/${orgName.value}/repos`).catch(function(e){
                if(e.response){
                    toast.error(e.response.data.message);
                }
            })
            const data = get(response, 'data', []);
            if(filterOn){
                const dataFilter = [];
                for(let repo of data){
                    if(repo.name.toLowerCase().includes(inputFilter.value.toLowerCase())){
                        dataFilter.push(repo);
                    }
                }
                
                if(dataFilter.length <= 50){
                    setRepos(dataFilter);
                }else{
                    setRepos(dataFilter.slice(0, 50));
                }

            }else{
                if(data.length <= 50){
                    setRepos(data);
                }else{
                    setRepos(data.slice(0, 50));
                }
            }

            setLoadingOn(false);
            }
        
        getData();
        
    }

    

    function handleClick(e){
        e.preventDefault();
        const filterButton = document.querySelector('.filter-button');
        if(!filterOn){
            setFilterOn(true);
            filterButton.classList.add('filter-button-on');
        }else{
            setFilterOn(false);
            filterButton.classList.remove('filter-button-on');
        }

    }
    
    return (
        <>
            
            <Div>
                <Form onSubmit={handleSubtmit}>
                    <input className="org" type={'search'} placeholder={'Buscar...'}/>
                    <button type={'submit'}> <FiSearch size={30} /> </button>
                    <button className="filter-button" onClick={handleClick}> <FiFilter size={30}/></button>
                    {filterOn && 
                        <input className="input-filter" placeholder="Filtrar..." type={'text'}/>
                        }
                </Form>

            </Div>
            
            {loadingOn && <Loading/>}

            <Data>
                
                {repos.length > 0 &&
                    <div className="container-avatar">
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img src={repos[0].owner.avatar_url} alt='logo da organização'/>
                    </div>
                    }


                {repos.map(repo => {
                    return (
                        <div key={repo.id} >
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <a target={'_blank'} href={repo.html_url}><h3>{repo.name}</h3></a>        
                            <span>{repo.description}</span>
                        </div>
                    );
                })}
                
            </Data>
            
        </>

    );

}