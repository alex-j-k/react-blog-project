
import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

   const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>We have a problem... {error}  </div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!"  />}
            {blogs &&<Bloglist blogs={blogs.filter((blog)=>(blog.author === 'tim'))} title="Tims Blogs!"/> }
             

        </div>
     );
}
 
export default Home;

// import { useEffect, useState } from "react";
// import BlogList from "./BlogList";
// import useFetch from "./useFetch";

// const Home = () => {
//   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

//   return (
//     <div className="home">
//       { error && <div>{ error }</div> }
//       { isPending && <div>Loading...</div> }
//       { blogs && <BlogList blogs={blogs} /> }
//     </div>
//   );
// }
 
// export default Home;