import React from 'react';
import { Nav } from './styled';
import {Link} from 'react-router-dom';

export default function Header() {
    return (<Nav>
    <Link to = "/sobremim">sobre mim</Link>
    
    </Nav>);
}