import React from "react";
import loading from '../../assets/svg/loading.svg';
import {Div} from './styled';
export default function Loading(){
    return(
        <Div>
            <img src={loading} alt="imagem de carregamento"/>
        </Div>
    );
}