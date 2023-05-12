import * as service from '../services/localenitiesService.js';

export function getLocalEntitiess(req, res) {
    service.getLocalEntitiess(req, res);
}

export function findByprovince(req, res) {
    service.findByprovince(req, res);
}

