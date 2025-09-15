import http from 'http';
import url from 'url';

export function handleEcho(req, res, query) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' })
    res.end(`${query.text}`)
}



