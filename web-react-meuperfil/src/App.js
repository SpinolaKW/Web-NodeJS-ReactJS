import React from 'react';
import { Container, Row , Col, Accordion} from 'react-bootstrap';
import './App.css';
import Imagem from './componentes/imagem';

function App () {
  return (
      <Container>

        <Row className="justify-content-md-center">
          <Col>
            <center><h1>Meu Perfil</h1></center>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs = {6} md = {4}>
              <Imagem />
          </Col>
        </Row>

        <br/>
      
        <Row>
          <Col>
            <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Dados Pessoais</Accordion.Header>
                    <Accordion.Body>
                      <p>Kevin Willian Almeida Spinola;</p>
                      <p>19 Anos;</p>
                      <p>Praia Grande, São Paulo;</p>
                      <p>Brasileiro</p>
                    </Accordion.Body>
                  </Accordion.Item>
              <Accordion.Item eventKey="1">
              <Accordion.Header>Formação</Accordion.Header>
                <Accordion.Body>
                  <p>Técnico em Informatica para Internet - ETEC</p>
                  <p>Cursando Bacharel em Ciências da Computação - UNIP</p>
                  <p>Ensino Médio Completo</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
              <Accordion.Header>Experiência</Accordion.Header>
                <Accordion.Body>
                  <p>Estágiario no Tribunal de Justiça de São Paulo - 2019</p>
                  <p>Estágiario na Estação Acústica Luthier - 2020 / Atualmente</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
              <Accordion.Header>Projetos</Accordion.Header>
                <Accordion.Body>
                  <p>Criptografia com Python</p>
                  <p>Site do Recoupon</p>
                  <p>Site do MobilidadeTech</p>
                  <p>Algoritmo de Leitura de Dados em planilha Excel</p>
                  <p>Automatização da Impressão</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
  );
}
export default App;