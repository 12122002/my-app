import React, { Component } from 'react';
import About from '../../components/pages/About';
import Contact from '../../components/pages/Contact';
import Home from '../../components/pages/Home';
import TableRedash from '../../components/pages/table';
import {
    DesktopOutlined,
    PieChartOutlined,    
    FontColorsOutlined,
  } from '@ant-design/icons'; 
  const pageRoutes = () => {

    return [
      {
        path:'/table',
        component:TableRedash,
        link:'/table',
        icon: <PieChartOutlined/>,
        name: 'Table'
       },
       {
        path:'/contact',
        Component:Contact,
        link:'/contact',
        icon: <DesktopOutlined/>,
        name: 'Contact'
       },
       {
        path:'/about',
        Component:About,
        link:'/about',
        icon: <FontColorsOutlined/>,
        name: 'About'
       }       
    ];

}

export default pageRoutes();