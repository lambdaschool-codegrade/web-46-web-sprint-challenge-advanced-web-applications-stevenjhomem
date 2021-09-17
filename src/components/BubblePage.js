import React, { useEffect, useState } from "react";
import axiosWithAuth from '../helpers/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';


const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`/colors/${editColor.id}`, editColor)
      .then(res=>{
        setColors(colors.map((color)=>
          color.id===editColor.id ? editColor: color
        ))
        setEditing(false);
      })
      .catch(err=>{
        console.log(err);
      })
  };

  const deleteColor = (deletedColor) => {
    axiosWithAuth()
      .delete(`/colors/${deletedColor.id}`)
      .then(res=>{
        setColors(colors.filter((color)=> color.id !== deletedColor.id)
        );
      });
  };

  useEffect(()=>{
    fetchColorService()
                   .then(res=>{
                     setColors(res.data);
                   })
                   .catch(err=>{
                     console.log(err)
                   })
  },[]);

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
