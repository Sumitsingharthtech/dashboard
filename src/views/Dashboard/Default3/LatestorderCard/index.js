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
    createData('Stuck Invoice Report', '#00000', '32323', '$49.4343', '10', '17', '$130', '4343', '4343', 'success'),
    createData('Stuck Invoice Report', '#000001', '43434', '$60.4343', '16', '20', '$232', '434', '3434', 'success'),
    createData('Stuck Invoice Report', '#000002', '4354545', '$13.4343', '20', '17', '$132', '767', '545', 'NA'),
    createData('Stuck Invoice Report', '#000003', '986789', '$10.4343', '15', '25', '$932', '434', '54545', 'success'),
    createData('Stuck Invoice Report', '#000004', '986789', '$10.4343', '15', '25', '$932', '434', '54545', 'NA'),
    createData('Stuck Invoice Report', '#000005', '986789', '$10.4343', '15', '25', '$932', '434', '54545', 'success'),
    createData('Stuck Invoice Report', '#000006', '986789', '$10.4343', '15', '25', '$932', '434', '54545', 'success'),
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
                                        <TableCell> Location </TableCell>
                                        <TableCell> Concept </TableCell>
                                        <TableCell>Territory</TableCell>
                                        <TableCell>Invoice/CN No </TableCell>
                                        <TableCell>Invoice/CN Date </TableCell>
                                        <TableCell> Value (Excl. VAT) </TableCell>
                                        <TableCell> VAT Value </TableCell>
                                        <TableCell> Exception/Failure Reason(s)  </TableCell>
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell> {row.Source} </TableCell>
                                            <TableCell> {row.vatcode} </TableCell>
                                            <TableCell> {row.vatcode} </TableCell>
                                            {/* <TableCell>
                                                <CardMedia component="img" image={row.invoice} title="image" className={classes.imgproduct} />
                                            </TableCell> */}
                                            <TableCell>{row.product}</TableCell>
                                            <TableCell>{row.quantity}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell>{row.vatvalue}</TableCell>
                                            <TableCell>{row.net1}</TableCell>
                                           
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions className="f-right">
                    <div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;
  </a>
  </div>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
