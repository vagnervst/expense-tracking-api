build:
	docker-compose build

down:
	docker-compose down

stop:
	docker-compose stop

start:
	docker-compose up -d api mongo

logs:
	docker-compose logs -f api

images:
	docker-compose images

bootstrap:
	make build && make start

test-unit:
	docker-compose up --abort-on-container-exit test-unit

test-integration:
	docker-compose up --abort-on-container-exit test-integration mongo
