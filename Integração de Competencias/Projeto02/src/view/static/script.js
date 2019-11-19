$(() => {
    axios.get('api/alunos/exibir')
        .then((res) => {
            res.data.forEach((e)=>{
            let aluno = 
            `<a href="#" class="list-group-item list-group-item-action">
            Matricula: ${e.matricula} - 
            Nome: ${e.nome}
            </a>`
            $("#listaAlunos").append(aluno);
            })
        })
    $("#cadastrar").click(()=>{
        let aluno = {
            nome: $("#nomeAluno").val(),
            matricula: $("#matricula").val()
        }
        axios.post('api/alunos/inserir',aluno)
        .then((res)=>{
            window.location.reload();
        })
    })
})

