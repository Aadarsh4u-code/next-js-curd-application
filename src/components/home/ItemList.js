import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Button, Typography} from "@material-ui/core";
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';



const ItemList = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 16, marginTop: 15,}}>
          <Typography variant={"h5"}>Name</Typography>
          <Typography variant={"h5"}>User Name</Typography>
          <Typography variant={"h5"}>Email</Typography>
          <Typography variant={"h5"}>Action</Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="card" >
          <div className="card-body" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h6 className="card-title">Card Name</h6>
            <h6 className="card-title">User Name</h6>
            <h6 className="card-title">Card email</h6>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <Button startIcon={<CreateIcon fontSize={"large"} color={"primary"} />}>Edit</Button>
              <Button startIcon={<DeleteIcon fontSize={"large"} color={"error"} />}>Delete</Button>
            </div>
          </div>
        </div>
      </Grid>

    </>
  );
};

export default ItemList;