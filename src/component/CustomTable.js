import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';
import CustomTypo from './CustomTypo';

export default function CustomTable(props) {
  return (
    <Box sx={{ backgroundColor:"#F4F6F6", boxShadow: "1px -1px 10px 10px rgb(12 12 12 / 5%)" }}>
      <Table size="small">

            {props.info.map((row, index) => (
                index == 0 ?
                    <TableHead>
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>
                                <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left" bold content={row.name}/>
                            </TableCell>
                            <TableCell>
                                <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left" bold content={row.value}/>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                : null
            ))}
        <TableBody>
            {props.info.map((row, index) => (
                index > 0 ?
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left" content={row.name}/>
                        </TableCell>
                        <TableCell>
                            <CustomTypo variant="subtitle1" mVariant="body2" color="primary.main" align="left" content={row.value}/>
                        </TableCell>
                    </TableRow>
                : null
            ))}
        </TableBody>
      </Table>
    </Box>
  );
}