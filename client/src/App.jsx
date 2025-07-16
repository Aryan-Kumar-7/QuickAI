import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import BlogTitle from './pages/BlogTitle'
import WriteArticle from './pages/WriteArticle'
import GenerateImage from './pages/GenerateImage'
import RemoveBackground from './pages/RemoveBackground'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community'
import RemoveObject from './pages/RemoveObject'
import {Toaster} from 'react-hot-toast'

const App = () => {



  return (
    <div>
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitle />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='community' element={<Community />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='generate-images' element={<GenerateImage />} />
          <Route path='remove-object' element={<RemoveObject />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App