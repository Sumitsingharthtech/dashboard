import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, Divider, Grid, CardContent, CardActions } from '@material-ui/core';
import './index.css';
import { gridSpacing } from '../../../../store/constant';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    table: {
        minWidth: 350,
    },
    imgproduct: {
        width: '20px',
        height: 'auto',
    },
});

function createData(Source, vatcode, invoice, product, quantity, date, status, statuscolor, vatvalue, net1, net2) {
    return { Source, vatcode, invoice, product, quantity, date, status, statuscolor, vatvalue, net1, net2 };
}

const rows = [
    createData('Submitted to ZATCA', '#81412314', '32323', '$49.4343', '10', '17', '$130', '4343', '4343', '$32', '$343'),
    createData('Submitted to ZATCA', '#68457898', '43434', '$60.4343', '16', '20', '$232', '434', '3434', '$32', '$343'),
    createData('Submitted to ZATCA', '#45457898', '4354545', '$13.4343', '20', '17', '$132', '767', '545', '$32', '$343'),
    createData('Submitted to ZATCA', '#62446232', '986789', '$10.4343', '15', '25', '$932', '434', '54545', '$32', '$343'),
    createData('Submitted to ZATCA', '#62446232', '986789', '$10.4343', '15', '25', '$932', '434', '54545', '$32', '$343'),
    createData('Submitted to ZATCA', '#62446232', '986789', '$10.4343', '15', '25', '$932', '434', '54545', '$32', '$343'),
    createData('Submitted to ZATCA', '#62446232', '986789', '$10.4343', '15', '25', '$932', '434', '54545', '$32', '$343'),
];

export default function LatestorderCard() {
    const classes = useStyles();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Card>
                    <Divider />
                    <CardContent className="p-0">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Source</TableCell>
                                        <TableCell>VAT Code</TableCell>
                                        <TableCell>Invoice Count</TableCell>
                                        <TableCell>Invoice Value (Excl. VAT)</TableCell>
                                        <TableCell>Invoice VAT Value</TableCell>
                                        <TableCell>Credit Note (CN) Count </TableCell>
                                        <TableCell> CN Value (Excl. VAT) </TableCell>
                                        <TableCell>CN VAT Value </TableCell>
                                        <TableCell> Net Value (Excl. VAT) </TableCell>
                                        <TableCell> NET VAT Value </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell> {row.Source} </TableCell>
                                            <TableCell> {row.vatcode} </TableCell>
                                            <TableCell> {row.invoice} </TableCell>
                                            {/* <TableCell>
                                                <CardMedia component="img" image={row.invoice} title="image" className={classes.imgproduct} />
                                            </TableCell> */}
                                            <TableCell>{row.product}</TableCell>
                                            <TableCell>{row.quantity}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>{row.vatvalue}</TableCell>
                                            <TableCell>{row.net1}</TableCell>
                                            <TableCell>{row.net2}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions className="f-right">
                    <div class="pagination">
  <a href="/" >&laquo;</a>
  <a href="/" >1</a>
  <a href="/">2</a>
  <a href="/">3</a>
  <a href="/">4</a>
  <a href="/">5</a>
  <a href="/">6</a>
  <a href="/">&raquo;
  </a>
  </div>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
