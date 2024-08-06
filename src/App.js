
import {  
   createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
 } from "react-router-dom";
import Layout from "./layouts/Layouts";

// PAGES
import {
  Home, 
  ErrorPage, 
  PostDetail,
  PostCategories
} from "./pages/index";
 //Page from component 
 import { PostAuthor } from "./components/index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element: <Home />},
      {path: "posts/:id", element: <PostDetail/>},
      {path: "post", element: <PostDetail/>},
      {path: "profile", element: <PostDetail/>},
      {path: "authors", element: <PostDetail/>},
      {path: "logout", element: <PostDetail/>},
      {path: "post/categories/:category", element: <PostCategories/>},
      {path: "posts/user/:id", element: <PostAuthor />}
    ]
  }
])
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
