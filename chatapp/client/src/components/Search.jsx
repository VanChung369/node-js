import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";
import img2 from "../assets/images/avatars/2.jpg";
import img11 from "../assets/images/avatars/11.jpg";
import { Dropdown } from "./";

const Search = () => {
  // khi truyen gia tri vao usestate thi se gan gia tri cho key cua mang
  const [query, setQuery] = useState("");
  const [Loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //
    } catch (error) {
      setQuery("");
    }
  };
  const onSearch = (event) => {
    // ngan chan gui du lieu se bi load lai trang
    event.preventDefault();
    setLoading(true);
    // lay gia tri value gan vao setquery
    setQuery(event.target.value);
    getChannels(event.target.value);
  };
  return (
    <div className="hide-scrollbar">
      <div className="container-fluid py-6">
        <h2 className="font-bold mb-6">Chats</h2>
        <form className="mb-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={onSearch}
            />
            <div className="input-group-append">
              <button
                className="btn btn-lg btn-ico btn-secondary btn-minimal"
                type="submit"
              >
                <i className="fe-search"></i>
              </button>
            </div>
          </div>
        </form>
        <div
          className="text-center hide-scrollbar d-flex my-7"
          data-horizontal-scroll=""
        >
          <a href="#" className="d-block text-reset mr-7 mr-lg-6">
            <div className="avatar avatar-sm avatar-online mb-3">
              <img
                className="avatar-img"
                src={img2}
                alt="Image Description"
              />
            </div>
            <div className="small">admin</div>
          </a>
        </div>
        <nav className="nav d-block list-discussions-js mb-n6">
          <a className="text-reset nav-link p-0 mb-6" href="chat-1.html">
            <div className="card card-active-listener">
              <div className="card-body">
                <div className="media">
                  <div className="avatar mr-5">
                    <img
                      className="avatar-img"
                      src={img11}
                      alt="Bootstrap Themes"
                    />
                  </div>
                  <div className="media-body overflow-hidden">
                    <div className="d-flex align-items-center mb-1">
                      <h6 className="text-truncate mb-0 mr-auto">admin</h6>
                      <p className="small text-muted text-nowrap ml-4">
                        10:42 am
                      </p>
                    </div>
                    <div className="text-truncate">
                      Anna Bridges: Hey, Maher! How are you?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Search;
