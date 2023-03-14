import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import DogDetails from './pages/DogDetails';
import { Layout } from './components/Layout';
import { Gallery } from './components/Gallery';
import { SubBreeds } from './components/SubBreeds';

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<SubBreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
