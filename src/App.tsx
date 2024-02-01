import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ROUTES } from './utils/constants';
import RegisterVisit from './pages/RegisterVisit';
import CommentVisit from './pages/CommentVisit';
import Layout from './pages/Layout';
import Error from './pages/Error';
import CommentsSection from './pages/CommentsSection';

const App = () => {
  return (
    <>
      <ChakraProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path={ROUTES.home.link} element={<HomePage />} />
              <Route path={ROUTES.comment.link} element={<CommentVisit />} />
              <Route path={ROUTES.visit.link} element={<RegisterVisit />} />
              <Route path={ROUTES.commenstSection.link} element={<CommentsSection />} />
              <Route path={ROUTES.error.link} element={<Error />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
};
export default App;
