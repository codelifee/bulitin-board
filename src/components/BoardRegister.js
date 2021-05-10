import React, {useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import axios from '../axios/axios';


const useStyles = makeStyles((theme) => 

    createStyles({
        root: {
            width: '100%',
            height: '100vh'
        },
        boardContent: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        },
        header: {
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%'
        },
        title: {
            height: 50
        },
        box: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 100,
            padding: '0 30px',
            width: 500
        },
        smallBox: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 50,
            padding: '0 30px',
            width: 500
        }
        ,
        input: {
            height: 90,
            width: 450,
            marginTop: 5
        },
        smallInput: {
            height: 40,
            width: 450,
            marginTop: 5
        },
        button: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 50,
            marginTop: 20,
            padding: '0 30px',
            width: 100
        }
    })
)

function BoardRegister() {

    const classes = useStyles();
    
    const [form, setForm] = useState({
        user_no: "1"
    });

    const postBoard = () => {

        axios
        .post("board", form)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  };

    const handleChange = (e) => {
        console.log(e.target.name)

        e.preventDefault();
          setForm({
            ...form,
            [e.target.name]: e.target.value
          });
    
          console.log(form)
      };

    return (
        <div className={classes.root}>
            <div className={classes.boardContent}>
                <div>Register</div>
                <div>
                    <div>
                        user id
                    </div>
                    <div className={classes.smallBox}>
                        <input 
                        name="user_no"
                        onChange={handleChange}
                        className={classes.smallInput} type="textarea" />
                    </div>
                </div>
                <div>
                    <div>
                        board title
                    </div>
                    <div className={classes.smallBox}>
                        <textarea 
                        name="title"
                        onChange={handleChange}
                        className={classes.smallInput} type="textarea" />
                    </div>
                </div>
                <div>
                    <div>
                        board content
                    </div>
                    <div className={classes.box}>
                        <textarea 
                        name="content"
                        onChange={handleChange}
                        className={classes.input} type="textarea" />
                    </div>
                </div>
                <div>
                    <button
                    onClick={postBoard}
                    className={classes.button}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default BoardRegister
