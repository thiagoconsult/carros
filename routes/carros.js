let router = require('express').Router();

global.carros = [
    {nome:'Gol', montadora: 'Volkswagen', ano: '1996', cor: "preto"},
    {nome:'Uno', montadora: 'Fiat', ano: '2001', cor: "branco"},
    {nome:'Punto', montadora: 'Fiat', ano: '2010', cor: "preto"}
]

router.get('/', (req, res) =>{
    res.render('carros_lista', {title: 'Carros', subtitle:"Listagem marota", lista: carros});
})

router.get('/cadastro', (req, res)=>{
    res.render('carros_cadastro', {title: 'Cadastro de Novo Carro'})
})

router.post('/', (req, res)=>{
    global.carros.push(
        {
            nome: req.body.nome,
            montadora: req.body.montadora,
            ano: req.body.ano,
            cor: req.body.cor
        }
    );
    res.redirect('/carros/')
})

module.exports = router;
