exports.version = require('./package.json').version;
exports.GiveawaysManager = require('./src/Manager');
exports.Giveaway = require('./src/Giveaway');
exports.Events = [
    'giveawayEnded',
    'giveawayRerolled',
    'giveawayDeleted',
    'giveawayReactionAdded',
    'giveawayReactionFailed',
    'endedGiveawayReactionAdded',
    'giveawayReactionRemoved'
]