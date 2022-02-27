import React from "react";
import { Add } from "../assets";
const TeamlList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="container-fluid py-6">
        <p className="small">connect error</p>
      </div>
    ) : null
  }
  if (loading) {
    return (
      <div className="container-fluid py-6">
        <p className="small">
          {type === "team" ? "Channels" : "Messager"} loading ...
        </p>
      </div>
    )
  }
  return (
    <div className="container-fluid py-6">
      <div className="d-block text-reset mr-7 mr-lg-6">
        <p className="small">
          {type === "team" ? "Channels" : "Dircet Messager"}
        </p>
      </div>
      {children}
    </div>
  )
};

export default TeamlList;
