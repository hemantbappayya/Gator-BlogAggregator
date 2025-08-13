# Gator-BlogAggregator

Gator-BlogAggregator is a command-line interface (CLI) tool designed to aggregate blog posts from various RSS feeds. Users can register, log in, manage RSS feeds, follow feeds, and browse aggregated content.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18 or higher.
- **npm** (Node Package Manager) or **Yarn**: Comes with Node.js installation.
- **PostgreSQL**: A running PostgreSQL database instance.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/hemantbappayya/Gator-BlogAggregator.git
    cd Gator-BlogAggregator
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Build the project:**
    ```bash
    npm run build
    # or
    yarn build
    ```

## Configuration

The CLI requires a configuration file named `.gatorconfig.json` located in your home directory. This file specifies the database connection URL and your current username.

1.  **Create the configuration file:**
    Create a file named `.gatorconfig.json` in your home directory (e.g., `/home/youruser/.gatorconfig.json` on Linux/macOS, or `C:\Users\youruser\.gatorconfig.json` on Windows).

2.  **Add the following content to `.gatorconfig.json`:**
    ```json
    {
      "db_url": "postgresql://user:password@host:port/database",
      "current_user_name": "your_username"
    }
    ```
    - Replace `"postgresql://user:password@host:port/database"` with your actual PostgreSQL connection string.
    - Replace `"your_username"` with a desired username for your CLI interactions.

## Database Setup

The project uses Drizzle ORM for database interactions and migrations.

1.  **Run database migrations:**
    Ensure your PostgreSQL database is running and accessible via the `db_url` configured in `.gatorconfig.json`. Then, run the migrations:
    ```bash
    npm run migrate
    # or
    yarn migrate
    ```
    This will apply all necessary schema changes to your database.

## Running the CLI

You can run the CLI commands using `npm start` or `yarn start` followed by the command name and its arguments.

**Example:**

```bash
npm start <command> [args...]
# or
yarn start <command> [args...]
```

## Available Commands

Here are a few of the commands you can run:

- **`register`**: Register a new user.

  ```bash
  npm start register <username> <password>
  ```

- **`login`**: Log in an existing user.

  ```bash
  npm start login <username> <password>
  ```

- **`addfeed`**: Add a new RSS feed to the aggregator. (Requires login)

  ```bash
  npm start addfeed <feed_name> <feed_url>
  ```

- **`feeds`**: List all available RSS feeds.

  ```bash
  npm start feeds
  ```

- **`follow`**: Follow an RSS feed to receive its posts. (Requires login)

  ```bash
  npm start follow <feed_id>
  ```

- **`following`**: List the RSS feeds you are currently following. (Requires login)

  ```bash
  npm start following
  ```

- **`agg`**: Aggregate (fetch) new posts from all followed feeds.

  ```bash
  npm start agg
  ```

- **`browse`**: Browse aggregated blog posts. (Requires login)

  ```bash
  npm start browse
  ```

- **`users`**: List all registered users.

  ```bash
  npm start users
  ```

- **`reset`**: Reset the database (use with caution!).
  ```bash
  npm start reset
  ```
