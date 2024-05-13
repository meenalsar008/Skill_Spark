// import React, { useEffect, useState } from 'react';
// import ClassCard from './ClassCard';
// import ClassesEnrolled from './models/ClassesEnrolled'; // Import the Mongoose model

// const Dashboard_user = ({ name }) => {
//   const [enrolledClasses, setEnrolledClasses] = useState([]);

//   useEffect(() => {
//     // Fetch classes data from backend using Mongoose
//     const fetchClassesData = async () => {
//       try {
//         const response = await ClassesEnrolled.find({ emailid: name }).lean();
//         setEnrolledClasses(response);
//       } catch (error) {
//         console.error('Error fetching classes data:', error);
//       }
//     };

//     fetchClassesData();
//   }, [name]);

//   const currentDate = new Date();

//   const previousClasses = enrolledClasses.filter(classData => {
//     const classEndDate = new Date(classData.classesEndDate);
//     return classEndDate < currentDate;
//   });

//   const currentClasses = enrolledClasses.filter(classData => {
//     const classStartDate = new Date(classData.classesStartDate);
//     const classEndDate = new Date(classData.classesEndDate);
//     return classStartDate <= currentDate && currentDate <= classEndDate;
//   });

//   return (
//     <div className="dashboard">
//       <h2>Welcome, {name}!</h2>
//       <h3>Previous Classes</h3>
//       {previousClasses.length > 0 ? (
//         previousClasses.map(classData => (
//           <ClassCard
//             key={classData.classesEnrolledid}
//             className={classData.classesName}
//             classRating={classData.classesRating}
//             classStartDate={classData.classesStartDate}
//             classEndDate={classData.classesEndDate}
//           />
//         ))
//       ) : (
//         <p>No previous classes found.</p>
//       )}
//       <h3>Current Classes</h3>
//       {currentClasses.length > 0 ? (
//         currentClasses.map(classData => (
//           <ClassCard
//             key={classData.classesEnrolledid}
//             className={classData.classesName}
//             classRating={classData.classesRating}
//             classStartDate={classData.classesStartDate}
//             classEndDate={classData.classesEndDate}
//           />
//         ))
//       ) : (
//         <p>No current classes found.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard_user;

// import React, { useEffect, useState } from 'react';
// import ClassCard from '../User/Components/Classcard_enrolled';
// // import ClassesEnrolled from '../models/ClassesEnrolled'; // Import the Mongoose model

// const Dashboard_user = ({ emailID }) => {
//   const [userName, setUserName] = useState('');
//   const [enrolledClasses, setEnrolledClasses] = useState([]);

// //   useEffect(() => {
// //     // Fetch user data from backend using Mongoose
// //     const fetchUserData = async () => {
// //       try {
// //         const userResponse = await Users.findOne({ emailid: emailID }).lean();
// //         if (userResponse) {
// //           setUserName(userResponse.name);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching user data:', error);
// //       }
// //     };

// //     // Fetch classes data from backend using Mongoose
// //     const fetchClassesData = async () => {
// //       try {
// //         const classesResponse = await ClassesEnrolled.find({ emailid: emailID }).lean();
// //         setEnrolledClasses(classesResponse);
// //       } catch (error) {
// //         console.error('Error fetching classes data:', error);
// //       }
// //     };

// //     fetchUserData();
// //     fetchClassesData();
// //   }, [emailID]);

//   const currentDate = new Date();

//   const previousClasses = enrolledClasses.filter(classData => {
//     const classEndDate = new Date(classData.classesEndDate);
//     return classEndDate < currentDate;
//   });

//   const currentClasses = enrolledClasses.filter(classData => {
//     const classStartDate = new Date(classData.classesStartDate);
//     const classEndDate = new Date(classData.classesEndDate);
//     return classStartDate <= currentDate && currentDate <= classEndDate;
//   });

