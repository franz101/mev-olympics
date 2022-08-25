---
layout: post
title:  "Master of the 0x gas address"
date:   2022-08-25 00:00:00 +1000
categories: mev discipline
---
The champion of this disclipline will be awarded with the NFT for having the most leading zeores in the address.

The smart contract for the allowlist features the following function:
```    function getLeadingZeroes(address addr) public view returns (uint) {
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
    }```



Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
