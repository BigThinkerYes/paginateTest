import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

// function Footer({page, setPage, totalPosts, postPerPage}) {

//     //  //modified
//      const setCurrentPage = [];
//      for(let i = 1; i <=Math.ceil(totalPosts / postPerPage); i++){
//         setCurrentPage.push(i);
//     }
    
//     return (
//         <>
//             <nav aria-label="Page navigation" >
//                 <ul class="pagination">
//                     <li class="page-item"><button onClick={(e)=>{setPage(setCurrentPage.page-=1) 
//                     console.log(page)
//                     e.preventDefault()}}>Previous</button></li>
//                     <li class="page-item"><button onClick={(e)=>{setPage(setCurrentPage.page+=1)
//                     console.log(page)
//                     e.preventDefault()}}>Next</button></li>
//                 </ul>
//             </nav>
//         </>
//     )
// }

// export { Footer };
const Footer = ({page, total, limit, onPageChange})=>{
    const pagesCount = Math.ceil(total / limit); //#pages
    console.log("pagesCount", pagesCount);
    return<div>hiThere</div>;
}
export {Footer};