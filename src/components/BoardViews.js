import axios from 'axios/axios';
import React, {useState, useEffect} from 'react'
import BoardView from "./BoardView"
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Table, TableBody, TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => 
    createStyles({
        root: {
            width: '100%',
            marginTop: 20,
            overflowY: "auto",
        },
        table: {
            minWidth: 1080,
            height: 800
        },
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

function BoardViews() {
    const [boards, setBoards] = useState(null);

    const history = useHistory();

    const classes = useStyles();

    const handleNewBoard = () => {
            history.push(`/register`);
            window.location.reload();
    }

    async function fetchData() {
        const request = await axios.get("board/all")
        .then(res => {
            setBoards(res.data);
            
        })
        .catch(err => console.log(err))

        return request;
    }

    useEffect(() => {
       
        fetchData();
    }, [])


    return (
        <Paper className={classes.root}>
            <button className={classes.button} onClick={handleNewBoard}>Write a new board</button>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Board Number</TableCell>
                        <TableCell>User Number</TableCell>
                        <TableCell>Board Title</TableCell>
                        <TableCell>Board Content</TableCell>
                        <TableCell>Registered Date</TableCell>
                        <TableCell>내용 보기</TableCell>
                        <TableCell>삭제</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {boards == null ? fetchData : 
                            boards
                            .map((board) => (
                            <BoardView
                            key={board.board_no}
                            board_no={board.board_no}
                            user_no={board.user_no}
                            board_title={board.board_title}
                            board_content={board.board_content}
                            board_regdate ={board.board_regdate}   
                            />
                            ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default BoardViews;
