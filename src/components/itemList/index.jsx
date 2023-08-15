import React from 'react'
import Item from '../Card'
import HourglassFullTwoToneIcon from '@mui/icons-material/HourglassFullTwoTone';

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px'
}

const ItemList = ({ items, loading }) => {
    return (
        <div style={containerStyle}>
            {
                Boolean(loading) ?
                    <div style={{
                        justifyContent:'center',
                        alignContent:'center'
                    }}>
                        <HourglassFullTwoToneIcon sx={{maxWidth:500}}/>
                        <h3>Cargando...</h3>
                        </div>
                    :
                    items.map((item, index) => <Item key={item.title + index} data={item} />)
            }
        </div>
    )
}

export default ItemList