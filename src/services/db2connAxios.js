import axios from "axios";

const campaingsEndPoint = "http://localhost:8011/campaings";
const mapsEndPoint = "http://localhost:8011/maps";
const factionsEndPoint = "http://localhost:8011/factions";
const badgesEndPoint = "http://localhost:8011/badges";
const active_skillsEndPoint = "http://localhost:8011/active_skills";
const passive_skillsEndPoint = "http://localhost:8011/passive_skills";
const negativeEndPoint = "http://localhost:8011/negative";
const objectsEndPoint = "http://localhost:8011/objects";
const unit_typesEndPoint = "http://localhost:8011/unit_types";
const userEndPoint = "http://localhost:8011/user";
const visitorEndPoint = "http://localhost:8011/visitor";

const baseUrl = 'http://localhost/8011';

//TODO: specify what user you are geting the data from.
export const getDatabase = async (desiredEndPoint) => {
    const response = await axios.get(desiredEndPoint);
    return response.data;
  };


//user
export const getUser = async (name, password) => {
    const response = await axios.get(userEndPoint);
    for(let item in response){
        console.log(item.username, item.password);
    }
};

export const postVisitorUser = async ( userObject ) => {
    await axios.post(visitorEndPoint, userObject).catch(err => console.log('posting user error', err));
}

export const postSettedFormation = async (desiredEndPoint, data) => {
    await axios.post(desiredEndPoint, data);
};


