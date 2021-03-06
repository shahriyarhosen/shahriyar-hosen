import { ImEyePlus, ImPlus } from "react-icons/im";
import Blogs from "../../assets/caliph-Blogs.png";
import CaliphHomePage from "../../assets/Caliph-Home-Page.png";
import CaliphTools from "../../assets/caliph-tools-manufacturer.png";
import Dashboard from "../../assets/Dashboard.png";
import DetailsNav from "../../Components/DetailsNav";

const ToolsManufacture = () => {
  return (
    <section className=" bg-primary h-full">
      <DetailsNav />
      <div className="pt-24 max-w-7xl mx-auto flex flex-col justify-center items-center gap-10">
        {/* Project Details */}
        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={CaliphTools} alt="CaliphTools" />
          </figure>
          <div className="card-body">
            <h2 className="text-center py-5 text-3xl md:text-4xl font-bold">Caliph Tools Manufacturer</h2>
            <p>
              This is a tools manufacturer's website. There are different types
              of user interfaces for general users and admin users.
            </p>

            <div className="grid  sm:flex justify-center items-center my-10 gap-3">
              {" "}
              <a
                href="https://caliph-tools-manufacturer.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3  flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                  Demo
                  <ImEyePlus className="ml-3 " />
                </button>
              </a>
              <span className="flex justify-center">
                <ImPlus />
              </span>
              <a
                href="https://github.com/shahriyarhosen/Caliph-Tools-Manufacturer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3  flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                  Client
                  <ImEyePlus className="ml-3" />
                </button>
              </a>
              <span className="flex justify-center">
                <ImPlus />
              </span>
              <a
                href="https://github.com/shahriyarhosen/Caliph-Tools-Manufacturer-server"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3  flex items-center hover:bg-pink-600 hover:border-pink-600 duration-200 ">
                  Server
                  <ImEyePlus className="ml-3" />
                </button>
              </a>
            </div>

            <div className="card-actions justify-center mt-5">
              <div className="flex flex-wrap items-center gap-1">
                <span>Technology Used: </span>

                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React JS
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React Router
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React Query
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Axios
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React Hook form
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Firebase
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Firebase Hooks
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Authentication
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Dotenv
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Tailwind CSS
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  daisy UI
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  Tailwind Elements
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  sweet alert
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div className="card-body">
            <h2 className="card-title text-3xl">Home Page</h2>
            <p>
              The homepage has a banner first. Then there is talk about Khalifa
              Tools and then there are Khalifa Tools. From where all clients can
              order. This is followed by a business summary of Khalifa Tools.
              Then it is said why order from Khalifa Tools. Then there are
              customer reviews & lasts Footer
            </p>
          </div>
          <figure>
            <img src={CaliphHomePage} alt="CaliphTools" />
          </figure>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={Dashboard} alt="CaliphTools" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Dashboard</h2>
            <p>
              Two types of users will see two types of interfaces in the
              dashboard. First let's talk about the general user interface. A
              typical user will see: his profile, a list of everything he has
              ordered, and a review section for adding reviews. Now let's say
              about admin user, when admin user login, you can see: his profile,
              all orders, can be set, can manage tools and can make someone
              admin.
            </p>
          </div>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div className="card-body">
            <h2 className="card-title text-3xl">Blogs</h2>
            <p>
              Six questions are answered in the Blogs section. Below are the
              questions:
            </p>

            <ul>
              <li>
                1_ How will you improve the performance of a React Application?
              </li>
              <li>
                2_ What are the different ways to manage a state in a React
                application?
              </li>
              <li>3_ How does prototypical inheritance work?</li>
              <li>
                4_ Why you do not set the state directly in React. For example,
                if you have const [products, setProducts] = useState([]). Why
                you do not set products = [...] instead, you use the setProducts
              </li>
              <li>
                5_ You have an array of products. Each product has a name,
                price, description, etc. How will you implement a search to find
                products by name?
              </li>
              <li>6_ What is a unit test? Why should write unit tests?</li>
            </ul>
          </div>
          <figure>
            <img src={Blogs} alt="CaliphTools" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ToolsManufacture;
