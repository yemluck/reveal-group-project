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
    let totalScore = {
        transparencyTotal: 0,
        transparencyScore: 0,
        humanRightsTotal: 0,
        humanRightsScore: 0,
        environmentTotal: 0,
        environmentScore: 0,
    }

    // console.log('in score')
    
    // console.log(rulesList.membershipRules)
    // cycle through __membership__ rules list
    for (const rule of rulesList.membershipRules) {
        // cycle through all metrics
        for (const metric of companyData) {
            // check if rule name is the same as the metric name
            if (rule.organization == metric.metric) {
                if(rule.value_id === 1){
                    // Transparency
                    totalScore.transparencyScore += rule.points;
                    if (totalScore.transparencyScore < 0) {totalScore.transparencyScore = 0}
                } else if (rule.value_id === 2) {
                    // Environmental
                    totalScore.environmentScore += rule.points;
                    if (totalScore.environmentScore < 0) {totalScore.environmentScore = 0}

                } else if (rule.value_id === 3) {
                    // Human Rights
                    totalScore.humanRightsScore += rule.points;
                    if (totalScore.humanRightsScore < 0) {totalScore.humanRightsScore = 0}

                }

                // check if the points received is positive or negative for total points calculation
                if (rule.points > 0) {
                    // if positive: add possible points to total

                    if(rule.value_id === 1){
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
            
            }
        }
    }

    // console.log(rulesList.scoreRules)
    // __score__ rules
    for (const rule of rulesList.scoreRules) {
        // cycle through all metrics
        for (const metric of companyData) {
            // check if rule name is the same as the metric name
            if (rule.metric == metric.metric) {
                if( Number(metric.value) > Number(rule.result) ){ 
                    if(rule.value_id === 1){
                        // Transparency
                        totalScore.transparencyScore += rule.points;
                        if (totalScore.transparencyScore < 0) {totalScore.transparencyScore = 0}
                    } else if (rule.value_id === 2) {
                        // Environmental
                        totalScore.environmentScore += rule.points;
                        if (totalScore.environmentScore < 0) {totalScore.environmentScore = 0}
                    } else if (rule.value_id === 3) {
                        // Human Rights
                        totalScore.humanRightsScore += rule.points;
                        if (totalScore.humanRightsScore < 0) {totalScore.humanRightsScore = 0}
                    }

                    // check if the points received is positive or negative for total points calculation
                    if (rule.points > 0) {
                        // if positive: add possible points to total

                        if(rule.value_id === 1){
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
                }
            }
        }
    }
    totalScore.calculated = true;
    // console.table(totalScore)
    return totalScore;
}