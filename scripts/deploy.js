
const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.deployContract("Contract");

  await contract.waitForDeployment();

  console.log(
    `Contract was deployed to ${contract.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
