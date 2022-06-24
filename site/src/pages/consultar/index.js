import { listarTodosAnimes} from '../../api/animeApi';

import './index.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Index() {
    const [animes, setAnimes] = useState([]);
    const navigate = useNavigate();

    async function carregarTodosAnimes() {
        const resp = await listarTodosAnimes();
        setAnimes(resp);
    }

    useEffect(() => {
        carregarTodosAnimes();
    }, [])

    function irCadastrar(){
        navigate('/anime')
    }

    return (
        <main className='consultar'>
            <div className='container'>
                
                <div className='conteudo'>

                    <table>
                        <thead>
                            <tr>
                                <th>ANIME</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {animes.map(item => 
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                </tr>
                            )}  
                          
                        </tbody>
                    </table>
                    
                </div>

                <div>
                    <button className='voltar' onClick={irCadastrar}> CADASTRAR </button>
                </div>
            </div>
        </main>
    )
    console.log(carregarTodosAnimes());
}

