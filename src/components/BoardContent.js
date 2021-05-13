import React, {useEffect, useState} from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { findByLabelText } from '@testing-library/dom';
import axios from 'axios/axios';
import { useParams } from "react-router-dom";


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
            width: 820,
            marginBottom: 20
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
        },
        content: {
            marginTop: 20
        }
    })
)


function BoardContent() {

    const [user, setUser] = useState({});
    const [board, setBoard] = useState({});
    
    const classes = useStyles();
    const boardId = useParams().boardId;

    async function fetchBoardData() {
        const request = await axios.get(`board/${boardId}`)
        .then(res => {
            setBoard(res.data[0])

        })
        .catch(err => console.log(err))
    
        return request;
    }


    useEffect(() => {
        fetchBoardData();
    
    }, [])

    console.log(board)


    return (
        <div className={classes.root}> 
            <div className={classes.boardContent}>
                <div className={classes.header}>
                    <div>user_name : {board.user_no} </div>
                    <div>board_no : {board.board_no}</div>
                </div>
                <div>
                    <div>
                        title
                    </div>
                    <div className={classes.smallBox}>
                        {board.board_title}
                    </div>
                </div>
                <div>
                    <div>
                        date
                    </div>
                    <div className={classes.smallBox} >
                        {board.board_regdate}
                    </div>
                </div>
                <div className={classes.content}>
                    content
                    <div className={classes.box}>
                        {board.board_content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardContent
