# My Pocket

![Preview](https://i.imgur.com/iwLP0XV.jpg)

This README would normally document whatever steps are necessary to get the
application up and running.

## Informations

* Ruby version: 2.6.5

* Rails version: 6.0.1

* Dependencies: sqlite3 (1.4), puma (4.1), bootsnap (1.4.2) and rack-cors

## License

All source code in the [Ruby on Rails Tutorial](http://railstutorial.org/) is available jointly under the MIT License and the Beerware License. See [LICENSE.md](LICENSE.md) for details.

## Getting started

To get started with the app, clone the repo and then install the needed gems:

    $ cd /path/to/repos
    $ git clone https://github.com/lpeil/My-Pocket my-pocket
    $ cd my-pocket
    $ bundle install --without production

Next, migrate the database:

    $ rails db:migrate

Finally, run the test suite to verify that everything is working correctly:

    $ rails test

If the test suite passes, you'll be ready to run the app in a local server:

    $ rails s -p 3001
    
If you change the port, you have to change in the client to.

For more information, see the
[*Ruby on Rails Tutorial* book](http://www.railstutorial.org/book).
