import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  Calendar  from "../../calendar";
import "./style.css";

const useStyles = makeStyles({
    table: {
      minWidth: 20,
    },
  });
  
  function createData(local: string, shift: number) {
    return {local, shift};
  }
  
  const rows = [
    createData('渋谷校', 159),
    createData('渋谷校', 159),
    createData('渋谷校', 159),
    createData('渋谷校', 159),
  ];
  

export const Body = () => {
    const classes = useStyles();
    return (
      <div className="main_body">
        <h3 className="main_body_title">〇〇年〇月のシフト確認</h3>
        <div className="main_body_search">
        <input className="main_body_search--select" type="month"/>
        <input className="main_body_search--button" type="button" value="検索" />
        </div>
        <div className="main_body_cards">
          <div className="main_body_card">
            <div className="main_body_card--title">シフト時間数</div>
            <TableContainer component={Paper} className="flex">
                <Table className="{classes.table} main_body_table">
                    <TableHead>
                    <TableRow>
                        <TableCell>拠点</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.local}>
                        <TableCell component="th" scope="row">
                            {row.local}
                        </TableCell>
                        <TableCell>{row.shift}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>拠点</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.local}>
                        <TableCell component="th" scope="row">
                            {row.local}
                        </TableCell>
                        <TableCell>{row.shift}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            
            
          </div>
          <div className="main_body_card">
            <div className="main_body_card--title">シフト日数</div>
            <TableContainer component={Paper} className="flex">
                <Table className="{classes.table} main_body_table">
                    <TableHead>
                    <TableRow>
                        <TableCell>拠点</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.local}>
                        <TableCell component="th" scope="row">
                            {row.local}
                        </TableCell>
                        <TableCell>{row.shift}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>拠点</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.local}>
                        <TableCell component="th" scope="row">
                            {row.local}
                        </TableCell>
                        <TableCell>{row.shift}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </div>
        </div>
        <div className="main_body_calendar">
          <Calendar />
        </div>
      </div>
    );
  };