
import {  
   createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route
 } from "react-router-dom";
import Layout from "./layouts/Layouts";

// PAGES
import {
  Home, 
  ErrorPage, 
  PostDetail,
  PostCategories,
  AuthorPosts,
  Authors,
  EditPost,
  DeletePost,
  CreatePost,
  Register,
  Login,
  Logout,
  Profile,
  Dashboard,
} from "./pages/index";
import UserProvider from "./context/userContext";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Newsletter from "./components/newsletter/Newsletter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProvider><Layout /></UserProvider> ,
    errorElement: <ErrorPage />,
    children: [
      {index:true, element: <Home />},
      {path: "posts/:id", element: <PostDetail/>},
      {path: "register", element: <Register />},
      {path: "login", element: <Login />},
      {path: "profile/:id", element: <Profile/>},
      {path: "authors", element: <Authors/>},
      {path: "create", element: <CreatePost/>},
      {path: "posts/categories/:category", element: <PostCategories/>},
      {path: "posts/users/:id", element: <AuthorPosts/>},
      {path: "myposts/:id", element: <Dashboard/>},
      {path: "posts/:id/edit", element: <EditPost/>},
      {path: "posts/:id/delete", element: <DeletePost/>},
      {path: "logout", element: <Logout/>},
    ]
  }
])
function App() {
  return (
    <div className="App">
     <Newsletter/>
     <RouterProvider router={router} >
     <ScrollToTop />
     </RouterProvider>
    </div>
  );
}

export default App;
