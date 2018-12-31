import {parse} from 'qs'
export const parseQueryString = query => parse(query, {ignoreQueryPrefix: true})
