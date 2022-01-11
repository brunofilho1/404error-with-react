
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/Home';
import ErrorScreen from './screens/Error';

const ScreenRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route path="*" element={<ErrorScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ScreenRoutes;