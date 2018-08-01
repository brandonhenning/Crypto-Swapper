const Redis = require('ioredis')

const redis = new Redis({
    port: 15369,          // Redis port
    host: 'ec2-18-204-95-33.compute-1.amazonaws.com',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: 'pass',
    db: 0
})

module.exports = {
    redis
}

// redis:/h:pbb18d8d2b8254a19ee4129ac5a0a9bcce4049a9c1cdc9a9e69c91d26c4be52bb@ec2-18-204-95-33.compute-1.amazonaws.com:15369