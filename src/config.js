import avalanche from "./Img/a.png"
import binance from "./Img/binance.png"
import ethereum from "./Img/ethereum.png"
import polygon from "./Img/polygon.png"

export const LaunchPadABI = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_token_owner_admin_currency",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "_title_symbol_SocialMedia",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_noOfTokens_price_max_min_vesting_month_start_end",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_whitelist",
				"type": "address[]"
			}
		],
		"name": "createPresale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalSupply",
				"type": "uint256"
			}
		],
		"name": "launchToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_contract",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_LP",
				"type": "bool"
			}
		],
		"name": "setLockContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}
		],
		"name": "getLockContract",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "Title",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "Amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "Contract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "Time",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "LP",
						"type": "bool"
					}
				],
				"internalType": "struct LaundhPad.tokenLockStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPoolDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "ind",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "_token_owner_admin_currency",
						"type": "address[]"
					},
					{
						"internalType": "string[]",
						"name": "_title_symbol_SocialMedia",
						"type": "string[]"
					},
					{
						"internalType": "uint256[]",
						"name": "_noOfTokens_price_max_min_vesting_month_start_end",
						"type": "uint256[]"
					},
					{
						"internalType": "string",
						"name": "_hash",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "_whitelist",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "investedBUSD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "investedTokens",
						"type": "uint256"
					}
				],
				"internalType": "struct LaundhPad.Presale[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "investedBUSD",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "investedTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "liquidity",
						"type": "uint256"
					}
				],
				"internalType": "struct LaundhPad.IGOData[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserTokenList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "Address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "decimals",
						"type": "uint256"
					}
				],
				"internalType": "struct LaundhPad.tokenStruct[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "PresaleArray",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ind",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "investedBUSD",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "investedTokens",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "PresaleIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "PresaleMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "TokenLockContracts",
		"outputs": [
			{
				"internalType": "string",
				"name": "Title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Contract",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "Time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "LP",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "TokenPresale",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "TokenPresaleLocked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userTokenList",
		"outputs": [
			{
				"internalType": "address",
				"name": "Address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "decimals",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const IGOAbi = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_token_owner_admin_currency",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "_title_symbol_SocialMedia",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_noOfTokens_price_max_min_vesting_month_start_end",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_whitelist",
				"type": "address[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AdminAllowed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Badges",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Buy",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "UserClaimedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "WhitelistMapping",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool[]",
				"name": "_badges",
				"type": "bool[]"
			}
		],
		"name": "addBadges",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			}
		],
		"name": "addLiquidity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_users",
				"type": "address[]"
			}
		],
		"name": "addWhiteListBulk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "addWhiteListSingle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_bool",
				"type": "bool"
			}
		],
		"name": "adminAllowance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "min1",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "min2",
				"type": "uint256"
			}
		],
		"name": "changeTiers",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_token_owner_admin_currency",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "_title_symbol_SocialMedia",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_noOfTokens_price_max_min_vesting_month_start_end",
				"type": "uint256[]"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_whitelist",
				"type": "address[]"
			}
		],
		"name": "editPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "finalize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getBadges",
		"outputs": [
			{
				"internalType": "bool[]",
				"name": "",
				"type": "bool[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDetails",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getEntitlement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "netEntitlement",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getTiers",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "tier",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "noOfClaims",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "publicSale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_users",
				"type": "address[]"
			}
		],
		"name": "removeWhiteListBulk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "removeWhiteListSingle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selfInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "investedTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "investedBUSD",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "finalized",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userEntitlement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "whiteListCheck",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_yes",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_busd",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const IERC20 = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const tokenLockLauncherAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "LP",
				"type": "bool"
			}
		],
		"name": "lockToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_launcher",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getArray",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "_contract",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "time",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "LP",
						"type": "bool"
					}
				],
				"internalType": "struct tokenLockLauncher.Locks[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Launcher",
		"outputs": [
			{
				"internalType": "contract LaundhPad",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "LockArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_contract",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "LP",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const tokenLockAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_Title",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_Amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_Token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_Owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_Time",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "Amount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Time",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Title",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Token",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const goerliRouter = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"

export const tokenLocklauncherAdd =  {
	"43113" : "0x5ACfc74319Cc6d738140f684964481aF7865a4b0",//"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
		"97" : "0xe99227298F536e8CB341A8a6c0d2e0121a5E0F6c",//"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
		"5" : "0x67ae17753Ef60c4D0b1d750a25fd76a29fC0A6df",
		"80001" : "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502"
}

export const tokenObj = {
	"43113" : "0x5ACfc74319Cc6d738140f684964481aF7865a4b0",//"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
		"97" : "0xe99227298F536e8CB341A8a6c0d2e0121a5E0F6c",//"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
		"5" : "0x36956D87522b3661a2D9De122f65f61a592AcC26",
		"80001" : "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502"
}

export const rpcObj = {
	"43113" : "0x5ACfc74319Cc6d738140f684964481aF7865a4b0",//"0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
		"97" : "https://data-seed-prebsc-2-s3.binance.org:8545/",//"0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
		"5" : "https://goerli.infura.io/v3/2d0256aba07e4704add58fd0713e24d5",
		"80001" : "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502"
}


export var chainIdSelected = "5"



export const tempAdmin = "0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554"//"0xF85ee861F7360E5882FE1efE8DFc29C204d4BfaE"//"0xAa2F7afCBfbfe76D0aa9460bC77ABe2b726E0A15"//"0xfef5f69FA76f35638Aa3ed77a0644Fa79d31A554"//"0x77547F859Ca0F1114c25Db094Bb0f682dD47512D"//"0xF85ee861F7360E5882FE1efE8DFc29C204d4BfaE"

export const LaunchPadAdd = {
	"43113" : "0xa522CF9B39CdA62650c060b692684b38286ce3a8",
		"97" : "0x0550175b6531a1195670150160a0cFABe95833b7",
		"5" : "0x17Ce14dBb65f31c7E3c1Ab1C95f0B8DF22BfB19c",
		"80001" : "0x4e4cefab704e4579bf28d32230ddecf0117ae9c1"
}

	

export const BUSD = {
	"43113" : "0x5425890298aed601595a70AB815c96711a31Bc65",
		"97" : "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
		"5" : "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49",
		"80001" : "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"
}



export const logoArray = {
		"43113" : avalanche,
		"97" : binance,
		"5" : ethereum,
		"80001" : polygon
}


export const chainArray = {
	"43113" : "Avalanche",
	"97" : "Binance",
	"5" : "Ethereum",
	"80001" : "Polygon"
}

export const acceptableArray = ["0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684","0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"]

export const acceptableObj = {

}


//0x942ce81eed20d4ee6b07a194eaebc1a0d1d8576c contract //