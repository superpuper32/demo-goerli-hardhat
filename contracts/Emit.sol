// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IEmit {
    function alert() external;
}

contract Emit {
    function sendAttempt(address winner) external {
        IEmit(winner).alert();
    }
}