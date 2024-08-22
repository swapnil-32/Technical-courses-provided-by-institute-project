import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MyCourses = () => {
  const { userid, authorizationToken } = useAuth();
  const [enrolledcourses, setEnrolledCourses] = useState([]);
  const { services } = useAuth();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        // console.log(userid)
        const response = await fetch(`http://localhost:3000/api/auth/enrolledcourses/${userid}`, {
          method: 'GET',
          headers: {
            Authorization: authorizationToken,
          },
        });
// console.log(response)
        if (response.ok) {
          const data = await response.json();
          // console.log(data)
          const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

          // Fetch course details with a delay
          const fetchCourseDetails = async (courseId, delayMs) => {
            await delay(delayMs);
            const courseResponse = await fetch(`http://localhost:3000/api/data/service/${courseId}`, {
              method: 'GET',
              headers: {
                Authorization: authorizationToken,
              },
            });
            return courseResponse.ok ? await courseResponse.json() : null;
          };

          const courseDetailsPromises = data.enrolledCourses.map((courseId, index) =>
            fetchCourseDetails(courseId, index * 200) // 200ms delay between each request
          );
          
          const coursesDetails = await Promise.all(courseDetailsPromises);
          const validCoursesDetails = coursesDetails.filter(course => course !== null); // Filter out any null responses
          setEnrolledCourses(validCoursesDetails.map(course => course.msg[0]));
          console.log(enrolledcourses)
          // const data = await response.json();
          // console.log("hkjh",data.enrolledCourses)
          // setEnrolledCourses(data.enrolledCourses);
        } 
        // else {     //this else part is imp but when we use it ,even if if part is true and fetching correct data but else part toast error is also giving so we comment it 
        //   toast.error('Failed to fetch enrolled courses');
        // }
      } catch (error) {
        console.error("jhkh",error);
        toast.error('Failed to fetch enrolled courses');
      }
    };

    fetchEnrolledCourses();
  }, [userid, authorizationToken]);

  return (
    <div className="container4">
      <h1 className="main_heading">My Courses</h1>
      {/* <div className="grid grid-three-cols"> */}
      <div className="container3">
        {enrolledcourses.map((course, idx) => (
          <div className="card" key={idx}>
            <div className="card_img">
              <img src={`/images/${course.image}.jpeg`} alt="course info" width="250" />
            </div>
            <div className="card_details">
              <h2>{course.service}</h2>
              <p>{course.description}</p>
              {/* <div className="provider">
                <p>{course.provider}</p>
              </div> */}
              <button className="enrolled_button">Enrolled</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
