import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';


export const useStyles = makeStyles((theme) => 
    createStyles({
        button: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 30,
            width: 180,
            marginLeft: 20,
            padding: '0 30px',
            cursor: 'pointer'
        }
    })
)