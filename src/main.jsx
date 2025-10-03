import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { DataProvider } from "./DataContext.jsx";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <StrictMode>
    <GoogleOAuthProvider clientId="121049769692-nn3ol69qvjl6chr3807t2nedjpc37fm2.apps.googleusercontent.com">
   
  <DataProvider>
    <App />
  </DataProvider>


    </GoogleOAuthProvider>;
  </StrictMode>,
)


