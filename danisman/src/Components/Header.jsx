import Login from "./Login";

const Header = () => {
  return (
    <>
      <div className="text-xl w-screen bg-white">
        <nav className="flex justify-around ">
          <div className=" text-blue-300">
            <a href="#">TARDE</a>
          </div>
          <div className=" text-red-300">
            <Login></Login>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
