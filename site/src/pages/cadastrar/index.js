import {cadastrarAnime} from '../../api/animeApi';

import './index.scss'
import { useState } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Index() {
    const [nome, setNome] = useState('');
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    function ConsultarOsAnimes(){
        navigate('/')
    }

    async function salvarClick(){
        try
        {
            if(id === 0){
                const novoAnime = await cadastrarAnime(nome);
                setId(novoAnime.id);
                toast.dark('🔥 Filme cadastrado com sucesso!');
            }
            else{
                toast.error('Clique em novo para um novo cadastro ou aperte em consultar para ver todos os animes');
            }
        }
        catch(err)
        {
            if(err.response)
                toast.error(err.response.data.erro);
            else
                toast.error(err.message);
        }
    }

    function novoClick(){
        setId(0);
        setNome('');
    }

    return (
        <main className='page page-cadastrar'>
            
            <div className='container'>
                
                <div className='conteudo'>
                    <section>
                        <h1 className='titulo'><span>&nbsp;</span> Cadastrar Novo Anime</h1>

                        <div className='form-colums'>
                            <div>
                                <div className='form-row'>
                                    <label>Nome:</label>
                                    <input type='text' placeholder='Nome do anime' value={nome} onChange={e => setNome(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <br />
                                <br />
                                <div className='form-row'>
                                    <label></label>
                                    <div className='btnSalvar'>
                                        <button onClick={salvarClick}> SALVAR </button> &nbsp; &nbsp;
                                        <button onClick={novoClick}> NOVO </button> <br/> <br/>
                                        <button onClick={ConsultarOsAnimes}> CONSULTAR ANIMES </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

