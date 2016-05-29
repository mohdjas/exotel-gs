all: dist

dist: clean ## Generate distributable version
		mkdir dist/
		awk 'FNR==1{print ""}{print}' src/Exotel.gs src/ExotelClient.gs src/Utilities.gs > dist/Exotel.gs

clean: ## Remove distributable version
		rm -rf dist/

.PHONY: help

help: ## You can always run this command to see what options are available to you while running the make command
				@grep -P '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
