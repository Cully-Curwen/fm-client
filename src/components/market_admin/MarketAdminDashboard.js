import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { MarketAdminAuthorization } from '../../utils';
import { Query } from "react-apollo";
import { MARKET_ADMIN_DATA_QUERY } from '../../graphql-types';
import AdminMarketTile from './AdminMarketTile';
import CreateMarketForm from './CreateMarketForm';
import EditMarketForm from './EditMarketForm';

function MarketAdminDashboard(props) {
  const [newMarketForm, setNewMarketForm] = useState(false);
  const [editMarketForm, setEditMarketForm] = useState(false);
  
  const marketsList = data => {
    return (
      <div className="market-list list" >
        {data.administeredMarkets.map(market => 
          <AdminMarketTile key={market.id} market={market} setEditMarketForm={setEditMarketForm} />
        )}
        <div className="market-tile create-new tile" onClick={() => setNewMarketForm(true)} >
          <h1>Create New</h1>
        </div>
      </div>
    );
  };
  
  if (!MarketAdminAuthorization()) return <Redirect to='/market_admin/login' />;
  return (
    <Query query={MARKET_ADMIN_DATA_QUERY} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        
        return (
          <div className='market-admin-dashboard dashboard panel'>          
            {newMarketForm && <CreateMarketForm setNewMarketForm={setNewMarketForm} />}
            {editMarketForm && <EditMarketForm setEditMarketForm={setEditMarketForm} market={editMarketForm} />}
            {!newMarketForm && !editMarketForm && marketsList(data)}
          </div>
        );
      }}
    </Query>
  );
};

export default MarketAdminDashboard;
