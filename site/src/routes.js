import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cadastrar from './pages/cadastrar'
import Consultar from './pages/consultar'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Consultar />} />
                <Route path='/anime' element={<Cadastrar />} />
            </Routes>
        </BrowserRouter>
    )
}
