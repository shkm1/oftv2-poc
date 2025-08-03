const { ethers } = require("hardhat");

async function main() {
    const OFTV2 = await ethers.getContractFactory("OFTV2");
    const oft = await OFTV2.deploy("TestOFT", "TOFT", 8, ethers.constants.AddressZero);
    await oft.deployed();
    console.log(` OFTV2 deployed at: ${oft.address}`);
}

main();
