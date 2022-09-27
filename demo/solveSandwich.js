require('dotenv').config()

const ethers = require('ethers');
const {  FlashbotsBundleProvider,} = require("@flashbots/ethers-provider-bundle");

(async function main () {

// setup goerli flashbots providers
// const provider = new ethers.getDefaultProvider("goerli");
const provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_GOERLI_RPC);

const authSigner = new ethers.Wallet('0x2000000000000000000000000000000000000000000000000000000000000000',  provider);
// `authSigner` is an Ethereum private key that does NOT store funds and is NOT your bot's primary key.// This is an identifying key for signing payloads to establish reputation and whitelisting



const flashbotsProvider =  await FlashbotsBundleProvider.create(
    provider,
    authSigner,
    "https://relay-goerli.flashbots.net",
    "goerli"
);
// Flashbots provider requires passing in a standard provider and an auth signer


// contract parameters for transactions
const contractOlympics ="0x80bcbfca0070fa71d17917e2a0fafff697087803"
// contract address
const funcMintSandwichPrototype = ethers.utils.id("mintSandwich()").slice(0,10)
// contract function prototype (8 nibbles of hashed function sig)

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const walletMiddleOfSandwich = new ethers.Wallet(process.env.PRIVATE_KEY_2);
//  2 wallets to execute sandwich

// bundle 'sandwich challenge' transactions for flashbots
const signedTransactions = await flashbotsProvider.signBundle([
    {
        signer: wallet,
        transaction:
        {
            to: contractOlympics,
            gasPrice: ethers.utils.parseUnits("2", "gwei"),
            gasLimit: 300000,
            chainId: 5,
            value: 0,
            data: funcMintSandwichPrototype
        },
    },
    {
        signer: walletMiddleOfSandwich,
        transaction:
        {
            to: contractOlympics,
            gasPrice: ethers.utils.parseUnits("2", "gwei"),
            gasLimit: 300000,
            chainId: 5,
            value: 0,
            data: funcMintSandwichPrototype
        },
    },
    {
        signer: wallet,
        transaction:
        {
            to: contractOlympics,
            gasPrice: ethers.utils.parseUnits("2", "gwei"),
            gasLimit: 300000,
            chainId: 5,
            value: 0,
            data: funcMintSandwichPrototype
        },
    },
]);


const blockNumber = await provider.getBlockNumber();
// get block number inorder to specify target blocks for flashbots


let sendBundles = false;
const simulation = await flashbotsProvider.simulate(
    signedTransactions,
    blockNumber + 1
    );


if ("error" in simulation) {
    console.log(`Simulation Error: ${simulation.error.message}`);
} else {
    sendBundles = true;
    console.log(
        `Simulation Success: ${blockNumber} ${JSON.stringify(
            simulation,
            null,
            2
        )}`
    );
}
// simulate transaction bundling to find errors before sending raw transactions
console.log(signedTransactions);

// send flashbots transactions
if (sendBundles) {
    for (var i = 1; i <= 30; i++) {
        const bundleSubmission = flashbotsProvider.sendRawBundle(
            signedTransactions,
            blockNumber + i
        );
        console.log("submitted for block # ", blockNumber + i);
    }
    console.log("bundles submitted");
}

// The reason why we submit bundles for the next 30 blocks is because Flashbots only runs a small portion of the validators on Goerli. We are more likely to have a bundle included if we submit bundles for several blocks into the future.
// https://docs.flashbots.net/flashbots-auction/searchers/advanced/goerli-testnet
console.log("Done");
})();
