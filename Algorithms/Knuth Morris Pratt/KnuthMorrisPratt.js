/**
 * Knuth-Morris-Pratt Algorithm for Substring Search
 * 
 * The KMP algorithm efficiently searches for a substring ('needle') within a string ('haystack')
 * by utilizing a preprocessing step to create a partial match table (LPS - Longest Prefix Suffix array).
 * This allows the algorithm to skip parts of the needle when a mismatch occurs, reducing the number
 * of comparisons and improving search time.
 * 
 * Time Complexity: O(N + L), where N is the length of the haystack and L is the length of the needle.
 * Space Complexity: O(L), due to the storage of the LPS array.
 * 
 * @param {string} haystack - The string to search within.
 * @param {string} needle - The substring to search for.
 * @return {number} - The index of the first occurrence of the needle in the haystack, or -1 if not found.
 */

function strStr(haystack, needle) {
    if (!needle) return 0;  // Return 0 if needle is empty.

    const lps = computeLPSArray(needle);  // Preprocess the needle to compute the LPS array.
    let i = 0;  // Index for haystack.
    let j = 0;  // Index for needle.

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }
        if (j === needle.length) {
            return i - j;  // Found the needle, return its start index in haystack.
        } else if (i < haystack.length && haystack[i] !== needle[j]) {
            if (j !== 0) {
                j = lps[j - 1];  // Use LPS array to skip characters in needle.
            } else {
                i++;
            }
        }
    }
    return -1;  // Needle not found in haystack.
}

/**
 * Computes the Longest Prefix Suffix (LPS) array for the given needle.
 * 
 * The LPS array stores the lengths of the longest proper prefix which is also a suffix
 * for all prefixes of the needle. This information is used to skip characters in the needle
 * during the search process, optimizing the search time.
 * 
 * @param {string} needle - The substring for which to compute the LPS array.
 * @return {Array} - The computed LPS array.
 */
function computeLPSArray(needle) {
    const lps = new Array(needle.length).fill(0);
    let len = 0;  // Length of the previous longest prefix suffix.
    let i = 1;

    while (i < needle.length) {
        if (needle[i] === needle[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];  // Fall back to the previous longest prefix suffix.
            } else {
                lps[i] = 0;  // No proper prefix which is also suffix exists.
                i++;
            }
        }
    }
    return lps;
}

// Export the function to be used in other modules.
module.exports = strStr;
