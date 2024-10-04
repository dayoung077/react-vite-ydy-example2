import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/BoardPage'
import { ProfilePage } from './../pages/ProfilePage'
import PropsPage from '../pages/propsPage'

// React Routes, Route 사용 시 배열로 관리하기
const routes = [
  {
    path: '/',
    element: <HomePage />,
    title: 'Home',
  },

  {
    path: '/board',
    element: <BoardPage />,
    title: 'Board',
  },

  {
    path: '/profile',
    element: <ProfilePage />,
    title: 'Profile',
  },

  {
    path: '/props',
    element: <PropsPage />,
    title: '프롭스',
  },
]

export default routes
