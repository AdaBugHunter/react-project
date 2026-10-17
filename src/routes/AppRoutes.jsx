import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import NotFound from '../pages/NotFound'
import CompositionPractice from '../pages/CompositionPractice'
import ContextPractice from '../pages/ContextPractice'

function AppRoutes() {
  return (
   <Routes>
    <Route path="/home" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path='/products' element={<Products />}/>
    <Route path='/product/:id' element={<ProductDetail />} />
    <Route path='*' element={<NotFound />}/>
    <Route path="/composition-practice" element={<CompositionPractice />} />
    <Route path="/context-practice" element={<ContextPractice />} />

   </Routes> 
  )
}

export default AppRoutes
