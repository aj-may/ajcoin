// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/// @custom:security-contact security@ajcoin.xyz
contract AJMarket is Ownable {
    using Counters for Counters.Counter;

    IERC20 ajCoin;

    // Total count of all listings
    Counters.Counter private _listingCount;

    // Mapping from listing ID to supply
    mapping(uint256 => uint256) private _listingSupply;

    // Mapping from listing ID to price
    mapping(uint256 => uint256) private _listingPrice;

    // Total count of all orders
    Counters.Counter private _orderCount;

    // Mapping from order ID to listing ID
    mapping(uint256 => uint256) private _orderListing;

    // Mapping from order ID to user address
    mapping(uint256 => address) private _orderUser;

    // Mapping from order ID to price
    mapping(uint256 => uint256) private _orderPrice;

    // Mapping user address to order count
    mapping(address => uint256) private _orderCountForUser;

    // Mapping from user to list of order IDs
    mapping(address => mapping(uint256 => uint256)) private _orders;

    event Purchase(address indexed user, uint256 indexed listingId, uint256 price);

    constructor(address _ajCoin) {
        ajCoin = IERC20(_ajCoin);
    }

    function createListing(uint256 supply, uint256 price) external onlyOwner {
        uint256 listingId = _listingCount.current();
        _listingCount.increment();
    
        _listingSupply[listingId] = supply;
        _listingPrice[listingId] = price;
    }

    function setListingSupply(uint256 listingId, uint256 supply) external onlyOwner {
        _listingSupply[listingId] = supply;
    }

    function setListingPrice(uint256 listingId, uint256 price) external onlyOwner {
        _listingPrice[listingId] = price;
    }

    function getListing(uint256 listingId) external view returns (uint256, uint256) {
        return (_listingSupply[listingId], _listingPrice[listingId]);
    }

    function purchase(uint256 listingId) external {
        require(_listingSupply[listingId] > 0, "Listing sold out");

        ajCoin.transferFrom(msg.sender, address(this), _listingPrice[listingId]);
        _listingSupply[listingId] -= 1;

        uint256 orderId = _orderCount.current();
        _orderCount.increment();

        _orderListing[orderId] = listingId;
        _orderUser[orderId] = msg.sender;
        _orderPrice[orderId] = _listingPrice[listingId];

        uint256 orderIndex = _orderCountForUser[msg.sender];
        _orderCountForUser[msg.sender] += 1;

        _orders[msg.sender][orderIndex] = orderId;

        emit Purchase(msg.sender, listingId, _listingPrice[listingId]);
    }

    function orderCount() external view returns (uint256) {
        return _orderCount.current();
    }

    function orderByIndex(uint256 index) external view returns (uint256, address, uint256) {
        require(index < _orderCount.current(), "Index out of bounds");
        return (_orderListing[index], _orderUser[index], _orderPrice[index]);
    }

    function orderCountForUser() external view returns (uint256) {
        return _orderCountForUser[msg.sender];
    }

    function orderByIndexForUser(uint256 index) external view returns (uint256, uint256) {
        require(index < _orderCountForUser[msg.sender], "Index out of bounds");
        uint256 orderId = _orders[msg.sender][index];

        return (_orderListing[orderId], _orderPrice[orderId]);
    }

    function withdraw() external onlyOwner {
        ajCoin.transfer(msg.sender, ajCoin.balanceOf(address(this)));
    }
}
