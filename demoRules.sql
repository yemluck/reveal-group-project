-- run this after running 'npm run database'
-- this inserts some demo rules into our database to test the ap
-- these rules are primarily for oil and gas companies

INSERT INTO "membership_rule"
( "organization", "points", "industry", "value_id" )
VALUES
( 'UN Global Compact+UNGC Status', 1, 'Oil and Gas', 2 ),
( 'Business & Human Rights Resource Centre+Modern Slavery Statement', 1, 'Oil and Gas', 3 ),
( 'Poverty Footprint+Fair Trade Mechanism', 1, 'Oil and Gas', 3 ),
( 'Minerals Sourcing+International Copper Alliance Membership', 1, 'Oil and Gas', 2 ),
( 'Climate Action 100 Plus+Climate Action 100 Plus Companies', 1, 'Oil and Gas', 3 ),
( 'Amnesty International+Conflict Minerals Report', 2, 'Oil and Gas', 1 );

INSERT INTO "score_rule"
( "metric", "result", "points", "industry", "value_id" )
VALUES
( 'Global Reporting Initiative+Environmental Fines, GRI 307-1 (formerly G4-EN29-a)', 100000, -1, 'Oil and Gas', 2 ),
( 'University of Sydney SDG Research Group 2019+Social Metrics Disclosure Rate', 2, 1, 'Oil and Gas', 1 ),
( 'WikiRate SDG Metric design+Common Environmental Metrics Reported', 1, 1, 'Oil and Gas', 2 ),
( 'WikiRate SDG Metric design+Common Social Metrics Reported', 2, 1, 'Oil and Gas', 1 ),
( 'WikiRate Calculated Metric Design Group+Disclosure rate on selected social and environmental metrics', 1, 1, 'Oil and Gas', 1 ),
( 'Sussex Research Group+Diversity Inclusion Disclosure', 2, 1, 'Oil and Gas', 3 ),
( 'Nottingham Trent SDG Summer School 2019 Research Group+Nottingham Trent SDG Disclosure Rate', 5, 1, 'Oil and Gas', 1 ),
( 'Global Reporting Initiative+Hazardous Waste Recycled, GRI 306-2-a (formerly G4-EN23-a)', 100000, 1, 'Oil and Gas', 2 ),
( 'Global Reporting Initiative+Hazardous Waste Created (G4-EN23-a)', 100000, -1, 'Oil and Gas', 2 ),
( 'Poverty Footprint+Women in Management Positions', 50, 1, 'Oil and Gas', 3 ),
( 'Global Reporting Initiative+Hazardous Air Pollutant (HAP) emissions, GRI 305-7-a (formerly G4-EN21-a)', 100, -1, 'Oil and Gas', 2 ),
( 'GOV.UK Gender Pay Gap Service+Median Gender Pay Gap (Hourly Pay)', 5, -1, 'Oil and Gas', 1 ),
( 'OpenCorporates+Industry Class', 10000, 1, 'Oil and Gas', 1 ),
( 'WikiRate SDG Metric design+Common Environmental Metrics Reported', 1, 1, 'Oil and Gas', 2 ),
( 'World Benchmarking Alliance+Corporate Human Rights Benchmark UNGP Score', 5, 3, 'Oil and Gas', 3 ),
( 'As You Sow+Excess CEO Pay (%)', 20, -2, 'Oil and Gas', 1 ),
( 'University of Sydney SDG Research Group 2021+Social Metrics Disclosure Rate', 10, 1, 'Oil and Gas', 1 ),
( 'Global Reporting Initiative+Direct greenhouse gas (GHG) emissions (Scope 1), GRI 305-1-a (formerly G4-EN15-a)', 5000000, -1, 'Oil and Gas', 2 ),
( 'Global Reporting Initiative+Direct greenhouse gas (GHG) emissions (Scope 1), GRI 305-1-a (formerly G4-EN15-a)', 10000000, -2, 'Oil and Gas', 2 ),
( 'Global Reporting Initiative+Direct greenhouse gas (GHG) emissions (Scope 1), GRI 305-1-a (formerly G4-EN15-a)', 15000000, -3, 'Oil and Gas', 2 );