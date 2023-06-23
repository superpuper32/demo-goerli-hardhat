const hre = require("hardhat");

const EMIT_WINNER_ADDR = "0x36685Dd9862F366F7De2E2ee4942BaF16d2C80f1";
const WINNER_ADDR      = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

async function main() {
  const emitWinner = await hre.ethers.getContractAt("Winner", EMIT_WINNER_ADDR);

  await emitWinner.sendAttempt(WINNER_ADDR);

  console.log(
    `Contract was emitted by ${emitWinner.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
