import Header from "./components/Header"
import { useAuth } from './context/AuthContext'
import { AuthContext } from "./context/AuthContext";
import Auth from './pages/Auth'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    return(
        <div className='h-full w-full p-0'>
            <BrowserRouter>
             
           <Header/>
           <div className="h-[88.38%] w-full fixed bottom-2">
            <AuthContext>
              <Routes>
                <Route path='/' element={<Auth/>}></Route>
              </Routes>
              </AuthContext>
           </div>
           </BrowserRouter>
        </div>
    )
}

export default App
