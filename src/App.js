// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Navigation } from '../src/components/Navigation';
// import { Home } from './routes/Home';
// import { UserDetails } from './routes/UserDetails';



// function App () {

//     const [userList, setUserList] = useState([]);
//     const [userFilteredList, setUserFilteredList] = useState([]);

//     // const [page, setPage] = useState(1);
//     const [page, setCurrentPage] = useState(1);
//     // const [totalPages, setTotalPages] = useState(0);
    




    
//     const disneyCharApi = `https://api.disneyapi.dev/characters?page=${page}`;

//     useEffect(() => {
//         const fetchData = async () => {
//         const res = await fetch(disneyCharApi);
//         const data = await res.json();
//         setUserList(data.data);
//         setUserFilteredList(data.data);
//         // console.log(typeof cards);
//       }
//         fetchData()
//           .catch(console.error);
//         }, []);

        
//     return (
//         <>
//             <BrowserRouter>
//                 <div data-testid="app">
//                     <Navigation />
//                     <Routes>
//                         <Route path="/" element={<Home 
//                         page={page}
//                         total={1000}
//                         limit={20}
//                         onPageChange={(page)=>setCurrentPage(page)}
//                         userList={userList} userFilteredList={userFilteredList} setUserFilteredList={setUserFilteredList}/>} />
//                         {/* <Route path="/" element={<Home page={currentPosts} setPage={setPage} userList={userList} userFilteredList={userFilteredList} setUserFilteredList={setUserFilteredList}/>} /> */}
//                         <Route path="/characters/:_id" element={<UserDetails userFilteredList={userFilteredList}/>} />
//                         {/* <Route path="/friendrequest" element={<Friends />} /> */}
//                     </Routes>
//                 </div>
//             </BrowserRouter>
//         </>
//     )
// }

// export { App };

///////////////
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '../src/components/Navigation';
import { Home } from './routes/Home';
import { UserDetails } from './routes/UserDetails';



function App () {

    const [userList, setUserList] = useState([]);
    const [userFilteredList, setUserFilteredList] = useState([]);

    // const [page, setPage] = useState(1);
    const [page, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);
    




    
    const disneyCharApi = `https://api.disneyapi.dev/characters?page=${page}`;

    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(disneyCharApi);
        const data = await res.json();
        setUserList(data.data);
        setUserFilteredList(data.data);
        // console.log(typeof cards);
      }
        fetchData()
          .catch(console.error);
        }, []);

        
    return (
        <>
            <BrowserRouter>
                <div data-testid="app">
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<Home 
                        page={page}
                        total={1000}
                        limit={20}
                        onPageChange={(page)=>setCurrentPage(page)}
                        userList={userList} userFilteredList={userFilteredList} setUserFilteredList={setUserFilteredList}/>} />
                        {/* <Route path="/" element={<Home page={currentPosts} setPage={setPage} userList={userList} userFilteredList={userFilteredList} setUserFilteredList={setUserFilteredList}/>} /> */}
                        <Route path="/characters/:_id" element={<UserDetails userFilteredList={userFilteredList}/>} />
                        {/* <Route path="/friendrequest" element={<Friends />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export { App };