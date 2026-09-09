import Header from "./components/Header"
import { useAuth } from './context/AuthContext'

function App() {
    return(
        <div className='h-full w-full p-0'>
           <Header/>
           <div className="page">
            
           </div>
        </div>
    )
}

export default App
