import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Board from './components/board/Board';
// import Post from './pages/Post';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <div className="app-body">
                    <Sidebar />
                    <Routes>
                        <Route path="/" element={<Board />} />
                        {/*<Route path="/post" element={<Post />} />*/}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;