# game-api-postgres

Another try for gaimng api with postgres.

    CREATE TABLE GAMESCORE (
        ID SERIAL PRIMARY KEY,
        GAMER TEXT NOT NULL,
        SCORE INTEGER NOT NULL
    );
