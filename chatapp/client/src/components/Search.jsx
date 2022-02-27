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
    <div>
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
       {/* <div
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
        </div> */}
    </div>
  );
};

export default Search;
