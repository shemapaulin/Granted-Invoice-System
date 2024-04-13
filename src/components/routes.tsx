

import { Route, Routes,useLocation } from 'react-router-dom';
import Form from './form';
import Invoice from './invoice';

const MainRoutes = () => {
    const location = useLocation();
  return (
    <Routes key={location.pathname} location={location}>
<Route path="/" element={<Form/>}/>
<Route path="/invoice" element={<Invoice/>}/>
</Routes>
  )
}

export default MainRoutes