import React from 'react';
// import NodeViewContainer from '../components/Containers/NodeViewContainer';
import CreateNodeForm from '../components/Forms/CreateNodeForm';
import ViewNodeForm from '../components/Forms/ViewNodeForm';
import TabViewContainer from '../components/Containers/TabViewContainer'
import EditNodeForm from '../components/Forms/EditNodeForm';

const NodesPage = () => {
  return (
    <div>
      <h1>Nodes Page</h1>
      <TabViewContainer 
        tabs = {[
          {name: 'View', component: <ViewNodeForm />},
          {name: 'Edit', component: <EditNodeForm />},
          {name: 'Create', component: <CreateNodeForm />},
          
        ]}
      />
    </div>
  );
};

export default NodesPage;
