run-db:
	docker run --name QR_Code_Menu -p 5432:5432 -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=qrcodemenu -v ${PWD}/db_data:/var/lib/postresql/data -d postgres