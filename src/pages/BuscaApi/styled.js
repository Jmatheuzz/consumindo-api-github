import styled from 'styled-components';


export const Div = styled.div `
    width: 100%;
    height: 100%;
    margin: 0px auto;
    margin-top: 2vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const Form = styled.form `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 20 0 ;
    
    div {
        display: flex;
    }
    button {
        max-width: 40px;
        max-height: 40px;
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
        width: 35vw;
        height: 40px;
        border: 1px solid #35352b;
        padding: 5px 10px;
        border-radius: 50px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;

        &:focus {
            outline: none;
        }

    }
    @media(max-width: 800px) {
        input {
            width: 40vw;
            height: 7vw;
        }

        button {
            width: 7vw;
            height: 7vw;
        }

        & {
            width: 100%;
        }

        .input-filter {
            max-width: 95px;
        }

    }
    .input-filter {
        margin-left: 2px;
        width: 150px;
    }

    .filter-button-on{
        filter: brightness(30%);
    }

`;

export const Data= styled.div `
    overflow-y: scroll;
    max-width: 800px;
    max-height: 70vh;
    margin: 20px auto;
    div {
        width: 100%;
        margin-top: 50px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #fff;

    }

    .container-avatar{
        max-width: 200px;
        margin: 0px auto;
        border: none;
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
        border: 5px solid #1c232e;
    }
    
`;
