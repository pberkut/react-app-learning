import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components/Layout';
// import Home from './pages/Home';
// import Dogs from './pages/Dogs';
// import DogDetails from './pages/DogDetails';
// import { Layout } from './components/Layout';
// import { Gallery } from './components/Gallery';
// import { SubBreeds } from './components/SubBreeds';

const Home = lazy(() => import('./pages/Home'));
const Dogs = lazy(() => import('./pages/Dogs'));
const DogDetails = lazy(() => import('./pages/DogDetails'));
const Gallery = lazy(() =>
  import('./components/Gallery').then(module => ({
    ...module,
    default: module.Gallery,
  }))
);
const SubBreeds = lazy(() =>
  import('./components/SubBreeds').then(module => ({
    ...module,
    default: module.SubBreeds,
  }))
);

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
