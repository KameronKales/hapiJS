function helloworld(server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function(request, reply) {

            var name = request.query.name;

            reply('Hello ' + name)
        }
    });

    next()
}

helloworld.attributes = {
    name: 'hello-world'
}
module.exports = helloworld
