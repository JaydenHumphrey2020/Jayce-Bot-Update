

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        setInterval(client.pickPresence, 10*1000);

        console.log(`Logged in as ${client.user.tag}!`);

        setTimeout(client.checkVideo, 5* 1000);
    }
}