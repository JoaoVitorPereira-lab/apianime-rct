import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


// Cadastrar Anime //

export async function cadastrarAnime(nome){
    const resposta = await api.post('/anime', {
        nome: nome
    })
    return resposta.data
}

// Listar Todos os Animes //

export async function listarTodosAnimes(){
    const resposta = await api.get('/anime');
    return resposta.data;
}