/*
A website domain like "discuss.leetcode.com" consists of various subdomains. 
At the top level, we have "com", at the next level, we have "leetcode.com", 
and at the lowest level, "discuss.leetcode.com". When we visit a domain 
like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" 
and "com" implicitly.

Now, call a "count-paired domain" to be a count (representing the number of visits 
this domain received), followed by a space, followed by the address. 
An example of a count-paired domain might be "9001 discuss.leetcode.com".

We are given a list cpdomains of count-paired domains. 
We would like a list of count-paired domains, (in the same format as the input, 
and in any order), that explicitly counts the number of visits to each subdomain.

Example 1:
Input: 
["9001 discuss.leetcode.com"]
Output: 
["9001 discuss.leetcode.com", "9001 leetcode.com", "9001 com"]
Explanation: 
We only have one website domain: "discuss.leetcode.com". 
As discussed above, the subdomain "leetcode.com" and "com" 
will also be visited. So they will all be visited 9001 times.
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  // create map
  const domainMap = new Map();
  const results = [];
  //loop through cpdomains (cpdomain)
  for (cpdomain of cpdomains) {
    // split domain with space
    cpdomain = cpdomain.split(' ');
    const count = parseInt(cpdomain[0]);
    domain = cpdomain[1];
    domain = domain.split('.');
    // loop through domain array in reverse (n-1)
    for (i = domain.length - 1; i >= 0; i--) {
      let currentDomain = domain[i];
      for (let j = i + 1; j < domain.length; j++)
        currentDomain += '.' + domain[j];

      // if domain[i] exists in map
      if (domainMap.has(currentDomain))
        domainMap.set(currentDomain, domainMap.get(currentDomain) + count);
      else domainMap.set(currentDomain, count);
    }
  }
  domainMap.forEach((value, key) => {
    results.push(`${value} ${key}`);
  });
  return results;
};

console.log(
  subdomainVisits([
    '900 google.mail.com',
    '50 yahoo.com',
    '1 intel.mail.com',
    '5 wiki.org',
  ])
);
