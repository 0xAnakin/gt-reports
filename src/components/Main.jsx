import { Routes, Route } from 'react-router-dom';
import AppNav from './AppNav';
import Home from './routes/Home';
import Vehicles from './routes/Vehicles';
import VehicleRoutes from './routes/VehicleRoutes';
import NotFound from './routes/NotFound';

function Main() {
    return (
        <main className="page-body">
            <AppNav />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/vehicles" element={<Vehicles />} />
                <Route exact path="/vehicle-routes" element={<VehicleRoutes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    );
}

export default Main;
