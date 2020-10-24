import React, { Component } from 'react';
import About from '../../components/pages/About';
import Contact from '../../components/pages/Contact';
import Home from '../../components/pages/Home';
import TableRedash from '../../components/pages/table';
import Charts from './../../components/pages/charts/index';
import Alert from './../../components/pages/alert/index';
import {
    PieChartOutlined,    
    DesktopOutlined,
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
        path:'/charts',
        component:Charts,
        link:'/charts',
        icon: <DesktopOutlined/>,
        name: 'Charts'
       },
       {
        path:'/alert',
        component:Alert,
        link:'/alert',
        icon: <FontColorsOutlined/>,
        name: 'Alert'
       }       
    ];

}

export default pageRoutes();