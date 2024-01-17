import React from 'react';
import TabViewContainer from '../components/Containers/TabViewContainer';
import CreateChatForm from '../components/Forms/CreateChatForm';
import ViewChatForm from '../components/Forms/ViewChatForm';

const ChatsPage = () => {
  return (
    <div>
      <h1>Chats Page</h1> 
      <TabViewContainer 
        tabs = {[
          {name: 'Create', component: <CreateChatForm />},
          {name: 'View', component: <ViewChatForm />},
        ]}
      />
   
    </div>
  );
};

export default ChatsPage;
