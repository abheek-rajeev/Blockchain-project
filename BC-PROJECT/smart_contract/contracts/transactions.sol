//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract transactions {
    uint256 transactionCount;

    event transfer(address from, address reciever, uint amount, string message, uint256 timestamp, string keyword);

    struct transferStruct {
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transferStruct[] Transactions;

    function addToBlockchain(address payable reciever, uint amount, string memory message, string memory keyword) public {
        
        transactionCount += 1;
        Transactions.push(transferStruct(msg.sender, reciever, amount, message, block.timestamp, keyword));

        emit transfer(msg.sender, reciever, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (transferStruct[] memory) {
        
        return Transactions;

    }

    function getTransactionCount() public view returns (uint256) {
        
        return transactionCount;

    }

}
