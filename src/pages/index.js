import Grid from "@material-ui/core/Grid";
import {Button, makeStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import styles from '../styles/home.module.css';
import ItemList from "../components/home/ItemList";

const Home = () => {
  return (
    <>
      <Grid container justify={"center"} style={{marginTop: 40}}>
        <Grid item xs={10} sm={10} md={8} lg={8} xl={8}>
          <div className={styles.homeListWrapper}>
            <div>
              <h3 style={{marginBottom: 0}}>CURD</h3>
            </div>
            <div>
              <Button variant="outlined" color={"primary"} size="large" fullWidth startIcon={<AddIcon/>}>
                Add
              </Button>
            </div>
          </div>

          <Grid container>
            <ItemList/>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Home;