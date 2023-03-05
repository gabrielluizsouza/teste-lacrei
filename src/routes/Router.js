import { BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home"
import {Professional} from "../pages/Professional"
import {User} from "../pages/User"

 export const Router = () => {
  
    return(
    <BrowserRouter>

        <Routes>

            <Route index path="/" element={<Home/>} />
            <Route path="/pessoa-usuaria" element={<User/>}/>
            <Route path="/profissional" element={<Professional/>}/>
            <Route path="*" element={<p>error</p>}/>
            
        </Routes>

    </BrowserRouter>
    )
}
