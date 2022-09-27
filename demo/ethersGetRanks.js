require('dotenv').config()

var Artifact = require ('./MevOlympics.json');
var ethers = require('ethers');
(async function main () {

// goerli aclhemy provider
const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_GOERLI_RPC);


// goerli 'MevOlympics' contract address
const contractAddress ="0x80bcbfca0070fa71d17917e2a0fafff697087803"


const contract = new ethers.Contract(
    contractAddress,
    Artifact.abi,
    provider
);

var topTenSandwich = contract.getSandwichRanks(10);
var topTenMerge = contract.getMergeRanks(10);
var topTenLeadingZeroes = contract.getLeadingZeroesRanks(10);

topTenLeadingZeroes.then(function(result){
    console.log("zeroes \n",result);
  });

  topTenSandwich.then(function(result){
    console.log("sandwich \n",result);
  });

  topTenMerge.then(function(result){
    console.log("merge \n",result);
  });


})();
