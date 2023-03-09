import { Route, Routes } from 'react-router-dom';
import Main from '../../Pages/Main';

function RootRouter() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
  );
}

export default RootRouter;
