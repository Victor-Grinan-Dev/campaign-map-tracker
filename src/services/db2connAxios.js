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
const visitorUrl = 'http://localhost/8011/visitor'

export const getData = async ( userEndPoint = visitorEndPoint ) => {
    const response = await axios.get(visitorUrl);
    console.log(response.data)
    return response.data;
  };
