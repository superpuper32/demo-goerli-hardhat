
const hre = require("hardhat");

async function main() {

  const emitWinner = await hre.ethers.deployContract("EmitWinner");

  await emitWinner.waitForDeployment();

  console.log(
    `Contract EmitWinner was deployed to ${emitWinner.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
