// import React, { useState, useEffect} from 'react';
// import { UserCard } from '../components/UserCard';

// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import classNames from 'classnames/bind';
// import { ITEMS_PER_PAGE } from '../components/utils/constants';
// // import ( ITEMS_PER_PAGE)



// //page map
// const range = (start, end)=>{
//   return [...Array(end).keys()].map(el=>el + start);
// }
// //pagination component
// const PaginationItem = ({page, currentPage, onPageChange})=>{
//   const liClasses = classNames({
//     'page-item': true,
//     active: page === currentPage
//   })
//   return(
//     <li className={liClasses} onClick={() => onPageChange(page)}>
//       <span className='page-link'>{page}</span>
//     </li>
//   )
// }

// const Home =({currentPage, total, limit, onPageChange, userFilteredList, setUserFilteredList, handleClick})=>{
//   function handleChange(e) {
//     const value = e.target.value;
//     const regex = new RegExp(value, 'gi');
//     const filtered = userList.filter((user) => {
//       return user.name.match(regex);
//     });
//     setUserFilteredList(filtered);
//     // console.log(UserFilteredList)
//   }

//   //page math
//   const pageCount = Math.ceil(total / limit);
//   const pages = range(1, pageCount);
//   console.log("pageCount", pageCount, pages);//app route pageCount is 1000/20= 50
//   console.log(ITEMS_PER_PAGE);

//   return (
//     <div data-testid="app">
//       <InputGroup onChange={handleChange} className="mb-3 w-50 mx-auto">
//       <InputGroup.Text id="basic-addon1">Search Disney Characters:</InputGroup.Text>
//         <Form.Control
//           placeholder="Search"
//           aria-label="search"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>
//       <Container>
//         <Row md={4}>
//           {userFilteredList.map((user, idx) => (
//             <Col key={idx} className="mt-4" md="4" >
//               <UserCard
//                 userFilteredList={userFilteredList}
//                 key={idx}
//                 name={user.name}
//                 url={user.url}
//                 id={user._id}
//               />
//             </Col>
//           ))}
//         </Row>
//         {/* <Footer page={page} setPage={setPage}/> */}
//         <ul className='paginationItem'>
//             {pages.map((page)=>(
//               <PaginationItem
//               page={page}
//               key={page}
//               currentPage={currentPage}
//               onPageChange={onPageChange}
//               // onClick={()=>handleClick(page)}
//               />
//             ))}
//         </ul>
//         hello
//       </Container>
//     </div>
//   );
// }

// export { Home };
///////////////////////////////
import React, { useState, useEffect} from 'react';
import { UserCard } from '../components/UserCard';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classNames from 'classnames/bind';
import { ITEMS_PER_PAGE } from '../components/utils/constants';
// import ( ITEMS_PER_PAGE)



//page map
const range = (start, end)=>{
  return [...Array(end).keys()].map(el=>el + start);
}
//pagination component
const PaginationItem = ({page, currentPage, onPageChange})=>{
  const liClasses = classNames({
    'page-item': true,
    active: page === currentPage
  })
  return(
    <li className={liClasses} onClick={() => onPageChange(page)}>
      <span className='page-link'>{page}</span>
    </li>
  )
}

const Home =({currentPage, total, limit, onPageChange, userFilteredList, setUserFilteredList, handleClick})=>{
  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, 'gi');
    const filtered = userList.filter((user) => {
      return user.name.match(regex);
    });
    setUserFilteredList(filtered);
    // console.log(UserFilteredList)
  }

  //page math
  const pageCount = Math.ceil(total / limit);
  const pages = range(1, pageCount);
  console.log("pageCount", pageCount, pages);//app route pageCount is 1000/20= 50
  console.log(ITEMS_PER_PAGE);

  return (
    <div data-testid="app">
      <InputGroup onChange={handleChange} className="mb-3 w-50 mx-auto">
      <InputGroup.Text id="basic-addon1">Search Disney Characters:</InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Container>
        <Row md={4}>
          {userFilteredList.map((user, idx) => (
            <Col key={idx} className="mt-4" md="4" >
              <UserCard
                userFilteredList={userFilteredList}
                key={idx}
                name={user.name}
                url={user.url}
                id={user._id}
              />
            </Col>
          ))}
        </Row>
        {/* <Footer page={page} setPage={setPage}/> */}
        <ul className='paginationItem'>
            {pages.map((page)=>(
              <PaginationItem
              page={page}
              key={page}
              currentPage={currentPage}
              onPageChange={onPageChange}
              // onClick={()=>handleClick(page)}
              />
            ))}
        </ul>
        hello
      </Container>
    </div>
  );
}

export { Home };