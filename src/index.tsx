import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { Home, Login, NotFound, Signup } from './pages';

const App = ({ homepage }: { homepage: string }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Navigate to={homepage} />} />
    </Routes>
  );
};

export default App;
