import React from 'react'
import Item from '../Card'

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
                    <p>Cargando...</p>
                    :
                    items.map((item, index) => <Item key={item.title + index} data={item} />)
            }
        </div>
    )
}

export default ItemList
