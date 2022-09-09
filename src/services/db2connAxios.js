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
        axios.get(url).then(res => {
            res.data.map((user, index) => {
                if(user.id === id){
                    axios.delete(url + '/' + index)
                    .catch(err => {
                        console.log('something wrong deleting the data', err);
                    });
                }
            })
        }).catch(err => {
            console.log('something wrong getting the database', err);
        });
    })();
};