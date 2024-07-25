// import {useState, useEffect} from 'react'
// import Link from 'next/link';

// import { airtablemicrourl } from "../../constants/constant";
// const BlogCard = () => {
//       const [blogposts, setblogposts] = useState()
//        // This logic is only erxecute when the component is mounted
//        useEffect( async ()=>{
//            const res = await fetch(`${airtablemicrourl}/blog/Randbloglistng`, {
//                method: "POST"
//            });
//            const data = await res.json();
//            setblogposts(data)
           
//        }, []);
//         return (
//         <div className="blog-area ptb-20">
//             <div className="container">
//                 <div className="row">  
//               {    (blogposts)?              
//                   blogposts.map((post)=>{
//                       return <div key={post.id} className="col-lg-4 col-md-6">
//                         <div className="single-blog-post bg-fffbf5">
//                             <div className="post-image">
//                                <Link href={post.fields.BlogURLFK[0]}>
//                                     <a>
//                                         <img src={post.fields.BlogListingImage[0].url} alt="image" />
//                                     </a>
//                                 </Link> 
//                             </div>

//                             <div className="post-content">
//                                 <ul className="post-meta d-flex justify-content-between align-items-center">
//                                     <li>
//                                         <div className="post-author d-flex align-items-center">
//                                             <img src={post.fields.BlogListingAuthorIcon[0].url} className="rounded-circle" alt="image" />
//                                             <span>
//                                                 <span className="max-character-width-50">
//                                                     {post.fields.BlogListingAuthorName[0]}
//                                                 </span>
//                                                 <span className="max-character-width-50">
//                                                     {post.fields.BlogAuthorTitle[0]}
//                                                 </span> 
//                                             </span>
//                                         </div>
//                                     </li>
//                                     <li>
//                                         <i className='flaticon-calendar'></i> {post.fields.PublishedDate[0]}
//                                     </li>
//                                 </ul>
//                                 <h3 className="max-character-width-100">
//                                     <Link href={post.fields.BlogURLFK[0]}>
//                                         <a>{post.fields.BlogListingTitle[0]}</a>
//                                     </Link>
//                                 </h3>
//                             </div>
//                         </div>
//                     </div>  
//                   }):""}  
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default BlogCard;