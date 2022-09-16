---
layout: post
title:  "Master of the leading zeroes address"
date:   2022-08-25 00:00:00 +1000
categories: mev discipline
---

![image-title-here](/assets/images/DALL·E_2022-09-11_08.40.53.png){: width="250" }


The champion of this disclipline will be awarded with the NFT for having at least 6 leading zeores in the address.

The smart contract for the allowlist features the following function:

{% highlight javascript %}
function getLeadingZeroes(address addr) public view returns (uint) {
        bytes20 bytesAdr = bytes20(addr);
        uint counter = 0;
        for (uint i = 0; i < 20; i++) {
            if (uint8(bytesAdr[i]) == 0) {
                counter++;
            } else {
                break;
            }
        }
        return counter;
    }
{% endhighlight %}

Claim your NFT under this address on Goerli:
```0x2030e04c2e8c4748fd96aa56d67ad83c86641bf9```


More resources:

[Github](https://github.com/franz101/mev-olympics-nft/blob/0d61d6bd6763585d53c57ca2d69816f6315362c9/contracts/MevOlympics.sol#L48)
[Etherscan](https://goerli.etherscan.io/address/0x80bcbfca0070fa71d17917e2a0fafff697087803#writeContract)

# update 15-09-2022, profanity is not longer secure, generate a vanity address with a different tool
[1inch profanity disclosure blog](https://blog.1inch.io/a-vulnerability-disclosed-in-profanity-an-ethereum-vanity-address-tool-68ed7455fc8c?gi=705bcb96e725)
[Profanity](https://github.com/johguse/profanity)
