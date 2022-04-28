# game-api-postgres

work in progress...

Another try for gaimng api with postgres.

Installed local postgres Docker Container.

    CREATE TABLE GAMESCORE (
        ID SERIAL PRIMARY KEY,
        PLAYERNAME TEXT NOT NULL,
        SCORE INTEGER NOT NULL
    );

# start dev

    npm run dev

