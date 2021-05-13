import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { useHistory } from "react-router-dom";
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import axios from 'axios/axios'


function BoardView({board_no, user_no, board_title, board_content, board_regdate}) {


  let history = useHistory();

    const redirect = () => {
      history.push(`/content/${board_no}`);
      window.location.reload();
    }



    const handleDelete = () => {
        axios
        .delete("board", {
          data: {
            "board_no" : board_no
          }
        })
        .then((res) => {
          console.log(res)
          window.location.reload()
        })
        .catch((err) => console.log(err));
    }

    return (
      <>
        <TableRow>
          <TableCell>{board_no}</TableCell>
          <TableCell>{user_no}</TableCell>
          <TableCell>{board_title}</TableCell>
          <TableCell>{board_content}</TableCell>
          <TableCell>{board_regdate}</TableCell>
          <TableCell onClick={redirect} style={{cursor: 'pointer'}}>내용 보기</TableCell>
          <TableCell onClick={handleDelete} style={{cursor: 'pointer'}}>삭제하기</TableCell>
        </TableRow>
      </>
    )
}

export default BoardView
