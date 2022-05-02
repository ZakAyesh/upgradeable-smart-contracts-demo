// contracts/Tesla.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
 
contract TeslaPower {
    uint256 private horsePower;
 
    // Emitted when the stored value changes
    event HorsePowerChanged(uint256 newValue);
 
    // Stores a new value in the contract
    function setHorsePower(uint256 newHorsePower) public {
        horsePower = newHorsePower;
        emit HorsePowerChanged(newHorsePower);
    }

    // Reads the last stored value
    function retrieveHorsePower() public view returns (uint256) {
        return horsePower;
    }
}