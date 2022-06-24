import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* import Home from './pages/home' */
/* <Route path='/' element={<Home />} /> */

import Cadastrar from './pages/cadastrar'
import Consultar from './pages/consultar'

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/anime' element={<Cadastrar />} />
                <Route path='/' element={<Consultar />} />
            </Routes>
        </BrowserRouter>
    )
}
