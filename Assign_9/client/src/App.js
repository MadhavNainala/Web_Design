import Login from './pages/Login'
import Register from './pages/Register'
import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


const App = () => {

    return(


        <div>

            <BrowserRouter>

            <Routes>
                <Route path="/login" exact element={<Login/>} />
                <Route path="/register"  exact element={<Register/>} />
            </Routes>
            </BrowserRouter>



        </div>





    ) 

}

export default App