const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const oft = await ethers.getContract("OFTV2");
    await oft.mint(oft.address, ethers.utils.parseEther("10000"));
    console.log(" Funded OFTV2 with 10000 tokens");
}

main();
