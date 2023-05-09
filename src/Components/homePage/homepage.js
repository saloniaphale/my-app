import React, { useState } from "react";
import "./HomePage.css";
import SearchBar from 'material-ui-search-bar';
import SearchIcon from '@material-ui/icons/Search';

function HomePage() {
const [isSearchActive, setIsSearchActive] = useState(false);
const [searchValue, setSearchValue] = useState('');

const handleSearchInputChange = (value) => {
setSearchValue(value);
};

const handleSearchButtonClick = () => {
setIsSearchActive(true);
};

  // Dummy data for the table
  const tableData = [
    { id: 2, recommendation: "Song B", artist: "Artist B", spotifyUrl: "https://open.spotify.com/track/0iXLwnLmLwn9y54JtBTNxY?si=c2874e02dfe34948" },
    { id: 1, recommendation: "Song A", artist: "Artist A", spotifyUrl: "https://open.spotify.com/track/2PbCyvi2YtrQA2AD9uOwyH?si=9f9800c8d3b14a72" },
    { id: 3, recommendation: "Song C", artist: "Artist C", spotifyUrl: "https://open.spotify.com/track/4T3VAoUDvCJkX5OSYXnng0?si=dbde2d466ac4421e" },
    { id: 4, recommendation: "Song D", artist: "Artist D", spotifyUrl: "https://open.spotify.com/track/3CYH422oy1cZNoo0GTG1TK?si=25f78772a0b04182" },
    { id: 5, recommendation: "Song E", artist: "Artist E", spotifyUrl: "https://open.spotify.com/track/3Kw7zkALCVxY4wmlnh2IWC?si=e7bf8069a85f4d06" },
    { id: 5, recommendation: "Song F", artist: "Artist F", spotifyUrl: "https://open.spotify.com/track/3Kw7zkALCVxY4wmlnh2IWC?si=e7bf8069a85f4d07" }
  ];

  return (
    <>
      <div className="wrapper">
        <h6>WELCOME TO Melodify.ai!</h6>
      </div>

      <div style={{
        position: 'absolute',
        top: isSearchActive ? '35%' : '50%', // adjust how far up the search bar goes here
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: 'top 0.6s ease-in-out' // added transition property - adjust time for how fast it moves up
      }}>
        <div style={{ 
          display: "flex",
          alignItems: "center"
        }}>
          <SearchBar
            placeholder="I want music for a coffee shop..."
            style={{
              height: "4rem",
              width: "40rem",
              margin: "0.5rem",
              position: "relative"
            }}
            value={searchValue}
            onChange={handleSearchInputChange}
          />
          <button 
            onClick={handleSearchButtonClick} 
            style={{ 
              backgroundColor: '#8E8E8E', 
              border: 'none', 
              padding: '1rem',
          
              // height: "100%",
              // width: "4rem",
              // border: "none",
              // background: "transparent",
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center"
            }}
          >
            <SearchIcon style={{ 
              color: '#FFF', 
              fontSize: '1.5rem' 
            }} />
          </button>
        </div>
      </div>

      {isSearchActive && (
  <div style={{ 
    height: '420px', // Set a fixed height
    overflowY: 'scroll',
    marginTop: '20rem'
  }}>
    <table style={{ 
      width: "80%", 
      margin: "0 auto", 
      borderCollapse: "collapse",
      transition: "opacity 10.0s ease-in-out" 
    }}>
      <thead>
        <tr>
          <th style={{ backgroundColor: "#8E8E8E", color: "#FFF", padding: "1rem" }}>Music Recommendation</th>
          <th style={{ backgroundColor: "#8E8E8E", color: "#FFF", padding: "1rem" }}>Artist</th>
          <th style={{ backgroundColor: "#8E8E8E", color: "#FFF", padding: "1rem" }}>Spotify URL</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(row => (
          <tr key={row.id}>
            <td style={{ backgroundColor: "#E6FFE9", padding: "1rem" }}>{row.recommendation}</td>
            <td style={{ backgroundColor: "#E6FFE9", padding: "1rem" }}>{row.artist}</td>
            <td style={{ backgroundColor: "#E6FFE9", padding: "1rem"}}>
              <a href={row.spotifyUrl} target="_blank" rel="noreferrer" style={{ fontSize: '0.9em' }}>{row.spotifyUrl}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)} 


    </>
  );
}

export default HomePage;


// import React, { useState } from "react";
// import "./HomePage.css";
// import SearchBar from 'material-ui-search-bar';
// import SearchIcon from '@material-ui/icons/Search';

// function HomePage() {
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [searchValue, setSearchValue] = useState('');

//   const handleSearchInputChange = (value) => {
//     setSearchValue(value);
//   };

//   const handleSearchButtonClick = () => {
//     setIsSearchActive(true);
//   };

//   // Dummy data for the table
//   const tableData = [
//     { id: 2, recommendation: "Song B", /* artist: "Artist B",*/ spotifyUrl: "https://open.spotify.com/track/0iXLwnLmLwn9y54JtBTNxY?si=c2874e02dfe34948" },
//     { id: 1, recommendation: "Song A", /* artist: "Artist A",*/ spotifyUrl: "https://open.spotify.com/track/2PbCyvi2YtrQA2AD9uOwyH?si=9f9800c8d3b14a72" },
//     { id: 3, recommendation: "Song C", /* artist: "Artist C",*/ spotifyUrl: "https://open.spotify.com/track/4T3VAoUDvCJkX5OSYXnng0?si=dbde2d466ac4421e" },
//     { id: 4, recommendation: "Song D", /* artist: "Artist D",*/ spotifyUrl: "https://open.spotify.com/track/3CYH422oy1cZNoo0GTG1TK?si=25f78772a0b04182" },
//     { id: 5, recommendation: "Song E", /* artist: "Artist E",*/ spotifyUrl: "https://open.spotify.com/track/3Kw7zkALCVxY4wmlnh2IWC?si=e7bf8069a85f4d06" }
//   ];

//   return (
//     <>
//       <div className="wrapper">
//         <h6>WELCOME TO Melodify.ai!</h6>
//       </div>

//       <div style={{
//         position: 'absolute',
//         top: isSearchActive ? '35%' : '50%', // adjust how far up the search bar goes here
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         transition: 'top 0.6s ease-in-out' // added transition property - adjust time for how fast it moves up
//       }}>
//         <div style={{ 
//           display: "flex",
//           alignItems: "center"
//         }}>
//           <SearchBar
//             placeholder="I want music for a coffee shop..."
//             style={{
//               height: "4rem",
//               width: "40rem",
//               margin: "0.5rem",
//               position: "relative"
//             }}
//             value={searchValue}
//             onChange={handleSearchInputChange}
//           />
//           <button 
//             onClick={handleSearchButtonClick} 
//             style={{ 
//               backgroundColor: '#80B280', 
//               border: 'none', 
//               padding: '1rem',
          
//               // height: "100%",
//               // width: "4rem",
//               // border: "none",
//               // background: "transparent",
//               // display: "flex",
//               // justifyContent: "center",
//               // alignItems: "center"
//             }}
//           >
//            <SearchIcon style={{ 
//               color: '#FFF', 
//               fontSize: '1.5rem' 
//             }} />
//           </button>
//         </div>
//       </div>

//       {isSearchActive && (
//         <div style={{ 
//           marginTop: '20rem'
//         }}>
//           <table style={{ 
//             width: "80%", 
//             margin: "0 auto", 
//             borderCollapse: "collapse",
//             transition: "opacity 10.0s ease-in-out"
//           }}>
//             <thead>
//               <tr>
//                 <th style={{ backgroundColor: "#80B280", color: "#FFF", padding: "1rem" }}>Music Recommendation</th>
//                 {/* <th style={{ backgroundColor: "#80B280", color: "#FFF", padding: "1rem" }}>Artist</th> */}
//                 <th style={{ backgroundColor: "#80B280", color: "#FFF", padding: "1rem" }}>Spotify URL</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map(row => (
//                 <tr key={row.id}>
//                   <td style={{ backgroundColor: "#E6FFE9", padding: "1rem" }}>{row.recommendation}</td>
//                   {/* <td style={{ backgroundColor: "#E6FFE9", padding: "1rem", width: "40%" }}>{row.artist}</td> */}
//                   {/* <td style={{ backgroundColor: "#E6FFE9", padding: "1rem", width: "40%" }}>{row.spotifyUrl}</td> */}
//                   <td style={{ backgroundColor: "#E6FFE9", padding: "1rem" }}>
//                     <a href={row.spotifyUrl} target="_blank" rel="noreferrer">{row.spotifyUrl}</a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </>
//   );
// }

// export default HomePage;