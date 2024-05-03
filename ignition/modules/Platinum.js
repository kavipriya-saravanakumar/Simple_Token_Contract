const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("PlatinumModule", (m) => {

    const address=m.getParameter(initialOwner,"0xd6ac22191678cCC6E8206aDbEcda4259C8F164aD")
    
 

    const Platinum= m.contract("Platinum", [address],) 
    
  

  return { Platinum };
});