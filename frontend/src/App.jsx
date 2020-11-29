import React from 'react';
import './App.css';
import {Typography} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import Header from './Header'
import DataList from './Components/DataList'
import HiddenCompo from './Components/HiddenCompo'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Typography variant="h2" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod, impedit perspiciatis debitis hic ex sequi quasi sed, exercitationem doloremque iste! Mollitia at porro maxime magni ratione, iusto pariatur sit quam labore molestias repellendus, officiis quia aperiam dolore neque fugiat laborum possimus accusantium doloremque soluta in ex beatae hic modi? Quod omnis alias perferendis reiciendis nobis. Delectus quo quam expedita maiores! Obcaecati sint maxime et consequuntur incidunt, quibusdam iste, id recusandae, blanditiis veniam sit temporibus ipsum commodi tenetur atque aliquid culpa? Necessitatibus ipsa veniam sunt ab placeat nemo consectetur numquam! Ducimus numquam enim fuga animi aut cupiditate omnis a reprehenderit?</Typography>
      <DataList/>
      <HiddenCompo/>
    </ThemeProvider>
  );
}

export default App;
