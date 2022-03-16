-- run this after running 'npm run database'
-- this inserts some demo rules into our database to test the ap
-- these rules are primarily for oil and gas companies

INSERT INTO "membership_rule"
( "organization", "points", "industry", "value_id" )
VALUES
( 'UNGC Status', 1, 'Oil and Gas', 2 ),
( 'Modern Slavery Statement', 1, 'Oil and Gas', 3 ),
( 'Fair Trade Mechanism', 1, 'Oil and Gas', 3 ),
( 'International Copper Alliance Membership', 1, 'Oil and Gas', 2 ),
( 'Climate Action 100 Plus Companies', 1, 'Oil and Gas', 3 ),
( 'Conflict Minerals Report', 2, 'Oil and Gas', 1 );

INSERT INTO "score_rule"
( "metric", "result", "points", "industry", "value_id" )
VALUES
( 'Environmental Fines, GRI 307-1 (formerly G4-EN29-a)', 100000, -1, 'Oil and Gas', 2 ),
( 'Social Metrics Disclosure Rate', 2, 1, 'Oil and Gas', 1 ),
( 'Common Environmental Metrics Reported', 1, 1, 'Oil and Gas', 2 ),
( 'Common Social Metrics Reported', 2, 1, 'Oil and Gas', 1 ),
( 'Disclosure rate on selected social and environmental metrics', 1, 1, 'Oil and Gas', 1 ),
( 'Diversity Inclusion Disclosure', 2, 1, 'Oil and Gas', 3 ),
( 'Nottingham Trent SDG Disclosure Rate', 5, 1, 'Oil and Gas', 1 ),
( 'Hazardous Waste Recycled, GRI 306-2-a (formerly G4-EN23-a)', 100000, 1, 'Oil and Gas', 2 ),
( 'Hazardous Waste Created (G4-EN23-a)', 100000, -1, 'Oil and Gas', 2 ),
( 'Women in Management Positions', 50, 1, 'Oil and Gas', 3 ),
( 'Hazardous Air Pollutant (HAP) emissions, GRI 305-7-a (formerly G4-EN21-a)', 100, -1, 'Oil and Gas', 2 ),
( 'Median Gender Pay Gap (Hourly Pay)', 5, -1, 'Oil and Gas', 1 ),
( 'Industry Class', 10000, 1, 'Oil and Gas', 1 ),
( 'Common Environmental Metrics Reported', 1, 1, 'Oil and Gas', 2 ),
( 'Corporate Human Rights Benchmark UNGP Score', 5, 3, 'Oil and Gas', 3 ),
( 'Excess CEO Pay (%)', 20, -2, 'Oil and Gas', 1 ),
( 'Social Metrics Disclosure Rate', 10, 1, 'Oil and Gas', 1 ),
( 'Direct greenhouse gas (GHG) emissions (Scope 1), GRI 305-1-a (formerly G4-EN15-a)', 5000000, -1, 'Oil and Gas', 2 ),
( 'Direct greenhouse gas (GHG) emissions (Scope 1), GRI 305-1-a (formerly G4-EN15-a)', 10000000, -2, 'Oil and Gas', 2 ),
( 'Direct greenhouse gas (GHG) emissions (Scope 1), GRI 305-1-a (formerly G4-EN15-a)', 15000000, -3, 'Oil and Gas', 2 );