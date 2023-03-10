import { Route, Routes } from 'react-router-dom';
import Constructor from '../../Pages/Constructor';

function RootRouter() {
  return (
      <Routes>
        <Route path="/" element={<Constructor />} />
      </Routes>
  );
}

export default RootRouter;
