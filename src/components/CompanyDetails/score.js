/*

inputs:
rulesList = {
    membershipRules: [
        a,
        b
    ],
    scoreRules: [
        a,
        b
    ]
}
metricsList: [
    metricA: {},
    metricB: {}
]

*/


export default function score(rulesList, metricsList) {

    let totalScore = {
        transparencyTotal: 0,
        transparencyScore: 0,
        humanRightsTotal: 0,
        humanRightsScore: 0,
        environmentTotal: 0,
        environmentScore: 0,
    }
    // cycle through __membership__ rules list
    for (rule of rulesList.membershipRules) {
        // cycle through all metrics
        for (metric of metricsList) {
            // check if rule name is the same as the metric name
            if (rule.name == metric.name) {
                let value = rule.value;
                // check if the points received is positive or negative
                if (rule.points > 0) {
                    // if positive: add possible points to total
                    let valueTotal = value + "Total";
                    totalScore.value += rule.points;
                }
                // check if company measured score is higher than the minimum value in the rule, and assign points
                if (metric.score > rule.score) {
                    let valueScore = value + "Score";
                    totalScore.valueScore += rule.points;
                }
            
            }
        }
    }

    return totalScore;

}