const expressoSul = require('express');

const vizu = expressoSul();

vizu.use(expressoSul.json());

vizu.get('/dadosPessoais', (req,res) => {
    res.send( {nome: 'Kevin Willian', idade: 19, email: 'k.almeida20021@gmail.com', profissao: 'estagiario'} );
});

vizu.get('/formacao', (req,res) => {
    res.send( {faculdade: 'UNIP - Ciencias da Computação', cursoTecnico: 'Informatica para Internet na ETEC', ensino: 'Ensino médio completo'} );
});

vizu.get('/projetos', (req, res) => {
    res.send({projetosAtual: 'CRUD em DART/Flutter, Sistema com inteligencia artificial', projetosAntigos: 'sistema de criação de cupons, site meio ambiente, criptografia e leitura de excel em java'});
});

vizu.get('/experiencias', (req, res) => {
    res.send({empregoAtual: 'estagiario em assistencia tecnica', empregoAnterior: 'estagiario no tribunal de justiça'});
});

vizu.get('/lazer', (req,res) => {
    res.send({lazer: 'nas horas de lazer, costumo assistir series sitcons, estudar programação e jogar games rock rock'})
});

vizu.post('/cadastrarCliente', (req,res) => {
    const {nome, telefone, idade, profissao, email} = req.body;

    res.send("Seu nome: " + nome + "\nSeu telefone: " + telefone + "\nSua idade: " + idade + "\nSua Profissão: " + profissao + " e seu Email: " + email);
});

vizu.put('/alterarCliente/:cod', (req,res) => {
    const {cod} = req.params;

    const{nome, telefone, idade, profissao, email} = req.body;

    res.send('Seu cadastro foi atualizado!! '+ cod + "\nNome: " + nome + "\nE-mail: " + email);
});

vizu.delete('/deletarCliente/:cod', (req,res) => {
    const {cod} = req.params;

    res.send("Seu cadastro foi excluido com sucesso: " + cod);

    console.log(cod);
});

vizu.listen(5656, () => {
    console.log("RODANDO....")
}); 