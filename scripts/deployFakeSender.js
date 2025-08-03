const { ethers } = require("hardhat");

async function main() {
    const FakeSender = await ethers.getContractFactory("FakeSender");
    const fakeSender = await FakeSender.deploy();
    await fakeSender.deployed();
    console.log(` FakeSender deployed to: ${fakeSender.address}`);
}

main();
