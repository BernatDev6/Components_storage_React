import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { HomePage } from '../components/HomePage/HomePage'
import { ComponentViewer } from '../components/ComponentViewer/ComponentViewer'
//import { ErrorComp } from '../components/ErrorComp';

export const MainRouter = ({components}) => {
    return (
    <Router>
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/component-viewer"
                element={<ComponentViewer components={components} />}
            />
        </Routes>
    </Router>
  )
}
