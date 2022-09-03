import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../appState/cartSlice';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import { CardActions, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import { RootState } from '../appState/store';
import { ReactFCProps } from '../sharedTypes';

type Props = {
    name: string;
    price: string;
} & ReactFCProps;

export default function Product({ name, price }: Props) {
    const dispatch = useDispatch();
    const itemsInCart = useSelector((state: RootState) => state.cart.value);

    const renderButton = useCallback(() => {
        return itemsInCart === 0 ? (
            <Button variant="contained" onClick={() => dispatch(increment())}>
                Add item to cart
            </Button>
        ) : (
            <ButtonGroup variant="contained">
                <Button onClick={() => dispatch(decrement())}>
                    <RemoveIcon />
                </Button>
                <Button>{itemsInCart}</Button>
                <Button onClick={() => dispatch(increment())}>
                    <AddIcon />
                </Button>
            </ButtonGroup>
        );
    }, [itemsInCart, dispatch]);

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5">{name}</Typography>
                <Typography variant="subtitle1">Rs. {price}</Typography>
            </CardContent>
            <CardActions>{renderButton()}</CardActions>
        </Card>
    );
}
