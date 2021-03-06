import React from 'react';
import Navbar from '../../components/navbar/index';
import './index.css';
import {Link} from 'react-router-dom';
import { Layout, Typography} from 'antd';
import Button from '../../components/button/index';
const {Content} = Layout;
const { Title ,Paragraph} = Typography;
export default function Home(){
    
    const Opcoes= ()=>{
        return (
            <>
                <ul id="menu-landingpage">
                    <li className="itens-menu"><Link to="/">Serviços</Link></li>
                    <li className="itens-menu"><Link to="/">Quem somos</Link></li>
                    <li className="itens-menu"><Link to="/">Contato</Link></li>
                    <li className="itens-menu adm"><Link to="/administracao">Administração</Link></li>
                    <li className="itens-menu destaque"><Link to="solicitarservico">Agendar serviço</Link></li>
                </ul>
            </>
        )
    }

    return(
        <div style={{width: '100%', height:'100%'}}>
            <Navbar Children={<Opcoes/>}/>
            <Content style={{padding: '20px 50px', display:'flex', alignItems:'center',flexWrap:'wrap', height: '93%'}}>
                <div id="conteudo-princial">
                    <Title level={1}>Agende serviços de manutenção 
                    e revisão para o seu veículo.</Title>   
                    <img src="https://i.imgur.com/ZEs9cXa.png" alt="Pessoa mexendo no tablet dentro de uma oficina, com um carro suspenso em manutenção ao lado"/>
                </div>
                <div id="conteudo-secundario">
                        <Title level={2}>Garantimos</Title>
                        <ul>
                            <li>Qualidade no serviço</li>
                            <li>Segurança</li>
                            <li>Praticidade</li>
                        </ul>
                        <p>
                            E o melhor, pertinho de você.
                            São mais de 1500 estabelecimentos credenciados em todo o Ceará.
                        </p>
                        <img src="https://i.imgur.com/zSCywmA.png" alt="simbolo que mostra a marcação territorial do Estado do Ceará e sua forma"/>
                        <Button text="Faça parte" action/>
                        <Paragraph type="secondary">*Em breve em outros estados brasileiros</Paragraph>
                </div>
            </Content>
        </div>
    );
}