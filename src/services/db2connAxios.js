import axios from "axios";

const baseUrl = 'http://localhost/8011'

export const getData = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
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