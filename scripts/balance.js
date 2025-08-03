const { ethers } = require("hardhat");

async function main() {
    const oft = await ethers.getContract("OFTV2");
    const balance = await oft.balanceOf("0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65");
    console.log(" Attacker Balance:", ethers.utils.formatEther(balance), "OFT");
}

main();
