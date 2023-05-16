
const Dashboard = () => {
  return (
    <div>
    <div className="text-xl w-screen justify bg-white mt-20">
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
  );
};

export default Dashboard;
