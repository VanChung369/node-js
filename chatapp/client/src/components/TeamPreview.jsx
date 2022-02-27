import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";
const TeamPreview = ({ Channel, type }) => {
  const { Channel: activeChannel, client } = useChatContext();
  const groupchat = () => (
    <div className="text-center">
      {/* ? dam bao du lieu  */}#{Channel?.data?.name || Channel?.data?.id}
    </div>
  );
  const userchat = () => {
    const members = Object.values(Channel.state.members).find(
      ({ user }) => user.id === client.userID
    );
    return (
      <div>
        <nav className="nav d-block list-discussions-js mb-n6">
          <a className="text-reset nav-link p-0 mb-6">
            <div className="card card-active-listener">
              <div className="card-body">
                <div className="media">
                  <div className="avatar mr-5">
                    <Avatar image={members[0]?.user?.image} />
                  </div>
                  <div className="media-body overflow-hidden">
                    <div className="d-flex align-items-center mb-1">
                      <h6 className="text-truncate mb-0 mr-auto">
                        {members[0]?.user?.fullname}
                      </h6>
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
    );
  };
  return (
    <div
      className={Channel?.id === activeChannel?.id ? "mb-6" : ""}
      onClick={() => {
        
      }}
    >
      {type === "team" ? <groupchat /> : <userchat />}
    </div>
  );
};

export default TeamPreview;
