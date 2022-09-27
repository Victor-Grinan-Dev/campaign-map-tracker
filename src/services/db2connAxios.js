import axios from "../api/axios";

const campaingsEndPoint = "/campaings";
const mapsEndPoint = "/maps";
const factionsEndPoint = "/factions";
const badgesEndPoint = "/badges";
const active_skillsEndPoint = "/active_skills";
const passive_skillsEndPoint = "/passive_skills";
const negativeEndPoint = "/negative";
const objectsEndPoint = "/objects";
const unit_typesEndPoint = "/unit_types";
const userEndPoint = "/user";
const visitorEndPoint = "/visitor";

//TODO: specify what user you are geting the data from.
export const getDatabase = async (desiredEndPoint) => {
    const response = await axios.get(desiredEndPoint);
    return response.data;
  };

//user
export const getIsUsernameDuplicated = async (name) => {
    const response = await axios.get(userEndPoint);
    for(let item in response){
        if (response[item].username === name){
            return true;
        }
    }
};

export const postVisitorUser = async ( userObject ) => {
    await axios.post(visitorEndPoint, userObject).catch(err => console.log('posting user error', err));
}

export const postUser = async (data) => {
    await axios.post(userEndPoint, data);
};

export const updateFormation = async (userObject) => {
    await axios.patch(userEndPoint, userObject);
}


/*
    user:
        

        {
            type = "user"
            level = 0
            rank = "Conscript"
            badges = []
            battles = 0
            winRate = 0
            formations = [] //list of objects Formation
            army_lists = [] //list of objects Formation
            email = ""
            image = "conscript_red.png"
            images = ["conscript_red.png", "conscript_blue.png", "conscript_green.png", "conscript_yellow.png"]
            username 
            password 
        }

        

    

*/