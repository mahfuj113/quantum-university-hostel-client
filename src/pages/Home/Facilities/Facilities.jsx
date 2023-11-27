const Facilities = () => {
  return (
    <div>
      <div className="text-center my-20 space-y-4">
        <h1 className="text-3xl font-bold">Facilities</h1>
        <p className="text-lg">What we offer for free</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        <div>
          <img src="https://i.ibb.co/SP83XFj/tea-Coffee.jpg" alt="" />
          <h1 className="text-lg">Tea & Coffee</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/LYtHNGr/washing-Machine.jpg" alt="" />
          <h1 className="text-lg">Washing</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/pL9hdNz/rsz-download-3.png" alt="" />
          <h1 className="text-lg">Iron</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/JpjHzJ7/rsz-1086567.png" alt="" />
          <h1 className="text-lg">Lockers</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/LDyn9jr/wifi.png" alt="" />
          <h1 className="text-lg">Free Wifi</h1>
        </div>
        <div>
          <img src="https://i.ibb.co/4JmzDHX/rsz-1170688.png" alt="" />
          <h1 className="text-lg">TV</h1>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
