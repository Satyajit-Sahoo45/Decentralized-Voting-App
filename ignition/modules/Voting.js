const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("VotingModule", (m) => {
    const votingContract = m.contract("Voting");

    return { votingContract };
});
