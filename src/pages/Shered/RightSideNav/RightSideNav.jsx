import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, } from "react-icons/fa";
import kids1 from '../../../assets/kids-1.jpg'
import kids2 from '../../../assets/kids-2.jpg'
import kids3 from '../../../assets/kids-3.jpg'


const RightSideNav = () => {
    return (
        <div className="border-2 rounded-lg">
           <div className="space-y-3 p-4 mb-6">
           <h2 className="text-3xl ">Login With</h2>
           <button className="btn btn-outline w-full"><FaGoogle></FaGoogle> Google</button>
           <button className="btn btn-outline w-full"><FaGithub></FaGithub> Google</button>
           </div>
           {/* Find us */}
           <div className=" p-4 mb-6 ">
           <h2 className="text-3xl ">Find Us On</h2>
           <a href="" className="flex items-center border gap-2  rounded-t-lg p-4"><FaFacebook></FaFacebook> Facebook</a>
           <a href="" className="flex items-center border-x gap-2 p-4 "><FaTwitter></FaTwitter> Twitter</a>
           <a href="" className="flex items-center border gap-2 p-4 rounded-b-lg"><FaInstagram></FaInstagram>Instagram</a>
           </div>
           {/* Q-zone */}
           <div className=" p-4 mb-6 space-y-3 bg-slate-200">
           <h2 className="text-3xl ">Q-Zone</h2>
           <img className="mt-4 rounded-lg" src={kids1} alt="" />
           <img className="mt-4 rounded-lg" src={kids2} alt="" />
           <img className="mt-4 rounded-lg" src={kids3} alt="" />
           </div>
        </div>
    );
};

export default RightSideNav;