
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, Templates, Blogs, Projects, BestPrompts, Tools } from './pages';
import ScrollToTop from './components/ScrollToTop';
import { NavbarDark } from './components';
import ImageHeaderInspectorPage from './pages/image-header-inspector';
import UUIDGeneratorPage from './pages/uuid-generator-page';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <NavbarDark /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/templates" element={<Templates />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/best-prompts" element={<BestPrompts />} />
        
        {/* Tools */}
        <Route exact path="/tools" element={<Tools />} />
        <Route exact path="/image-header-inspector" element={<ImageHeaderInspectorPage />} />
        <Route exact path="/tools/image-header-inspector" element={<ImageHeaderInspectorPage />} />
        <Route exact path="/tools/uuid-generator" element={<UUIDGeneratorPage />} />
      </Routes>
    </Router>
  )
}

export default App