
# Docker

```bash
#in Terminal
docker run --name postgres-nest-taskm -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

`--name`: the name of the docker container
`-p`: containers port and *map it* to hosts port
`-e`: environment variable to set password
`-d`: detached (runs in background)

```bash
#in Terminal -- to stop the container
docker container stop postgres-nest-taskm

#in Terminal -- to start the container
docker container start postgres-nest-taskm

#in Terminal -- to delete the container
docker container stop postgres-nest-taskm
docker container rm postgres-nest
```

# pgAdmin -- GUI Cross platform

Alternatives for pgAdmin are `dbeaver, navicat, postico`
