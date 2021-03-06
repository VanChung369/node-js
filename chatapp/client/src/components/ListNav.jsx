import React, { useState } from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import { Search, TeamlList, TeamPreview } from ".";
import Logo from "../assets/images/brand.svg";
const cookies = new Cookies();
const Navigation = ({ logout }) => {
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
        <li class="nav-item d-none d-xl-block invisible flex-xl-grow-1">
          <a class="nav-link position-relative p-0 py-xl-3" href="#" title="">
            <i class="icon-lg fe-x"></i>
          </a>
        </li>
        <li className="nav-item mt-xl-9">
          <a
            class="nav-link position-relative p-0 py-xl-3"
            data-toggle="tab"
            href="#tab-content-friends"
            title="Friends"
            role="tab"
          >
            <i class="icon-lg fe-users"></i>
          </a>
        </li>
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
        <li className="nav-item mt-xl-9 d-none d-xl-block flex-xl-grow-1">
          <div
            className="nav-link position-relative p-0 py-xl-3"
            onClick={logout}
          >
            <i className="icon-lg fe-log-out"></i>
          </div>
        </li>
        <li className="nav-item mt-xl-9">
          <a
            class="nav-link position-relative p-0 py-xl-3"
            href="#"
            title="Settings"
          >
            <i class="icon-lg fe-settings"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
const ListNav = () => {
  const logout = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("name");
    cookies.remove("fullName");
    cookies.remove("avatar");
    cookies.remove("hashedPassword");
    cookies.remove("phoneNumber");
    window.location.reload();
  };
  return (
    <>
      <Navigation logout={logout} />
      <div className="sidebar">
        <div className="tab-content h-100" role="tablist">
          <div className="hide-scrollbar">
            <div className="container-fluid py-6">
              <Search />

              <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => <TeamlList {...listProps} type="team" />}
                Preview={(previewProps) => (
                  <TeamPreview {...previewProps} type="team" />
                )}
              />

              <ChannelList
                filters={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                  <TeamlList {...listProps} type="messaging" />
                )}
                Preview={(previewProps) => (
                  <TeamPreview {...previewProps} type="messaging" />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListNav;
