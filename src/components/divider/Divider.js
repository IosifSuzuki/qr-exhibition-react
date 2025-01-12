import React from 'react';
import './Divider.css';

export default function Divider({ height = '10px', width = '10px', background = 'clear'}) {
    return (
        <div
            className="divider"
            style={{
                height: height,
                width: width,
                background: background,
            }}
        />
    );
};