import React, { useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { Search, TeamlList, TeamPreview } from ".";
import Logo from "../assets/images/brand.svg";

const Navigation = () => {
  return (
    <div className="navigation navbar navbar-light justify-content-center py-xl-7">
      <a href="#" className="d-none d-xl-block mb-6">
        <img
          src={Logo}
          className="mx-auto fill-primary"
          data-inject-svg=""
          alt="Logo"
          style={{ height: "46px" }}
        />
      </a>
      <ul
        className="nav navbar-nav flex-row flex-xl-column flex-grow-1 justify-content-between justify-content-xl-center py-3 py-lg-0"
        role="tablist"
      >
        <li className="nav-item mt-xl-9">
          <a
            className="nav-link position-relative p-0 py-xl-3 active"
            data-toggle="tab"
            href="#tab-content-dialogs"
            title="Chats"
            role="tab"
          >
            <i className="icon-lg fe-message-square"></i>
            <div className="badge badge-dot badge-primary badge-bottom-center"></div>
          </a>
        </li>
      </ul>
    </div>
  );
};
const ListNav = () => {
  return (
    <>
      <Navigation />
      <div className="sidebar">
        <div className="tab-content h-100" role="tablist">
          <div className="hide-scrollbar">
            <div className="container-fluid py-6">
              <Search />
              <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (<TeamlList {...listProps} type="team" />)}
                Preview={(previewProps)=>(<TeamPreview {...previewProps} type="team"/>)}
              />
                <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (<TeamlList {...listProps} type="messaging" />)}
                Preview={(previewProps)=>(<TeamPreview {...previewProps} type="messaging"/>)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListNav;
