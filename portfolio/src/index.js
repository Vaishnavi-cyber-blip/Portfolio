import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"

// export default function Home({blogs}) {
//   console.log(blogs)
//   return(
//     <h1>hiii</h1>
  

    
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
);

// export async function getServerSideProps(context){
//   const client = createClient({
//     projectId: "f1wmyw0g",
//     dataset: "production",
//     useCdn: true

//   });

//   const query = `*[_type == "blog"]`;
//   const blogs = await client.fetch(query);
//   return{
//     props: {
//       blogs
//     }
//   }
// }

