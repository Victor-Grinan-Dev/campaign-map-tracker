import blank from '../assets/tile_images/blank.png';
import fores_sonja from '../assets/tile_images/forest_sonja.png'
import forest from '../assets/tile_images/forest.png';
import hills from '../assets/tile_images/hills.png';
import mountains from '../assets/tile_images/mountains.png';
import planes from '../assets/tile_images/planes.png';
import swamp from '../assets/tile_images/swamp.png';

const imported_tiles_images = [
    blank,
    planes,
    fores_sonja,
    forest,
    swamp,
    hills,
    mountains,
    null
];

const tilesImages = {
    blank : blank,
    forest_sonja: fores_sonja,
    forest : forest,
    hills : hills,
    mountains : mountains,
    planes : planes,
    swamp : swamp,
}

const tilesArrayImages = [
    "blank",
    "planes",
    "fores_sonja",
    "mountains",
    "forest",
    "hills",
    "swamp"
];

const tilesAddresses = {
    blank: '../assets/tile_images/blank.png',
    fores_sonja:'../assets/tile_images/forest_sonja.png',
    forest: '../assets/tile_images/forest.png',
    hills: '../assets/tile_images/hills.png',
    mountains: '../assets/tile_images/mountains.png',
    planes: '../assets/tile_images/planes.png',
    swamp: '../assets/tile_images/swamp.png',

};

const tilesPublicAddresses = {
    blank: 'assets/tile_images/blank.png',
    fores_sonja:'assets/tile_images/forest_sonja.png',
    forest: 'assets/tile_images/forest.png',
    hills: 'assets/tile_images/hills.png',
    mountains: 'assets/tile_images/mountains.png',
    planes: 'assets/tile_images/planes.png',
    swamp: 'assets/tile_images/swamp.png',
};

export default tilesImages;
export {imported_tiles_images, tilesArrayImages, tilesAddresses, tilesPublicAddresses};