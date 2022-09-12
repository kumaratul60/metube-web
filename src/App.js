import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"

import { Navbar, Feed, ChannelDetail, VideoDetails, SearchFeed } from "./components"

const App = () => (
  <BrowserRouter>
    <Box sx={ { background: "#000" } }>
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <Feed /> } />
        <Route path="channel/:id" element={ <ChannelDetail /> } />
        <Route path="video/:id" element={ <VideoDetails /> } />
        <Route path="/search/:searchTerm" element={ <SearchFeed /> } />
      </Routes>
    </Box>
    Loading...</BrowserRouter>
)


export default App