import { Box, Container, GlobalStyles, InputBase, InputLabel, menuClasses, Paper, Stack, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Title from '../../components/ui/Title/Title';
import Text from '../../components/ui/Text/Text';
import { memo, useEffect, useMemo, useState } from 'react';
import { Fish, fishesList, Lake, lakesList } from '../../data/statistic';
import StatisticTable from '../../components/StatisticTable/StatisticTable';
import PieChart from '../../components/PieChart/PieChart';
import styled from '@emotion/styled';
import lightTheme from '../../theme';
import styles from './StatisticPage.module.css'

const StatisticPage = memo(() => {

    const [lakes, setLakes] = useState<Lake[]>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [fishes, setFishes] = useState<Fish[]>([])
    const [optionValue, setOptionValue] = useState<Lake | string>()

    const StyledInput = styled(InputBase)(() => ({
        "label + &": {
            marginTop: 1,
        },
        "& .MuiInputBase-input": {
            fontSize: 16,
            backgroundColor: lightTheme.palette.primary.contrastText,
            color: 'lightTheme.palette.primary.main',
            padding: "15px 19px",
            "& fieldset": { border: "none" },
        },
        "& .MuiSvgIcon-root": {
            color: "#000000",
        },
    }));


    const selectGlobalStyles = (
        <GlobalStyles
            styles={(theme) => ({
                [`& .${menuClasses.list}`]: {
                    "& li:hover, li.Mui-selected, li.Mui-selected:hover": {
                        backgroundColor:
                            theme.palette.primary.contrastText,
                    },
                },
            })}
        />
    );

    useEffect(() => {
        try {
            setLakes(lakesList)
            setFishes(fishesList)
        }
        catch (error) {
            console.log(error)
        }
    }, [])

    const handleChange = (event: SelectChangeEvent<typeof optionValue>) => {
        const {
            target: { value },
        } = event;
        setOptionValue(value)
    };

    const optionArray = useMemo(() => {
        if (typeof optionValue === 'object') {
            return fishes.filter((fish) => fish.lakeName === optionValue.lakeName)
        }
    }, [optionValue, fishes])

    return (
        <Box>
            <Container>
                <Title variant='h3'>
                    Статистика
                </Title>
                <Text sx={{ textAlign: 'center' }}>
                    Здесь представлена статистика пойманной рыбы в наших водоёмах!
                </Text>
                <FormControl sx={{ width: '100%', mt: 2 }}>
                    <InputLabel>
                        Выберите водоём
                    </InputLabel>
                    {selectGlobalStyles}
                    <Select id='statistic-select' value={optionValue} input={<StyledInput />} onChange={handleChange} MenuProps={{
                        sx: {
                            [`& .${menuClasses.list}`]: {
                                paddingTop: 0,
                                paddingBottom: 0,
                                backgroundColor: "primary.main",
                                color: 'white',
                            },
                        },
                    }}>
                        {lakes.map((lake) => (
                            <MenuItem key={lake.id} value={lake}>
                                {lake.lakeName}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {typeof optionValue == 'object' ? <>
                    <Stack mt={3} gap={1}>
                        <Typography>Название водоёма: <div className={styles.extraBlock}>{optionValue.lakeName}</div></Typography>
                        <Typography>Описание водоёма: <div className={styles.extraBlock}>{optionValue.lakeDescription}</div></Typography>
                    </Stack>
                    <Stack direction={'row'} gap={4} mt={2} ml={1}>
                        <Paper sx={{
                            height: 257,
                            width: 257,
                            padding: '25px',
                            backgroundColor: 'primary.contrastText',
                            border: 1,
                            borderColor: 'primary.main',
                            borderRadius: 5
                        }}><PieChart fishesList={fishesList} optionValue={optionValue} /></Paper>
                        <Paper sx={{
                            height: 257,
                            width: 257,
                            padding: '25px',
                            backgroundColor: 'primary.contrastText',
                            color: 'black',
                            border: 1,
                            borderColor: 'primary.main',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '18px',
                            borderRadius: 5
                        }}>Количество пойманной рыбы: {optionArray!.length}</Paper>
                        <Paper sx={{
                            height: 257,
                            width: 257,
                            padding: '25px',
                            backgroundColor: 'primary.contrastText',
                            color: 'black',
                            border: 1,
                            borderColor: 'primary.main',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '18px',
                            borderRadius: 5
                        }}>Прогноз клёва: {optionArray!.length > 3 ? "Хороший" : "Непонятный"}</Paper>
                        <Paper sx={{
                            height: 257,
                            width: 257,
                            padding: '25px',
                            backgroundColor: 'primary.contrastText',
                            color: 'black',
                            border: 1,
                            borderColor: 'primary.main',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '18px',
                            borderRadius: 5
                        }}>Средний вес пойманной рыбы: {(optionArray!.reduce((key, value) => key + value.fishWeight, 0) / optionArray!.length).toFixed(2)} кг</Paper>
                    </Stack>
                    <StatisticTable fishesList={fishesList} optionValue={optionValue} />
                </> : null}
            </Container>
        </Box>
    );
});

export default StatisticPage;