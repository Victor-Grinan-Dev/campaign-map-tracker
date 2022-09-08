import React from "react";
import axios from "axios";

export const getData = (url) => {
    (async () =>{
        axios.get(url).then(res => {
            return res.data;
        }).catch(err => {
            console.log(err);
        })
    })();
    
};

export const deleteData = (url, id) => {
    (async () =>{
        axios.delete(url + '/' + id)
        .catch(err => {
            console.log(err);
        });
    })();
};