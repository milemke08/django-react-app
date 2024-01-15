import React from 'react';
import NodeViewContainer from '../components/Containers/NodeViewContainer';
import CreateNodeForm from '../components/Forms/CreateNodeForm';

const NodesPage = () => {
  return (
    <div>
      <h1>Nodes Page</h1>
      <div>
        <ul>
          <li>Create Node</li>
          <li>Edit Node</li>
          <li>View Nested Node Heiracrcy</li>
          <li>View Nested Node Heiracrcy with dependencies</li>

        </ul>
      </div>
      <NodeViewContainer />
    </div>
  );
};

export default NodesPage;
