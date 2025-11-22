import { useState } from "react";
import { Icons } from "../images/Icons";
import profileImg from "../images/profile-2.png";

const Header = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim()); // 👈 ارسال شهر به App
      setCity("");
    }
  };

  return (
    <header>
      {/* profile + icons block */}
      <div className="profile">
        <div className="flex items-center gap-2 md:gap-4">
          {/* Profile image */}
          <img src={profileImg} alt="Profile Image" className="profile-img" />

          {/* Name only on desktop */}
          <div className="flex flex-col leading-tight">
            <span className="profile-hi">Hello,</span>
            <p className="profile-name">Farshad Bahari</p>
          </div>
        </div>

        {/* Icons – on mobile they sit next to profile, on desktop they are in search section */}
        <div className="flex items-center gap-2 sm:hidden">
          <Icons.Cleandar className="icons" />
          <Icons.Comment className="icons" />
          <Icons.Bell className="icons" />
        </div>
      </div>

      {/* search + icons for desktop */}
      <section className="search-icons">
        {/* Search */}
        <form onSubmit={handleSearch} className="search-input group">
          <button type="submit">
            <Icons.Search className="icon-search cursor-pointer" />
          </button>
          <input
            type="search"
            value={city}
            placeholder="Search Here ..."
            className="seacrh-input"
            onChange={(e) => setCity(e.target.value)}
            autoFocus
          />
        </form>

        {/* icons only on desktop */}
        <div className="hidden items-center gap-2 sm:flex">
          <Icons.Cleandar className="icons" />
          <Icons.Comment className="icons" />
          <Icons.Bell className="icons" />
        </div>
      </section>
    </header>
  );
};

export default Header;
