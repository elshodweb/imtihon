import Login from '../Login/Login';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import List from '../List/List';
import Blog from '../Blog/Blog';
import ListPost from '../ListPost/ListPost';
import SinglePost from '../SinglePost/SinglePost';
function App() {
   return (
      <div className="App">
         <Routes>
            <Route index element={<Login />} />
            <Route path='/' element={<Blog />}>
               <Route path='posts' element={<List />}>
                  <Route path={":category"} element={<ListPost />} />
               </Route>
               <Route path='posts/:category/:id' element={<SinglePost />} >
                  <Route index element={<ListPost />} />
               </Route>
            </Route>
         </Routes>
      </div>
   );
}
export default App;
