import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./Components/exportComponents";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/youtube-g" element={<Feed/>}/>
        <Route path="/youtube-g/*" element={<Feed/>}/>
        <Route path="/youtube-g/video/:id" element={<VideoDetail/>}/>
        <Route path="/youtube-g/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/youtube-g/search/:searchTerm" element={<SearchFeed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;