exports.version = require('./package.json').version;
exports.GiveawaysManager = require('./src/Manager');
exports.Giveaway = require('./src/Giveaway');
exports.Events = {
    giveawayEnded: 'giveawayEnded',
    giveawayRerolled: 'giveawayRerolled',
    giveawayDeleted: 'giveawayDeleted',
    giveawayReactionAdded: 'giveawayReactionAdded',
    giveawayReactionFailed: 'giveawayReactionFailed',
    endedGiveawayReactionAdded: 'endedGiveawayReactionAdded',
    giveawayReactionRemoved: 'giveawayReactionRemoved'
}