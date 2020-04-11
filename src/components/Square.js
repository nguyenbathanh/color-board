import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const itemTypes = {
  SQUARE: 'Square'
}

export default props => {
  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: itemTypes.SQUARE,
    hover(item, monitor) {
      item.index = props.index
    }
  })

  const [, drag] = useDrag({
    item: { type: itemTypes.SQUARE, index: props.index, color: props.color },
    end: (item, monitor) => {
      props.updateColor(item.index, item.color)
    }
  })

  drag(drop(ref))

  return <button className={'square'} style={{ backgroundColor: props.color }} ref={ref}></button>
}
