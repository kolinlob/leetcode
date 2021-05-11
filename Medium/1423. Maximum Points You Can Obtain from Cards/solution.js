/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
 var maxScore = function(cardPoints, k) {  
    let totalPoints = cardPoints.reduce((a,c) => a + c);
    let windowScore = cardPoints.slice(k).reduce((a,c) => a + c, 0);
    
    let minWindowScore = windowScore;
    for (let i = 1; i <= k; i++) {
        windowScore += cardPoints[k-i] - cardPoints[cardPoints.length-i];
        minWindowScore = Math.min(minWindowScore, windowScore);
    }
    return totalPoints - minWindowScore;
};