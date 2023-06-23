// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract EmitWinner {
    function sendAttempt(address winner) external {
        (bool success, ) = winner.call(
            abi.encodeWithSignature("attempt()")
        );

        require(success);
    }
}