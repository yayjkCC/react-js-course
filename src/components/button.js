import React from 'react'

export default function button({children, onPress}) {
  return (
    <button onClick={onPress} style={{
      color: "black", 
      backgroundColor: "white", 
      border: "1px", 
      borderColor: "gray", 
      borderStyle: "solid", 
      padding: "8px", 
      borderRadius: "4px", 
      marginTop: "8px", 
      marginBottom: "8px",
      cursor: "pointer"
    }}>
        {children}
    </button>
  )
}
