# Knuth-Morris-Pratt (KMP) Algorithm

The Knuth-Morris-Pratt (KMP) algorithm is an efficient method for substring search, which significantly improves over the naive approach by eliminating redundant comparisons. The key to its efficiency is the use of a preprocessing phase that generates a partial match table (also known as the Longest Prefix Suffix (LPS) table). This table allows the algorithm to skip sections of the text that are guaranteed to match, thus reducing the overall number of comparisons.

## Implementation in JavaScript

```

function strStr(haystack, needle) {
    if (!needle) return 0; // Handle the edge case of an empty needle.

    let lps = computeLPSArray(needle); // Preprocess the needle.
    let i = 0; // Index for haystack.
    let j = 0; // Index for needle.

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++, j++;
        }
        if (j === needle.length) {
            return i - j; // Match found.
        } else if (i < haystack.length && haystack[i] !== needle[j]) {
            if (j !== 0) j = lps[j - 1];
            else i++;
        }
    }
    return -1; // No match found.
}

function computeLPSArray(needle) {
    let lps = new Array(needle.length).fill(0);
    let len = 0; // Length of the previous longest prefix suffix.
    let i = 1;

    while (i < needle.length) {
        if (needle[i] === needle[len]) {
            lps[i] = ++len;
            i++;
        } else {
            if (len !== 0) len = lps[len - 1];
            else lps[i++] = 0;
        }
    }
    return lps;
}
```

## Time and Space Complexity

- **Time Complexity**: The KMP algorithm has a time complexity of O(N+L), where N is the length of the haystack and L is the length of the needle. This is because the algorithm only needs to traverse the haystack and the needle once, thanks to the information provided by the LPS table.

- **Space Complexity**: The space complexity of KMP is O(L) due to the storage requirements of the LPS table, where L is the length of the needle.

## Conclusion

The KMP algorithm is a powerful tool for substring searching, offering significant performance improvements over simpler methods, particularly for strings with repeating patterns. Its efficient use of the LPS table to skip unnecessary comparisons makes it ideal for applications requiring fast and frequent text searches.
