create database NewsApp;
use newsapp;
select * from news;
INSERT INTO news (id, author, category, date, description, subcategory, title)
VALUES
(1, 'John Doe', 'Technology', '2024-09-13 10:00:00', 'A new tech innovation is making waves in the industry.', 'Gadgets', 'Tech Innovation of 2024'),
(2, 'Jane Smith', 'Health', '2024-09-12 14:30:00', 'New advancements in health care are changing lives.', 'Wellness', 'Health Breakthroughs'),
(3, 'Alice Johnson', 'Finance', '2024-09-11 09:15:00', 'Stock market trends are shifting rapidly this quarter.', 'Investing', 'Stock Market Trends');
