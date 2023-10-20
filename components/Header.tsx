import Nav from "./Nav";

const Header = () => {
  return (
    <div className="py-4 border-b-2 border-[#ccc] lg:py-6 lg:border-none">
      <div className="container flex items-center justify-between">
        <Nav />
      </div>
    </div>
  );
};

export default Header;
