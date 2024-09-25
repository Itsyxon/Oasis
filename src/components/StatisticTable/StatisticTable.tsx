import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { memo } from 'react';
import { Fish, Lake } from '../../data/statistic';
import styled from '@emotion/styled';
import lightTheme from '../../theme';

type Props = {
    fishesList: Fish[]
    optionValue: Lake | string
}

const StatisticTable: React.FC<Props> = memo(({ fishesList, optionValue }) => {

    const StyledTableHeadRow = styled(TableRow)(() => ({
        "td, th": {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            backgroundColor: lightTheme.palette.primary.main,
            color: '#FFF'

        },
    }));
    const StyledTableRow = styled(TableRow)(() => ({
        "td, th": {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            backgroundColor: lightTheme.palette.primary.contrastText,
        },

    }));
    const titles = [
        'Название рыбы',
        "Дата ловли",
        "Вес рыбы",
        "Наживка"
    ]
    return (
        <TableContainer sx={{ mt: 5, mb: 5, borderRadius: '25px' }}>
            <Table>
                <TableHead sx={{ borderRadius: '15px' }}>
                    <StyledTableHeadRow >
                        {titles.map((title, index) => (
                            <TableCell key={index}>
                                {title}
                            </TableCell>
                        ))}
                    </StyledTableHeadRow>
                </TableHead>
                <TableBody>
                    {fishesList.map((fish) => (
                        typeof optionValue == 'object' && fish.lakeName === optionValue.lakeName ?
                            <StyledTableRow key={fish.id}>
                                <TableCell>{fish.fishName}</TableCell>
                                <TableCell>{fish.catchDate}</TableCell>
                                <TableCell>{fish.fishWeight} кг</TableCell>
                                <TableCell>{fish.bait}</TableCell>
                            </StyledTableRow> : null

                    ))}
                </TableBody>
            </Table>

        </TableContainer>
    );
});

export default StatisticTable;