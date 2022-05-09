# game-api-postgres

work in progress...

Another try for gameing api with postgres.

Installed local postgres Docker Container.

    CREATE TABLE GAMESCORE (
        ID SERIAL PRIMARY KEY,
        GAMER TEXT NOT NULL,
        SCORE INTEGER NOT NULL
    );

# start dev

    npm run dev

# push

