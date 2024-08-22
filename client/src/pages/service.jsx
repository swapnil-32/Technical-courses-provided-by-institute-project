import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';    //along with importing toast in above line we also need to import this css otherwise toast is visible anywhere with improper styling
import { NavLink } from "react-router-dom";
export const Service = () => {
  const { services } = useAuth();
  const {isLogedIn}=useAuth()
  const {userid}=useAuth()
  const {authorizationToken}=useAuth()
//   const handlesubmit = async(service) => {
//     console.log(service.service)
//     console.log(user)
//     console.log(service._id)
//     if (isLogedIn) {
//       if (window.confirm(`Are you sure you want to enroll in ${service.service}?`)) {
//         // alert('Enrolled successfully!');
//         toast.success("Enrolled successfully!")
//       }
//     } else {
//       window.location.href = '/login'; // Adjust the login URL according to your routing setup
//     }
//   };

const handlesubmit = async ( service) => {
    //     console.log(service.service)
    console.log(userid,"kjhgj")
    // console.log(service._id)
    if (isLogedIn) {
      if (window.confirm(`Are you sure you want to enroll in ${service.service}?`)) {
        try {
          const response = await fetch("http://localhost:3000/api/auth/enroll", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: authorizationToken,
            },
            body: JSON.stringify({ serviceId:service._id, userId:userid }),
          });

          if (response.ok) {
            const data = await response.json();
            toast.success(data.msg);
          } else {
            console.log(response)
            toast.error("Failed to enroll");
          }
        } catch (error) {
            console.log(error)
          toast.error(error);
        }
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <>
      {/* <Serv/> */}
      <section className="section_services">
        <div className="container2">
          <h1 className="main_heading">Services</h1>
          <button onClick={() => window.location.href ='/my-courses'} className="my_courses_button">
            My Courses
          </button>
        </div>

        <div className="container3">
          {services.map((currelement, idx) => {
            //services is array of documents(object) of service database see in auth.jsx file
            const {_id, price, provider, service, description,image } = currelement; //we destruct the currelement object

            return (
            //   <div className="card">
            //     <div className="card_img">
            //       <img
            //         src="/images/service.jpeg"
            //         alt="service info"
            //         width="250"
            //       />
            //     </div>
            //     <div className="card_details">
            //       <h2>{service}</h2>
            //       <p>{description}</p>
            //       <div className="grid grid-two-cols">
            //         <p>{provider}</p>
            //         <p>{price}</p>
            //       </div>
            //     </div>
            //   </div>
            <div className="card" key={idx}>
            <div className="card_img">
              <img
                src={`/images/${image}.jpeg`}
                alt="service info"
                width="250"
              />
            </div>
            <div className="card_details">
              <h2>{service}</h2>
              {/* <div className="des"> */}
              <p>{description}</p>
              {/* </div> */}
              {/* <div className="provider">
                <p>{provider}</p>
              </div> */}
              <button className="enroll_button" onClick={()=>handlesubmit({_id,service})}>
                Enroll - &#8377;   <span>{price}</span> free
              </button>
            </div>
          </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
// export default Service;