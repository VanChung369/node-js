import React from 'react';
import { Channel, useChatContext ,MessageTeam } from 'stream-chat-react';

import { Inner, Create, Edit} from './';

const Main = ({isCreating, setIsCreating , isEditing,setIsEditing, createType}) => {
   if(isCreating) {
    return (
        <div className="channel__container">
            <Create createType={createType} setIsCreating={setIsCreating} />
        </div>
    )
 }

  if(isEditing) {
    return (
        <div className="channel__container">
            <Edit setIsEditing={setIsEditing} />
        </div> 
    )
}
const EmptyState = () => (
  <div className="container-fluid py-6">
      <p className="small">This is the beginning of your chat history.</p>
      <p className="small">Send messages, attachments, links, emojis, and more!</p>
  </div>
)
  return (
  <div className='main main-visible' data-mobile-height>
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, i) => <MessageTeam  key={i} {...messageProps} />}
            >
            <Inner setIsEditing={setIsEditing} />
            </Channel>
  </div>
)}

export default Main