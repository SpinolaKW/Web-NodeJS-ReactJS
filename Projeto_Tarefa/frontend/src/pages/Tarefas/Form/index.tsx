import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import api from '../../../services/api';
import './index.css';

interface ITarefa{
    nomeTarefa: string;
    descricao: string;
}

const Tarefas: React.FC = () => {

    const memoria = useHistory()

    const { cod } = useParams<{ cod: string}>()

    const [model, setModel] = useState<ITarefa>({
        nomeTarefa: '',
        descricao: ''
    })

    useEffect(() => {
        console.log(cod)
        if (cod !== undefined) {
            encontraTarefa(cod);
        }
    }, [cod])

    function atualizaModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function enviaDados(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (cod !== undefined) {
            const response = await api.put(`/atualizaTarefa/${cod}`, model)
            console.log(response)
        }
        else
        {
            const response = await api.post('/inserirTarefa', model)
            console.log(response)
        }

        voltar()

    }

    async function encontraTarefa(cod: string) {
        const response = await api.get(`/tarefa/${cod}`)
        console.log(response)
        setModel({
            nomeTarefa: response.data.nomeTarefa,
            descricao: response.data.descricao
        })
    }

    function voltar() {
        memoria.goBack()
    }
    
    return (
        <div className = "container">
            <br />
            <div className = "task-header">
                <h1>Nova Tarefa</h1>
                <Button variant = "dark" size = "sm" onClick = {voltar}>Voltar</Button>
            </div>
            <br />
            <div className = "container">
                <Form onSubmit = {enviaDados}>
                    <Form.Group>
                        <Form.Label>Nome da Tarefa</Form.Label>
                        <Form.Control 
                            type = "text"
                            name = "nomeTarefa"
                            value = {model.nomeTarefa}
                            onChange = { (e: ChangeEvent<HTMLInputElement>) => atualizaModel(e) }
                        />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control 
                            as = "textarea"
                            name = "descricao"
                            rows = {3}
                            value = {model.descricao}
                            onChange = { (e: ChangeEvent<HTMLInputElement>) => atualizaModel(e) }
                        />
                    </Form.Group>
                    <br />
                    <Button variant = "dark" type = "submit">Salvar</Button>
                </Form>
            </div>
        </div>
    );
}

export default Tarefas;