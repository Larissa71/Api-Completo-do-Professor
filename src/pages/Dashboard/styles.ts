import styled from 'styled-components';
import {shade} from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Title = styled.h2`
    font-size: 70px;
    font-family: 'Supermercado One', cursive;
    color: #e01414;
    line-height: 56px;
    text-align: center;
    text-shadow: 1px 1px white, -1px -1px #444;
    letter-spacing: 2px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 8px 0 0 8px;
        color: #de2121;
        border-right: 0;
        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 140px;
        height: 70px;
        background: #8f1515;
        border-radius: 0 8px 8px 0;;
        border: 0;
        color: #000;
        font-weight: bold;
        font-size: 15px;
        margin-right: -80px;
        transition: background-color 0.5s; 

        &:hover {
            background: ${shade(0.0, "#000")};
            color: ${shade(0.0, "#8f1515")};
        }
    }
    
`;

export const Personagens = styled.div`
margin-top: 80px;
max-width:700px;

    a{
        background: #000;
        border-radius: 5px;
        width: 100%;
        display: block;
        padding: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.2s;

        &:hover {
            transform: translate(10px);
        }

        & + a {
            margin-top: 16px;
        }

        .personagem{
            font-family: 'Rowdies', cursive;
        }

        div{
            margin: 0 16px;
            flex: 1;
            
            strong{
                font-size: 20px;
                color: #000;
                
            }

            p{
                font-family: 'Syne Tactile', cursive;
                font-size: 18px;
                color: #f71205;
                margin-top: 4px;
            }
        }
    }
`;
