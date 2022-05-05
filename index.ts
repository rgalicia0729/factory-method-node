interface Connection {
  connect(): string;
}

class PostgreSQL implements Connection {
  public connect(): string {
    return 'Connected to PostgreSQL';
  }
}

class MySql implements Connection {
  public connect(): string {
    return 'Connected to MySQL';
  }
}

abstract class CreateConnection {
  public abstract getConnection(): Connection;

  public seeConnection(): string {
    const connection = this.getConnection();

    return connection.connect();
  }
}

class ConnectToPostgreSQL extends CreateConnection {
  public getConnection(): Connection {
    return new PostgreSQL();
  }
}

class ConnectToMySql extends CreateConnection {
  public getConnection(): Connection {
    return new MySql();
  }
}

const clientCode = (createConnection: CreateConnection) => {
  console.log(createConnection.seeConnection());
}

clientCode(new ConnectToPostgreSQL());
clientCode(new ConnectToMySql());
