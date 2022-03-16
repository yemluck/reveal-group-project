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

export default function score(rulesList, companyData) {
    let count = 0;
    let skipRule = false;
    // console.log('scoring now...')
    let totalScore = {
        transparencyTotal: 0,
        transparencyScore: 0,
        humanRightsTotal: 0,
        humanRightsScore: 0,
        environmentTotal: 0,
        environmentScore: 0,
    }
    // console.log('in score')
    // cycle through __membership__ rules list
    for (let rule of rulesList.membershipRules) {

        // check if the points received is positive or negative for total points calculation
        if (rule.points > 0) {
            // if positive: add possible points to total
            // only do once per rule
            if (rule.value_id === 1) {
                // Transparency
                totalScore.transparencyTotal += rule.points;
            } else if (rule.value_id === 2) {
                // Environmental
                totalScore.environmentTotal += rule.points;
            } else if (rule.value_id === 3) {
                // Human Rights
                totalScore.humanRightsTotal += rule.points;
            }
        }

        // cycle through all metrics (O(n^2) for rules * metrics)
        for (const metric of companyData) {
            count++;
            // check if rule parameter is included in the metric 
            if (metric.metric.includes(rule.organization)) {
                if (rule.value_id === 1) {
                    // 1 === Transparency
                    totalScore.transparencyScore += rule.points;
                    if (totalScore.transparencyScore < 0) { totalScore.transparencyScore = 0 }
                } else if (rule.value_id === 2) {
                    // Environmental
                    totalScore.environmentScore += rule.points;
                    if (totalScore.environmentScore < 0) { totalScore.environmentScore = 0 }
                } else if (rule.value_id === 3) {
                    // Human Rights
                    totalScore.humanRightsScore += rule.points;
                    if (totalScore.humanRightsScore < 0) { totalScore.humanRightsScore = 0 }
                }
                // stop evaluating metrics for this rule
                break
            }
        }
    }

    // console.log(rulesList.scoreRules)
    // __score__ rules
    for (let rule of rulesList.scoreRules) {

        // check if the points received is positive or negative for total points calculation
        if (rule.points > 0) {
            // if positive: add possible points to total
            if (rule.value_id === 1) {
                // Transparency
                totalScore.transparencyTotal += rule.points;
            } else if (rule.value_id === 2) {
                // Environmental
                totalScore.environmentTotal += rule.points;
            } else if (rule.value_id === 3) {
                // Human Rights
                totalScore.humanRightsTotal += rule.points;
            }
        }

        // cycle through all metrics
        for (const metric of companyData) {
            count++
            // check if rule name is the same as the metric name
            if (metric.metric.includes(rule.metric)) {
                if (Number(metric.value) > Number(rule.result)) {
                    if (rule.value_id === 1) {
                        // Transparency
                        totalScore.transparencyScore += rule.points;
                        if (totalScore.transparencyScore < 0) { totalScore.transparencyScore = 0 }
                    } else if (rule.value_id === 2) {
                        // Environmental
                        totalScore.environmentScore += rule.points;
                        if (totalScore.environmentScore < 0) { totalScore.environmentScore = 0 }
                    } else if (rule.value_id === 3) {
                        // Human Rights
                        totalScore.humanRightsScore += rule.points;
                        if (totalScore.humanRightsScore < 0) { totalScore.humanRightsScore = 0 }
                    }
                }
                // stop evaluating metrics for this rule
                break
            }
        }
    }
    totalScore.calculated = true;
    totalScore.count = count;
    totalScore.transparencyScore += 2
    if (totalScore.transparencyScore > totalScore.transparencyTotal) {
        totalScore.transparencyScore = totalScore.transparencyTotal
    }
    totalScore.environmentScore += 2
    if (totalScore.environmentScore > totalScore.environmentTotal) {
        totalScore.environmentScore = totalScore.environmentTotal
    }

    totalScore.humanRightsScore += 2
    if (totalScore.humanRightsScore > totalScore.humanRightsTotal) {
        totalScore.humanRightsScore = totalScore.humanRightsTotal
    }

    console.table(totalScore)
    return totalScore;
}