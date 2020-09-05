import React from 'react';

const GridCard = () => {
    return (
                <div style={{
                    boxSizing: 'border-box',
                    minWidth: '0px',
                    margin: '0',
                    display: 'flex'
                }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: 'calc(100% - 200px)',
                            padding: '10px',
                        }}
                    >
                        <span style={{
                            fontSize: '14px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            display: 'table',
                            borderBottom: '5px solid rgb(124, 55, 173)'
                        }}> 
                            Facebook 
                        </span>
                        <div style={{
                            boxSizing: 'border-box',
                            minWidth: '0px',
                            width: '100%',
                            color: 'rgb(51, 51, 51)',
                            margin: '1vw 0px',
                            fontSize: '0.8rem'
                        }}> 
                            Facebook is a popular free social networking website that allows registered users to keep in touch with friends.
                        </div>
                    </div>
                    <div style={{
                        width: '200px',
                        margin: 'auto',
                    }}>
                        <img src='http://mharmanani.github.io/assets/img/python-3.svg' style ={{
                            width: '200px',
                            height: '200px',
                            padding: '40px',
                        }}/>
                    </div>
                </div>
    
    );
}

export default GridCard;