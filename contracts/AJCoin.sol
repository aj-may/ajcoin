// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

/// @custom:security-contact security@ajcoin.xyz
contract AJCoin is ERC20, Pausable, Ownable {
    using ECDSA for bytes32;

    address public _systemAddress = address(0);

    // Tracks if nonce has been used
    mapping(uint256 => bool) public _nonceUsed;

    constructor() ERC20("AJ Coin", "AJC") {
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(uint256 amount, uint256 nonce, bytes memory signature) public {
        require(_nonceUsed[nonce] == false, "Nonce already used");
        require(_verify(keccak256(abi.encodePacked(msg.sender, amount, nonce)), signature), "Invalid signature");

        _nonceUsed[nonce] = true;
        _mint(msg.sender, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    function setSystemAddress(address systemAddress) external onlyOwner {
        _systemAddress = systemAddress;
    }

    function _verify(bytes32 data, bytes memory signature) internal view returns (bool) {
        require(_systemAddress != address(0), "Invalid system address");

        return data
            .toEthSignedMessageHash()
            .recover(signature) == _systemAddress;
    }
}
