import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Projects from '../page/Projects'
import Todo from '../page/Todo'
function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Projects />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  )
}

export default AppRouter
