import { ImEyePlus, ImPlus } from "react-icons/im";
import AddItems from "../../assets/AddItems.png";
import BdBooks from "../../assets/bd-books-warehouse.png";
import HomePage from "../../assets/Home-Page.png";
import ManageInventories from "../../assets/ManageInventories.png";
import MyItems from "../../assets/MyItems.png";
import Blogs from "../../assets/warehouseBlogs.png";
import DetailsNav from "../../Components/DetailsNav";

const BooksWarehouse = () => {
  return (
    <section className=" bg-primary h-full pb-10">
      <DetailsNav />
      <div className="pt-24 max-w-7xl mx-auto flex flex-col justify-center items-center gap-10">
        {/* Project Details */}
        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={BdBooks} alt="CaliphTools" />
          </figure>
          <div className="card-body">
            <h2 className="text-center py-5 text-3xl md:text-4xl font-bold">BD Books Warehouse</h2>
            <p>
              This is a warehouse website. Here is the information about product
              storage accounting and product management.
            </p>
            
            <div className="grid  sm:flex justify-center items-center my-10 gap-3">
              {" "}
              <a
                href="https://bd-books-warehouse.web.app/"
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
                href="https://github.com/shahriyarhosen/bd-books-warehouse"
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
                href="https://github.com/shahriyarhosen/bd-books-warehouse-server"
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
                  Firebase
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React firebase hooks
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React hook form
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React bootstrap
                </button>
                <button className="btn btn-xs bg-white text-secondary hover:bg-info hover:text-white duration-300 border-info">
                  React icons
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div className="card-body">
            <h2 className="card-title text-3xl">Home Page</h2>
            <div className="flex flex-col gap-2">
              <p>
                First there are banners with pictures of several warehouses and
                buttons for product management.
              </p>
              <p>
                This is followed by the TOP CATEGORIES section which lists the
                best selling CATEGORIES categories.
              </p>

              <p>
                After that there are OUR TOP LISTING BOOKS of the warehouse.
              </p>

              <p>
                Then there's TOP PUBLISHER, which lists the best-selling
                publications.
              </p>
            </div>
          </div>
          <figure>
            <img src={HomePage} alt="CaliphTools" />
          </figure>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={ManageInventories} alt="CaliphTools" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">Manage Inventories</h2>
            <p>
              Manage Inventories This page has a list for managing all products
              and there is a button to delete from this list where clicking will
              delete the product and above all there is another button Add Items
              where clicking can take you to Add Items page and add new
              products.
            </p>
          </div>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div className="card-body">
            <h2 className="card-title text-3xl">Add Items</h2>
            <p>
              If you submit all the product information on the Add Items page,
              new product will be added
            </p>
          </div>
          <figure>
            <img src={AddItems} alt="CaliphTools" />
          </figure>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <figure>
            <img src={MyItems} alt="CaliphTools" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">My Items</h2>
            <p>
              On the My Items page only the logged in user will show a list of
              all the products added and will be able to delete specific
              products.
            </p>
          </div>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto  grid grid-cols-1 lg:grid-cols-2">
          <div className="card-body">
            <h2 className="card-title text-3xl flex">Blogs</h2>
            <p>The following questions are answered on the Blogs page</p>
            <p>1_ Difference between javascript and nodejs</p>
            <p>2_ When should you use nodejs and when should you use MongoDB</p>
            <p>3_ Differences between SQL and NoSQL databases.</p>
            <p>4_ What is the purpose of JWT and how does it work</p>
          </div>
          <figure>
            <img src={Blogs} alt="CaliphTools" />
          </figure>
        </div>

        <div className="card lg:card-side bg-black bg-opacity-40 text-white mx-5 xl:mx-auto py-5">
          <div className="card-body text-lg">
            <h2 className="text-center mb-6 text-4xl">More that has been used</h2>
            <p>
              The basic version of the JWT token is used for email /
              password-based authentication. After logging in, a JWT token is
              created and stored on the client-side and for my item page, the
              token is sent with the call and verified to the user. 401 and 403
              have been applied. And .env files have been added
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksWarehouse;
