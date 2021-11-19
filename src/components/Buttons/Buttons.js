import React from 'react';
import {Button, ButtonGroup} from "@mui/material";

function Buttons({city, setCity}) {
    const translation = {
        astana: 'Нур-Султан',
        almaty: "Алматы"
    }

    const cities = ['astana', 'almaty']
    return (
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            style={{position: 'absolute', marginLeft: '15px', marginTop: '15px', zIndex: 10}}
        >
            {cities.map((item) => {
                return <Button
                    key={item} variant={item === city ? 'contained' : 'outlined'}
                    style={item === city ? null : {backgroundColor: 'white'}}
                    onClick={() => {
                        setCity(item)
                    }}
                >
                    {translation[item]}</Button>
            })}
        </ButtonGroup>
    );
}

export default Buttons;