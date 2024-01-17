import React from 'react';
import TabViewContainer from '../components/Containers/TabViewContainer';
import ViewDocumentForm from '../components/Forms/ViewDocumentForm';
import EditDocumentForm from '../components/Forms/EditDocumentForm';
import CreateDocumentForm from '../components/Forms/CreateDocumentForm';


const DocumentsPage = () => {
  return (
    <div>

      <h1>Documents</h1>
      <TabViewContainer 
        tabs = {[
          {name: 'View', component: <ViewDocumentForm />},
          {name: 'Edit', component: <EditDocumentForm />},
          {name: 'Create', component: <CreateDocumentForm />},
          
        ]}
      />
   
    </div>
  );
};

export default DocumentsPage;
