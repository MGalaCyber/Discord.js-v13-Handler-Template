//=====================================| Import the Module |=====================================\\

const colors = require('colors');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'shardDisconnect',
    once: true,

    async execute(client, Discord, event, id) {
        console.log(`[SHARD ID DISCONNECT] `.bold.red + `${id}`.yellow);
        console.log(`[SHARD EVENT DISCONNECT] `.bold.red + `${event}`.yellow);
    }
}


/**
/////////////////////////////////////////////////////////////////////
////                                                             ////
\\\\                  Bot Coded by GalaXd#9165                   \\\\
////                                                             ////
\\\\   Work for MGalaCyber Development | https://galacyber.xyz   \\\\
////                                                             ////
\\\\                    All Right Reserved!                      \\\\
////                                                             ////
/////////////////////////////////////////////////////////////////////
 */