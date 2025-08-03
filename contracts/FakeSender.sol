// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOFT {
    function lzReceive(
        uint16 _srcChainId,
        bytes calldata _srcAddress,
        uint64 _nonce,
        bytes calldata _payload
    ) external;
}

contract FakeSender {
    function fakeReceive(address target, bytes calldata payload) external {
        IOFT(target).lzReceive(111, hex"1111111111111111111111111111111111111111", 0, payload);
    }
}
