import {Route, Routes} from 'react-router-dom'
import { Publications } from './pages/publications'
import { Post } from './pages/post'
import { DefaultLayout } from './layouts/defaultLayout'

export function Router () {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<Publications/>}/>
                <Route path="/post" element={<Post/>}/>
            </Route>
            
        </Routes>
    )
}