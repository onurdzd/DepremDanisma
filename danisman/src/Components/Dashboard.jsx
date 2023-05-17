const Dashboard = () => {
  return (
    <div className="flex flex-col gap-11 pt-5 h-screen w-screen ">
      <div className="text-xl   bg-white ">
        <nav className="flex justify-around ">
          <div className=" text-blue-300">
            <a href={"/"}>TARDE</a>
          </div>
          <div className=" text-red-300 ">
            <button>
              <a href={"/"}>Ana Sayfa</a>
            </button>
          </div>
        </nav>
      </div>
      <div className=" flex  justify-evenly">
        <div className=" text-red-300 ">
          <button>
            <a href={"/danisan"}>Danışan Ekle</a>
          </button>
        </div>
        <div className=" text-red-300 ">
          <button>
            <a href={"/danisman"}>Danışman Ekle</a>
          </button>
        </div>
        <div className=" text-red-300 ">
          <button>
            <a href={"/envanter"}>Envanter Ekle</a>
          </button>
        </div>
        <div className=" text-red-300 ">
          <button>
            <a href={"/bilgiguncelle"}>Bilgi Güncelle</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
