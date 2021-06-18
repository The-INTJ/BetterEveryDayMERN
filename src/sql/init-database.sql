
IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'BetterEveryDay')
  BEGIN
    CREATE DATABASE BetterEveryDay
END;

GO

USE BetterEveryDay;

DROP TABLE IF EXISTS [goalslist];
DROP TABLE IF EXISTS [goals];
DROP TABLE IF EXISTS [users];

CREATE TABLE users
(
	userID INT CHECK (userID > 0) NOT NULL IDENTITY PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL,
    phone VARCHAR(50) DEFAULT '000-000-0000', 
	score FLOAT DEFAULT 1.00	
);

CREATE TABLE goals
(
	goalID INT CHECK (goalID > 0) NOT NULL IDENTITY PRIMARY KEY,
	goalName VARCHAR(50) NOT NULL,
	daily BINARY
);

CREATE TABLE goalslist
(
	userID INT CHECK (userID > 0) NOT NULL,
	goalID INT CHECK (goalID > 0) NOT NULL,
	completed BINARY DEFAULT 0,
	FOREIGN KEY(userID) REFERENCES users(userID) ON DELETE CASCADE,
	FOREIGN KEY(goalID) REFERENCES goals(goalID) ON DELETE CASCADE,
	CONSTRAINT user_goal UNIQUE (userID,goalID)
);


INSERT INTO goals (goalName, daily)
VALUES ('Alcohol free', 0);

INSERT INTO goals (goalName, daily)
VALUES ('Debt free', 0);

INSERT INTO goals (goalName, daily)
VALUES ('Graduate', 0);

INSERT INTO goals (goalName, daily)
VALUES ('Lose Weight', 0);

INSERT INTO goals (goalName, daily)
VALUES ('Exercise', 1);

INSERT INTO goals (goalName, daily)
VALUES ('Make bed', 1);

INSERT INTO goals (goalName, daily)
VALUES ('Meditate', 1);

INSERT INTO goals (goalName, daily)
VALUES ('Yoga', 1);