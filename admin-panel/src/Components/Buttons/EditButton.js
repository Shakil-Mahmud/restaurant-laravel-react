import React from 'react'
import { EditIcon } from '../../Utils/svgIcons'

function EditButton({handleEdit}) {
  return (
    <>
        <div className="flex hover:cursor-pointer " onClick={handleEdit}>
            <EditIcon />
        </div>
    </>
  )
}

export default EditButton