//   return (
//     <div className="dashboard">
//       <h2>Welcome, {userName}!</h2>
//       <h3>Previous Classes</h3>
//       {previousClasses.length > 0 ? (
//         previousClasses.map(classData => (
//           <ClassCard
//             key={classData.classesEnrolledid}
//             className={classData.classesName}
//             classRating={classData.classesRating}
//             classStartDate={classData.classesStartDate}
//             classEndDate={classData.classesEndDate}
//           />
//         ))
//       ) : (
//         <p>No previous classes found.</p>
//       )}
//       <h3>Current Classes</h3>
//       {currentClasses.length > 0 ? (
//         currentClasses.map(classData => (
//           <ClassCard
//             key={classData.classesEnrolledid}
//             className={classData.classesName}
//             classRating={classData.classesRating}
//             classStartDate={classData.classesStartDate}
//             classEndDate={classData.classesEndDate}
//           />
//         ))
//       ) : (
//         <p>No current classes found.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard_user;
import React, { useEffect, useState } from "react";
import ClassCard from "../User/Components/Classcard_enrolled";
import NavBar from "../MainPage/NavBar";
import "../User/Styles/Dashboard_user.css";
const Dashboard_user = ({ emailID }) => {
  const [userName, setUserName] = useState("John Doe");
  // const [enrolledClasses, setEnrolledClasses] = useState([]);
  const [enrolledClasses, setEnrolledClasses] = useState([
    {
      classesEnrolledid: "1",
      classesName: "Introduction to React",
      classesRating: 4.5,
      classesStartDate: "2022-03-01",
      classesEndDate: "2022-03-31",
    },
    {
      classesEnrolledid: "2",
      classesName: "Advanced React Techniques",
      classesRating: 4.8,
      classesStartDate: "2023-04-01",
      classesEndDate: "2023-05-30",
    },
    {
      classesEnrolledid: "3",
      classesName: "React Native Fundamentals",
      classesRating: 4.7,
      classesStartDate: "2023-06-01",
      classesEndDate: "2023-07-31",
    },
    {
      classesEnrolledid: "4",
      classesName: "React Redux Mastery",
      classesRating: 4.9,
      classesStartDate: "2022-06-01",
      classesEndDate: "2022-06-30",
    },
    {
      classesEnrolledid: "5",
      classesName: "Advanced React Patterns",
      classesRating: 4.8,
      classesStartDate: "2022-07-01",
      classesEndDate: "2022-07-31",
    },
  ]);

  const currentDate = new Date();

  const previousClasses = enrolledClasses.filter((classData) => {
    const classEndDate = new Date(classData.classesEndDate);
    return classEndDate < currentDate;
  });

  const ongoingClasses = enrolledClasses.filter((classData) => {
    const classStartDate = new Date(classData.classesStartDate);
    const classEndDate = new Date(classData.classesEndDate);
    return classStartDate <= currentDate && currentDate <= classEndDate;
  });

  const upcomingClasses = enrolledClasses.filter((classData) => {
    const classStartDate = new Date(classData.classesStartDate);
    return classStartDate > currentDate;
  });

  return (
    <div className="dashboard1">
      <NavBar />
      <div className="UserDetails">
        <h2 className="MainHeading">Welcome, Navin Sharma</h2>
      </div>
      <div>
        <h3 className="ClassStatus">Ongoing Classes</h3>
        {ongoingClasses.length > 0 ? (
          ongoingClasses.map((classData) => (
            <ClassCard
              key={classData.classesEnrolledid}
              className={classData.classesName}
              classRating={classData.classesRating}
              classStartDate={classData.classesStartDate}
              classEndDate={classData.classesEndDate}
            />
          ))
        ) : (
          <p className="NoMessage">No ongoing classes found.</p>
        )}

        <h3 className="ClassStatus">Upcoming Classes</h3>
        {upcomingClasses.length > 0 ? (
          upcomingClasses.map((classData) => (
            <ClassCard
              key={classData.classesEnrolledid}
              className={classData.classesName}
              classRating={classData.classesRating}
              classStartDate={classData.classesStartDate}
              classEndDate={classData.classesEndDate}
            />
          ))
        ) : (
          <p className="NoMessage">No upcoming classes found.</p>
        )}

        <h3 className="ClassStatus">Previous Classes</h3>
        {previousClasses.length > 0 ? (
          previousClasses.map((classData) => (
            <ClassCard
              key={classData.classesEnrolledid}
              className={classData.classesName}
              classRating={classData.classesRating}
              classStartDate={classData.classesStartDate}
              classEndDate={classData.classesEndDate}
            />
          ))
        ) : (
          <p className="NoMessage">No previous classes found.</p>
        )}
      </div>
      <footer id="footer">
                <div class="container">
                    <h3>Skill Spark</h3>
                    <p>
                        Experience the freedom of variety with Skill Spark
                    </p>
                    <div class="social-links">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                    <div class="copyright">
                        &copy; Copyright <strong><span style={ {color:'#ffb03b'}}>Skill Spark</span></strong>. All Rights Reserved
                    </div>
                </div>
            </footer>
    </div>
  );
};

export default Dashboard_user;
