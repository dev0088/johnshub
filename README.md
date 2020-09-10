Djang Backend + React.js Frontend

================================

### Technical Stack

	- Python/Django: python 3.8, Django 3.1

	- Database: PostgreSQL

	- JWT auth based RESTful API
	
	- Social authentication for Facebook, Google and Twitter

	- React.js

	- Material UI framework (Dashboard style)

### Create server

	```
	$ python3.8 -m venv env

	$ source env/bin/activate

	$ pip install -r requirements.txt
	```

### Get static files

	```
	$ ./manage.py collectstatic
	```

### Migrate models into database
	```
	$ ./manage.py makemigrations
  $ ./manage.py migrate
	```

### Create admin user on server

	```
	$ ./manage.py createsuperuser
	```

### Build frontend
	```
		$ cd fronend
		$ yarn install
		$ yarn run build
	```
  
	Note: if you want to run this frontend as debug mode, you can do this:
	```
		$ yarn start
	```
	and connect to http://localhost:9000/

### Run server
	```
	$ ./manage.py runserver
	```

### Server urls

- http://127.0.0.1:8000/admin/

- http://127.0.0.1:8000/apis/

- http://127.0.0.1:8000/api-docs/

- http://127.0.0.1:8000/


### Deployment
	Deploy this backend with docker-compose mode.
	```
	$ ./deploy.sh
	```

### Troubleshooting
- Remove migration files
	After faking the migrations for all apps we need to delete the migrations files inside migrations folder in each app.

	You can use the previous bash script to automate this process in Unix bases OSs.

	```
	$ find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
	$ find . -path "*/migrations/*.pyc"  -delete
	```
	This will delete Python source files and also compiled Python files for migrations except for the special Python file init.py

- Make migrations again
	Now you need to re-create the initial database migrations with the usual commands
	```
	$ python manage.py makemigrations
	```
