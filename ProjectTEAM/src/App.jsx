// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/home';
import Post from './components/Post';
import AllPosts from './components/AllPosts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/posts" element={<AllPosts/>}/>
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;