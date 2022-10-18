let alBalFormat,daiWithSigner,userAddress,contractSigner,userInfo,bal1,bal,getreferrer,xgoldContract,xPlanContract;
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        let explorer = 'https://bscscan.com/tx/';

        const REFER_URL = "https://ox.cash/registration?referral=";

        const signer = provider.getSigner();

        const xgoldAddress = "0x3bE48e8CC9C79c6e34D3a0F2Dea8C5d1e073c022"; //0xdF15EEF41ca25f075adf2FDf85b647aA0D5c80b7 //0x64a46ea5ad56c71f64d0c58c122d25c86a7b78b2

        const xgoldAbi = '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]';

        const xContractAddress = "0xfc2F1d3e7a4DeCD59480d38072117af3BC69ad38"; //0x522D3bE8512be459f129747b8A60cd0F40885e30 //0xcfC6016fE306Ca11B170813aD6B97CC5306149Fa //0x5AB59ec1a89eD6b829CdD60d968f230c3895145B //0x02b3978c9c9Ed09c2B22DE9B96EB8278b9f1fd87 //0xDD084940EFCF8843Afb96C9ae12939d1cb986BdC //0x56a0E77f58eAfeB2640951434E6A0Ca69aD69B7a //0x332e4A4680CC5208174EfC4e4d5576DeCA69B979 //0x4e4aA16829177c21fe0c809518248A727d8077A1 //0x78006850E595C9b0672Af5C89BdbF52Eff7819BE //0xE1DcF8BD18b6Ba628686a6d7eDd3e60a9D62E464 //0x26D936099b8946326bC2f9f6Ba431A666a90232B

        const xContractAbi = `[
            {
                "constant": false,
                "inputs": [],
                "name": "acceptOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_level",
                        "type": "uint256"
                    }
                ],
                "name": "activateLevel",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_user",
                        "type": "address[]"
                    },
                    {
                        "name": "_level",
                        "type": "uint256[]"
                    }
                ],
                "name": "allowBuyOld",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_level",
                        "type": "uint256"
                    }
                ],
                "name": "buyLevel",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "goLive_",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_referrerID",
                        "type": "uint256"
                    }
                ],
                "name": "regUser",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_contract",
                        "type": "address"
                    }
                ],
                "name": "setContract",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "name": "_level",
                        "type": "uint256"
                    }
                ],
                "name": "shiftLevel",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "name": "_referrerID",
                        "type": "uint256"
                    }
                ],
                "name": "shiftUser",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "_newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "upgradeContract",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "name": "_oxcash",
                        "type": "address"
                    },
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "payable": true,
                "stateMutability": "payable",
                "type": "fallback"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "referrer",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "userId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "referrerId",
                        "type": "uint256"
                    }
                ],
                "name": "Registration",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "from",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "to",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "level",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "timeNow",
                        "type": "uint256"
                    }
                ],
                "name": "directPaidEv",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "sender",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "receiverId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "fromId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "matrix",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "name": "level",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "missedAmount",
                        "type": "uint256"
                    }
                ],
                "name": "Payout",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "sender",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "userId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "currentReferrerId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "callerId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "level",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "name": "reInvestCount",
                        "type": "uint256"
                    }
                ],
                "name": "Reinvest",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "userId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "referrerId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "level",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "FreezeAmount",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "sender",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "userId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "referrerId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "matrix",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "name": "level",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "name": "place",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "name": "reInvestCount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "originalReferrer",
                        "type": "uint256"
                    }
                ],
                "name": "NewUserPlace",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "sender",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "userId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "name": "referrerId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "matrix",
                        "type": "uint8"
                    },
                    {
                        "indexed": false,
                        "name": "level",
                        "type": "uint256"
                    }
                ],
                "name": "Upgrade",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "name": "treeComplete",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "name": "user4thParent",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "_level",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "name": "userPosition",
                        "type": "uint256"
                    }
                ],
                "name": "debugEv",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "name": "_from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "name": "_to",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    },
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "activeGoldInfos",
                "outputs": [
                    {
                        "name": "currentParent",
                        "type": "uint256"
                    },
                    {
                        "name": "position",
                        "type": "uint256"
                    },
                    {
                        "name": "reinvestNumber",
                        "type": "uint256"
                    },
                    {
                        "name": "blocked",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    },
                    {
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "archivedGoldInfos",
                "outputs": [
                    {
                        "name": "currentParent",
                        "type": "uint256"
                    },
                    {
                        "name": "position",
                        "type": "uint256"
                    },
                    {
                        "name": "reinvestNumber",
                        "type": "uint256"
                    },
                    {
                        "name": "blocked",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "defaultRefID",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "directPercent",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_origRef",
                        "type": "address"
                    },
                    {
                        "name": "_level",
                        "type": "uint256"
                    }
                ],
                "name": "findEligibleRef",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "refID_",
                        "type": "uint256"
                    },
                    {
                        "name": "_level",
                        "type": "uint256"
                    }
                ],
                "name": "findFreeParentInDown",
                "outputs": [
                    {
                        "name": "parentID",
                        "type": "uint256"
                    },
                    {
                        "name": "noFreeReferrer",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "name": "getAddressById",
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "name": "_level",
                        "type": "uint256"
                    }
                ],
                "name": "getPosition",
                "outputs": [
                    {
                        "name": "recyclePosition_",
                        "type": "uint256"
                    },
                    {
                        "name": "recycleID",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "name": "_level",
                        "type": "uint256"
                    }
                ],
                "name": "getValidRef",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "lastIDCount",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "levelPermitted",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "levelPrice",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "maxDownLimit",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "oxcash",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "regPermitted",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "userAddressByID",
                "outputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    },
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "name": "userFourthLevelCounts",
                "outputs": [
                    {
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "userInfos",
                "outputs": [
                    {
                        "name": "joined",
                        "type": "bool"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "name": "origRef",
                        "type": "uint256"
                    },
                    {
                        "name": "levelBought",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_user",
                        "type": "address"
                    },
                    {
                        "name": "_level",
                        "type": "uint256"
                    },
                    {
                        "name": "_archived",
                        "type": "bool"
                    },
                    {
                        "name": "_archivedIndex",
                        "type": "uint256"
                    }
                ],
                "name": "viewChilds",
                "outputs": [
                    {
                        "name": "_child",
                        "type": "address[2]"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }
        ]`;

    xgoldContract = new ethers.Contract(xgoldAddress, xgoldAbi, provider);
    
    xPlanContract = new ethers.Contract(xContractAddress, xContractAbi, provider);

    xgoldWithSigner = xgoldContract.connect(signer);
    
    xPlancontractSigner = xPlanContract.connect(signer);