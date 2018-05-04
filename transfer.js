var Web3 = require("web3");
var fs = require("fs");
// Connect to our local node
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// NOTE: if you run Kovan node there should be an address you've got in the "Option 2: Run Kovan node" step
web3.eth.defaultAccount = "0x05ba9a1D453ED591f70E5884A5edED482400Bb62";
// read JSON ABI
var abi = JSON.parse(fs.readFileSync("./target/json/TokenInterface.json"));

var TokenContract = new web3.eth.Contract(abi, "0xAbA684dbC3539e82D9ea7d70d5186E8cD869751E", { from: web3.eth.defaultAccount });

web3.eth.personal.unlockAccount(web3.eth.defaultAccount, "<password>").then(() => TokenContract.methods.transfer("0x275db14D24143A3bb78a163ebD7D91c5D1861d69", 200).send()).then(console.log).catch(console.log);

// Check balance of recipient. Should print 200
TokenContract.methods.balanceOf("0x275db14D24143A3bb78a163ebD7D91c5D1861d69").call().then(console.log).catch(console.log);

// Check balance of sender (owner of the contract). Should print 10000000 - 200 = 9999800
TokenContract.methods.balanceOf(web3.eth.defaultAccount).call().then(console.log).catch(console.log);
