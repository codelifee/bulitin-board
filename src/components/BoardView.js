import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { useHistory } from "react-router-dom";
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';


function BoardView({board_no, user_no, board_title, board_content, board_regdate}) {

  let history = useHistory();

    const redirect = () => {
      history.push(`/content/${board_no}`);
      window.location.reload();
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
          <TableCell style={{cursor: 'pointer'}}>삭제하기</TableCell>
        </TableRow>
      </>
    )
}

export default BoardView
