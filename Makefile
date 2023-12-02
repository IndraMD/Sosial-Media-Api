# files :=file1 
# migrate_create:
# 	@set /p file=Enter migration file name: && knex migrate:make $(file)
migrate_up:
	knex migrate:up
migrate_down:
	knex migrate:down
server:
	node src/main.js