import styled from 'styled-components';


export const Div = styled.div `
    width: 100%;
    min-height: 70px;
    margin: 0px 0px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1c232e;

    .input-filter {
        margin-left: 2px;
        width: 150px;
    }

`;

export const Form = styled.form `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
    max-width: 500px;
    margin-left: 20px;
    button {
        min-width: 30px;
        min-height: 30px;
        background-color: #1c232e;
        color: #fff;
        border: none;
        margin-left: 5px;
        padding: 5px 5px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        
    }
    
    input {
        color: #35352b;
        width: 250px;
        height: 40px;
        border: none;
        padding: 5px 10px;
        border-radius: 50px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;

        &:focus {
            outline: none;
        }

    }

    .filter-button-on {
        color: #7d1a0c;
    }

`;

export const Data= styled.div `

    max-width: 800px;
    margin: 0px auto;
    background-color: #1c232e;
    border-left: 1px solid #1c232e;
    border-right: 1px solid #1c232e;
    div {
        width: 100%;
        margin-top: 50px;
        padding: 10px;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #1c232e;

    }

    .container-avatar{
        max-width: 200px;
        margin: 0px auto;
        background-color: transparent;
        
    }

    a{
        text-decoration: none;
        color: #000;
        font-family: sans-serif;
        text-transform: uppercase;
    }
    
    img{
        max-width: 100px;
        margin: 0 auto;
        margin-top: 10px;
        display: block;
        border-radius: 50%;
    }
    
`;
