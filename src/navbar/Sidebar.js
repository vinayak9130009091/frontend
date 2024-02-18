import React, { useState, useEffect } from "react";
import "./sidebar.css";
import logo from "../img/logo.svg";
import { FaAngleLeft } from "react-icons/fa";
import "boxicons";
import "boxicons/css/boxicons.min.css";

import NewSidebar from "./NewSidebar";
import CardView from "../pages/CardView";
import SearchBar from "./SearchBar";
import CreateContact from "../pages/Contact";
import CreateAccount from "../pages/CreateAccount";
import SidebarData from "./SidebarData";

import { FaRegHeart } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { BiPieChartAlt } from "react-icons/bi";
import { GoBell } from "react-icons/go";
import { BiBarChartAlt2 } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

import { IoMdSettings } from "react-icons/io";

import { HiBars3 } from "react-icons/hi2";

import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Sidebar() {
  const [mainSidebar, setMainSidebar] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newsidebar, setNewSidebar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [accountform, setAccountForm] = useState(false);

  const handleSidebar = () => {
    setMainSidebar(!mainSidebar);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleNewSidebar = () => {
    setNewSidebar(!newsidebar);
  };
  const handleSearchbar = () => {
    setSearchbar(!searchbar);
  };
  const handleAddNewCompanyClick = () => {
    setIsFormOpen(!isFormOpen);
  };
  const handleFormClose = () => {
    setNewSidebar(false);
    setSearchbar(false);
  };
  const handleContactClose = () => {
    setIsFormOpen(false);
  };
  const handleActClose = () => {
    setAccountForm(false);
  };
  const handleAddAccount = () => {
    setAccountForm(!accountform);
  };

  //const { sidebarOpen, setSidebarOpen } = state;
  const [SidebarItems, setSidebarItems] = useState(SidebarData);
  //let dark = window.localStorage.getItem("dark");

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  const toggleSubmenu = (index) => {
    const updatedSidebarItems = [...SidebarItems];
    updatedSidebarItems[index].subNavOpen = !updatedSidebarItems[index].subNavOpen;
    setSidebarItems(updatedSidebarItems);
  };

  return (
    <>
      <div className="row">
        <div className="bars-btn">
          <HiBars3 onClick={handleSidebar} />
          <i className="bx bx-chevron-right toggle"></i>
        </div>

        <div className={` ${sidebarOpen ? "col-2 menu" : "col-1 menu"}`}>
          <div className={`sidebar ${sidebarOpen ? "" : "close"}`}>
            <header>
              <div className="image-text">
                <span className="image">
                  <img src={logo} alt="" />
                </span>
                <div className="text logo-text">
                  <span className="name">SNP</span>
                  {/* <span class="profession">Web developer</span> */}
                </div>
              </div>
            </header>
            <div className="toggle">
              <FaAngleLeft style={{ color: "white" }} onClick={toggleSidebar} />
            </div>

            {/* //todo sidebar map function */}
            <div className="menu-bar">
              <div className="menu">
                <ul className="menu-links">
                  {/* {SidebarItems.map((item, index) => (
                    <li className="nav-link" key={index}>
                      <a href="#">
                        {item.icon}
                        <span className="text nav-text">{item.title}</span>
                      </a>
                    </li>
                  ))} */}
                  {SidebarItems.map((item, index) => (
                    <li className="nav-link" key={index}>
                      <a href={item.path} onClick={() => item.subNav && toggleSubmenu(index)}>
                        <i className={"bx icon " + item.icon}></i>
                        <span className="text nav-text">{item.title}</span>
                        {item.subNav && <i className={`bx ${item.subNavOpen ? "bx-chevron-down" : "bx-chevron-right"} caret-icon`}></i>}
                      </a>
                      {item.subNav && item.subNavOpen && (
                        <ul className="submenu d-block">
                          {item.subNav.map((subItem, subIndex) => (
                            <li className="subnav-link" key={subIndex}>
                              <a href={subItem.path}>
                                <i className={"bx icon " + subItem.icon}></i>
                                <span className="text nav-text">{subItem.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* //todo sidebar map function */}
          </div>
        </div>

        <div className={` ${sidebarOpen ? "col-10 menu2" : "col-11 menu2close"}`}>
          <div className="headers col-12" style={{ marginLeft: "15px", height: "40px" }}>
            <div className="btns-grp ">
              <button className="nbtn col-2" onClick={handleNewSidebar}>
                New
              </button>
              <button className="sbtn col-2" onClick={handleSearchbar}>
                <IoSearch className="bicon" style={{ marginTop: "4px" }} />
              </button>
            </div>
          </div>
          {/* //todo Card view  */}
          <CardView />
          {/* //todo Card view  */}
        </div>

        {/* onclick new button new sidebar is open */}
        <div className={`sidebar3 col-2  ${newsidebar ? "open" : ""}`}>
          <NewSidebar account={handleAddAccount} formclose={handleFormClose} contact={handleAddNewCompanyClick} />
        </div>
        {/* onclick new button new sidebar is open */}

        {/*new search bar  */}
        <div className={`search-side col-2 ${searchbar ? "open" : ""}`}>
          <SearchBar searchbar formclose={handleSearchbar} />
        </div>
        {/*new search bar  */}

        {/* contact form */}
        <div className={`form-container col-4  ${isFormOpen ? "form-open" : ""}`}>
          {/* //handleContactClose */}
          <CreateContact handleContactClose={handleContactClose} />
        </div>

        {/* Account info */}
        <div className={`account-container col-4  ${accountform ? "form-open" : ""}`}>
          <CreateAccount handleAddAccount={handleAddAccount} />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
