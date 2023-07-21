const Item = ({
    item,
    drag,
    itemImgObj
}) => {
    return (
        <div key={item.id} className="unranked-cell">
            <img
                id={`item-${item.id}`}
                src={itemImgObj?.image}
                style={{ cursor: "pointer" }}
                draggable="true"
                onDragStart={drag}
            />
        </div>
    )
}

export default Item;