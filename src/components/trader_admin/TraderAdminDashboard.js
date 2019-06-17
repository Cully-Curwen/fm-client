import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TraderAdminAuthorization } from '../../utils';
import { Query } from "react-apollo";
import { TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import AdminTraderCardTile from './AdminTraderCardTile';
import CreateTraderCardForm from './CreateTraderCardForm';
import EditTraderForm from './EditTraderForm';
import '../../styling/TraderTile.css';

function TraderAdminDashboard(props) {
  const [newTraderForm, setNewTraderForm] = useState(false);
  const [editTraderForm, setEditTraderForm] = useState(false)
  
  const tradersList = data => {
    return (
      <>  
        {data.administeredTraders.map(traderCard => 
          <AdminTraderCardTile key={traderCard.id} traderCard={traderCard} setEditTraderForm={setEditTraderForm} />
          )}
        <div className="trader-tile add-new" onClick={() => setNewTraderForm(true)} >
          <h1>Create New</h1>
        </div>
      </>
    );
  };
  
  if (!TraderAdminAuthorization()) return <Redirect to='/trader_admin/login' />;
  return (
    <Query query={TRADER_ADMIN_DATA_QUERY} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        
        return (
          <div className="trader-admin-dashboard dashboard">
            {newTraderForm && <CreateTraderCardForm setNewTraderForm={setNewTraderForm} />}
            {editTraderForm && <EditTraderForm setEditTraderForm={setEditTraderForm} traderCard={editTraderForm} />}
            {!newTraderForm && !editTraderForm && tradersList(data)}
          </div>
        );
      }}
    </Query>
  );
};

export default TraderAdminDashboard;