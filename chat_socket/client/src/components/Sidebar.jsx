import React, { useEffect, useState } from "react";

const Sidebar = ({contacts}) => {

  return (
    <>
      <div className="sidebar">
        <div className="tab-content h-100" role="tablist">
          <div
            className="tab-pane fade h-100 show active"
            id="tab-content-dialogs"
            role="tabpanel"
          >
            <div className="d-flex flex-column h-100">
              <div className="hide-scrollbar">
                <div className="container-fluid py-6">
                  <h2 className="font-bold mb-6">Chats</h2>
                  <form className="mb-6">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search for messages or users..."
                        aria-label="Search for messages or users..."
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
                          src="assets\images\avatars\2.jpg"
                          alt="Image Description"
                        />
                      </div>
                      <div className="small">William</div>
                    </a>
                  </div>
                  <nav className="nav d-block list-discussions-js mb-n6">
                    <a className="text-reset nav-link p-0 mb-6" href="#">
                      <div className="card card-active-listener">
                        <div className="card-body">
                          <div className="media">
                            <div className="avatar mr-5">
                              <img
                                className="avatar-img"
                                src="assets\images\avatars\11.jpg"
                                alt="Bootstrap Themes"
                              />
                            </div>

                            <div className="media-body overflow-hidden">
                              <div className="d-flex align-items-center mb-1">
                                <h6 className="text-truncate mb-0 mr-auto">
                                  Bootstrap Themes
                                </h6>
                                <p className="small text-muted text-nowrap ml-4">
                                  10:42 am
                                </p>
                              </div>
                              <div className="text-truncate">
                                Anna Bridges: Hey, Maher! How are you? The
                                weather is great isn't it?
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="badge badge-circle badge-primary badge-border-light badge-top-right">
                          <span>3</span>
                        </div>
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
