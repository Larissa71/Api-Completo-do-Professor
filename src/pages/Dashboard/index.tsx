import React from 'react';
import api from '../../services/api';
                
import { Container, Title, Form, Personagens } from './styles';



const Dashboard: React.FC = () => {
    return (
        <Container>
            <Title>The Vampire Diaries API</Title>

            <Form>
                <input type = "text" placeholder = "Escreva o nome de um personagem..."/>
                <button type = "submit">Pesquisar</button>
            </Form>
            <Personagens>
                <a href= "#">
                    <p className='personagem'> Elena Gilbert</p>
                    <div>
                        <strong> Humana </strong>
                        <p> Mora em: Mystic Falls, Virgínia </p>
                        <p> Tia: Jenna </p>
                        <p> Irmão adotivo: Jeremy Gilbert</p>
                    </div>
                </a>


                <a href= "#">
                    <p className='personagem'> Elena Gilbert</p>
                    <div>
                        <strong> Humana </strong>
                        <p> Mora em: Mystic Falls, Virgínia </p>
                        <p> Tia: Jenna </p>
                        <p> Irmão adotivo: Jeremy Gilbert</p>
                    </div>
                </a>


                <a href= "#">
                    <p className='personagem'> Elena Gilbert</p>
                    <div>
                        <strong> Humana </strong>
                        <p> Mora em: Mystic Falls, Virgínia </p>
                        <p> Tia: Jenna </p>
                        <p> Irmão adotivo: Jeremy Gilbert</p>
                    </div>
                </a>
            </Personagens>
        </Container>
    );
};

export default Dashboard;