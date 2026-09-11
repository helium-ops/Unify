import Header from "./components/Header"
import { AuthProvider } from "./context/AuthContext";
import Auth from './pages/Auth'
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
    return(
      <AuthProvider>
        <div className='h-full w-full p-0'>
            
             <BrowserRouter>
           <Header/>
           <div className="h-[88.38%] w-full fixed bottom-2">
            
            
              <Routes>
                <Route path='/' element={<Auth/>}></Route>
              </Routes>
              
              
           </div>
           </BrowserRouter>
        </div>
        </AuthProvider>
    )
}

export default App
