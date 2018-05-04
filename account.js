var Web3 = require("web3");
// Connect to our local node
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

//function isAccountLocked(account) {
var account = "0x05ba9a1D453ED591f70E5884A5edED482400Bb62";
try{
	web3.eth.sendTransaction({
            from: account,
            to: account,
            value: 0
        });
	console.log("authentication not needed");
} catch (err) {
	console.log("locked");
}
	
	//}

/*
function unlockAccountsIfNeeded(accounts, passwords, unlock_duration_sec) {
    if (typeof(unlock_duration_sec)==='undefined') unlock_duration_sec = 300;

    for (let i = 0; i < accounts.length; i++) {
        if (isAccountLocked(accounts[i])) {
            console.log("Account " + accounts[i] + " is locked. Unlocking")
            web3.personal.unlockAccount(accounts[i], passwords[i], unlock_duration_sec);
        }
    }
}
*/
