import {stringify} from 'qs'
export const toQueryString = (obj = {}, addQueryPrefix = true) => stringify(obj, {addQueryPrefix})

