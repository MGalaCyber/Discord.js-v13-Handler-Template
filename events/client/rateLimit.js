//=====================================| Import the Module |=====================================\

const colors = require('colors');

//=====================================| Code |=====================================\

module.exports = async (client, rateLimitData) => {
    console.log(`[RATE LIMIT] `.bold.red + `${rateLimitData.method} ${rateLimitData.path}`.yellow);
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