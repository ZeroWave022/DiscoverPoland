import fs from 'fs';
import config from '../config/navbar.json'

export default async function getNavbarLinks() {
    let links = config.links;

    return links;
}
